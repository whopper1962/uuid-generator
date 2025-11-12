export const UuidVersion = {
  v1: "Version 1",
  v3: "Version 3",
  v4: "Version 4",
  v5: "Version 5",
  v6: "Version 6",
  v7: "Version 7",
} as const;

export type UuidVersion = (typeof UuidVersion)[keyof typeof UuidVersion];
