import { useEffect, useState } from "react";

const LEET_MAP: Record<string, string[]> = {
  a: ["4", "@", "/-\\"],
  b: ["8", "ß"],
  c: ["<", "(", "{"],
  d: ["|)", "[)"],
  e: ["3", "€"],
  f: ["ƒ", "|="],
  g: ["6", "9"],
  h: ["#", "|-|"],
  i: ["1", "!", "|"],
  l: ["1", "|", "£"],
  o: ["0", "()", "Ø"],
  s: ["5", "$", "§"],
  t: ["7", "+"],
  u: ["µ", "|_|"],
  z: ["2"],
};

const pickLeet = (ch: string): string => {
  const lower = ch.toLowerCase();
  const options = LEET_MAP[lower];
  if (!options) return ch;
  const pick = options[Math.floor(Math.random() * options.length)];
  return ch === lower ? pick : pick.toUpperCase();
};

interface LeetTextProps {
  text: string;
  className?: string;
  /** ms between scramble frames */
  interval?: number;
  /** ms between each character resolving back to original */
  revealStep?: number;
  /** how long to keep scrambling before starting to reveal */
  scrambleDuration?: number;
  /** ms to wait after fully revealed before restarting */
  pause?: number;
}

const LeetText = ({
  text,
  className,
  interval = 110,
  revealStep = 90,
  scrambleDuration = 600,
  pause = 4500,
}: LeetTextProps) => {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let cancelled = false;
    const timeouts: number[] = [];
    const intervals: number[] = [];

    const cycle = () => {
      if (cancelled) return;
      const chars = text.split("");
      const locked = new Array(chars.length).fill(false);

      const scrambleId = window.setInterval(() => {
        setDisplay(
          chars
            .map((c, i) => {
              if (locked[i]) return c;
              if (c === " " || c === "\n") return c;
              return Math.random() < 0.55 ? pickLeet(c) : c;
            })
            .join("")
        );
      }, interval);
      intervals.push(scrambleId);

      const startReveal = window.setTimeout(() => {
        window.clearInterval(scrambleId);
        // reveal each non-space character one by one in random order
        const order = chars
          .map((_, i) => i)
          .filter((i) => chars[i] !== " " && chars[i] !== "\n")
          .sort(() => Math.random() - 0.5);

        order.forEach((idx, n) => {
          const t = window.setTimeout(() => {
            locked[idx] = true;
            setDisplay(
              chars
                .map((c, i) => {
                  if (locked[i]) return c;
                  if (c === " " || c === "\n") return c;
                  return pickLeet(c);
                })
                .join("")
            );
          }, n * revealStep);
          timeouts.push(t);
        });

        const restart = window.setTimeout(() => {
          setDisplay(text);
          const next = window.setTimeout(cycle, pause);
          timeouts.push(next);
        }, order.length * revealStep + 80);
        timeouts.push(restart);
      }, scrambleDuration);
      timeouts.push(startReveal);
    };

    // Kick off immediately on mount so it runs during page load
    setDisplay(
      text
        .split("")
        .map((c) => (c === " " || c === "\n" ? c : pickLeet(c)))
        .join("")
    );
    const initial = window.setTimeout(cycle, 50);
    timeouts.push(initial);

    return () => {
      cancelled = true;
      timeouts.forEach((t) => window.clearTimeout(t));
      intervals.forEach((i) => window.clearInterval(i));
    };
  }, [text, interval, revealStep, scrambleDuration, pause]);

  return (
    <span
      className={className}
      style={{ whiteSpace: "pre-line", fontVariantLigatures: "none" }}
      aria-label={text}
    >
      {display}
    </span>
  );
};

export default LeetText;
