export const space = {
  "1px": 1,
  "2px": 2,
  "4px": 4,
  "8px": 8,
  "16px": 16,
  "24px": 24,
  "32px": 32,
  "40px": 40,
} as const;

export type Space = keyof typeof space;
