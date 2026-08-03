import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const IPV4 = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

const DNSBL_ZONES = [
  { zone: "zen.spamhaus.org", label: "Spamhaus ZEN" },
  { zone: "bl.blocklist.de", label: "blocklist.de" },
  { zone: "dnsbl.dronebl.org", label: "DroneBL" },
];

async function dnsblLookup(ip: string, zone: string): Promise<boolean> {
  const reversed = ip.split(".").reverse().join(".");
  try {
    const res = await fetch(
      `https://cloudflare-dns.com/dns-query?name=${reversed}.${zone}&type=A`,
      { headers: { accept: "application/dns-json" } },
    );
    if (!res.ok) return false;
    const data = await res.json();
    return Array.isArray(data.Answer) && data.Answer.some((a: { type: number }) => a.type === 1);
  } catch {
    return false;
  }
}

async function greynoise(ip: string) {
  try {
    const res = await fetch(`https://api.greynoise.io/v3/community/${ip}`);
    const data = await res.json();
    if (res.status === 404 || data?.noise === undefined) {
      return { noise: false, riot: false, message: data?.message ?? "No data" };
    }
    return {
      noise: !!data.noise,
      riot: !!data.riot,
      classification: data.classification ?? null,
      name: data.name ?? null,
      lastSeen: data.last_seen ?? null,
      link: data.link ?? null,
      message: data.message ?? null,
    };
  } catch {
    return { noise: false, riot: false, message: "GreyNoise lookup failed" };
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { ip } = await req.json();
    if (typeof ip !== "string" || !IPV4.test(ip.trim())) {
      return new Response(JSON.stringify({ error: "Please provide a valid IPv4 address." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const address = ip.trim();
    const [gn, ...dnsbl] = await Promise.all([
      greynoise(address),
      ...DNSBL_ZONES.map((z) => dnsblLookup(address, z.zone)),
    ]);

    const listings = DNSBL_ZONES.map((z, i) => ({ label: z.label, listed: dnsbl[i] as boolean }));
    const listedCount = listings.filter((l) => l.listed).length;

    let verdict: "clean" | "suspicious" | "malicious" | "benign" = "clean";
    if (gn.riot) verdict = "benign";
    if (gn.noise && gn.classification === "malicious") verdict = "malicious";
    else if (listedCount >= 2 || (gn.noise && gn.classification !== "benign")) verdict = "suspicious";
    else if (listedCount === 1) verdict = "suspicious";

    return new Response(
      JSON.stringify({ ip: address, verdict, greynoise: gn, listings, listedCount, checkedAt: new Date().toISOString() }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
