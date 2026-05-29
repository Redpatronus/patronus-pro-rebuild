import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  recaptchaToken?: string;
}

const RECAPTCHA_MIN_SCORE = 0.5;

async function verifyRecaptcha(token: string): Promise<{ ok: boolean; score?: number; reason?: string }> {
  const secret = Deno.env.get("RECAPTCHA_SECRET_KEY");
  if (!secret) return { ok: false, reason: "missing_secret" };
  if (!token) return { ok: false, reason: "missing_token" };

  const params = new URLSearchParams({ secret, response: token });
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
  const data = await res.json();
  if (!data.success) return { ok: false, reason: "verification_failed", score: data.score };
  if (typeof data.score === "number" && data.score < RECAPTCHA_MIN_SCORE) {
    return { ok: false, reason: "low_score", score: data.score };
  }
  return { ok: true, score: data.score };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactFormData = await req.json();

    if (!data.name || !data.company || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const captcha = await verifyRecaptcha(data.recaptchaToken || "");
    if (!captcha.ok) {
      console.warn("reCAPTCHA rejected:", captcha);
      return new Response(
        JSON.stringify({ error: "reCAPTCHA verification failed", reason: captcha.reason }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Contact form submission received:", {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone || "Not provided",
      messageLength: data.message.length,
      recaptchaScore: captcha.score,
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ success: true, message: "Contact form submitted successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
