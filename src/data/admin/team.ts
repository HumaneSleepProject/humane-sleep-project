// Owners used across the admin. THIS FILE IS PUBLIC (the repo is public): roles only, no names or contact info.
export const OWNERS = ['CEO', 'COO', 'CFO', 'Grants intern', 'Ops intern', 'Members'] as const;
export type Owner = (typeof OWNERS)[number];
