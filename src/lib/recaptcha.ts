export const RECAPTCHA_SITE_KEY = "6LebMgItAAAAACPQqyPUWqX27GB8btVC2rcBGtMs";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let loaderPromise: Promise<void> | null = null;

export function loadRecaptcha(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.grecaptcha) return Promise.resolve();
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-recaptcha="true"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("recaptcha load failed")));
      return;
    }
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    s.async = true;
    s.defer = true;
    s.dataset.recaptcha = "true";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("recaptcha load failed"));
    document.head.appendChild(s);
  });
  return loaderPromise;
}

export async function getRecaptchaToken(action: string): Promise<string> {
  await loadRecaptcha();
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) return reject(new Error("recaptcha unavailable"));
    window.grecaptcha.ready(() => {
      window
        .grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}
