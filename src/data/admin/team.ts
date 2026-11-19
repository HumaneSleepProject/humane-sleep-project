// Who does what at HSP. THIS FILE IS PUBLIC (the repo is public): roles and first names only, no contact info.
export const OWNERS = ['CEO', 'COO', 'CFO', 'Grants intern', 'Ops intern', 'Members'] as const;
export type Owner = (typeof OWNERS)[number];

export interface Lane {
  owner: Owner;
  who: string;
  lane: string;
  tools: { href: string; label: string }[];
}

export const TEAM: Lane[] = [
  {
    owner: 'CEO',
    who: 'Sidharth Sreedar',
    lane: 'Main driving force. Builds and keeps up partnerships.',
    tools: [{ href: '/admin/partners', label: 'Partnerships' }],
  },
  {
    owner: 'COO',
    who: 'Aditi Sharma',
    lane: 'Maps, new drive ideas and partnerships.',
    tools: [
      { href: '/admin/ideas', label: 'Drive ideas' },
      { href: '/admin/partners', label: 'Partnerships' },
      { href: '/admin/directory', label: 'Directory check' },
    ],
  },
  {
    owner: 'CFO',
    who: 'Abhi Vishwas',
    lane: 'Money, grants, filings, supply orders and the website.',
    tools: [
      { href: '/admin/grants', label: 'Grants & filings' },
      { href: '/admin/supplies', label: 'Supplies & orders' },
    ],
  },
  {
    owner: 'Grants intern',
    who: 'Intern',
    lane: 'Grant writing: drafts applications and keeps funder deadlines.',
    tools: [{ href: '/admin/grants', label: 'Grants & filings' }],
  },
  {
    owner: 'Ops intern',
    who: 'Intern',
    lane: 'Map and operations: keeps the find-help directory and map current.',
    tools: [{ href: '/admin/directory', label: 'Directory check' }],
  },
  {
    owner: 'Members',
    who: 'Three members',
    lane: 'Packing days, outreach and events.',
    tools: [
      { href: '/admin/events', label: 'Events' },
      { href: '/admin/ideas', label: 'Drive ideas' },
    ],
  },
];
