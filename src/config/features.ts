/**
 * Feature flags.
 * Flip to true to re-enable a feature across the site.
 */
export const FEATURES = {
  /** Tools section: homepage block, /tools pages and the header nav link. */
  tools: false,
  /** VIG Re content: homepage testimonial quote and the VIG Re partner tile. */
  vig: false,
} as const;
