// The editable boards in /admin. Each one is a list stored in the repo on the "admin-data" branch,
// so edits show up right away and do not rebuild the public site. THE REPO IS PUBLIC: never store
// contact info, balances, or where anyone sleeps in these lists.
import { OWNERS } from './team';
import { PARTNER_ROWS } from './partners';
import { IDEAS } from './ideas';

export type FieldType = 'text' | 'select' | 'date' | 'textarea';
export interface Field {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: readonly string[];
}
export type Item = { id: string } & Record<string, string>;

export interface Collection {
  key: 'tasks' | 'partners' | 'ideas';
  title: string;
  blurb: string;
  noun: string;
  titleKey: string;
  statusKey: string;
  statusOrder: readonly string[];
  doneValues: readonly string[];
  dueKey?: string;
  chipKeys: readonly string[];
  fields: Field[];
  seed: Item[];
}

const owner: Field = { key: 'owner', label: 'Owner', type: 'select', required: true, options: OWNERS };

const TASK_STATUS = ['To do', 'Doing', 'Done'] as const;
const PARTNER_STAGE = ['In talks', 'Reached out', 'Idea', 'Active', 'Paused'] as const;
const IDEA_STATUS = ['Scheduled', 'Planning', 'Idea', 'Done'] as const;

const seedTasks: [string, string, string, string][] = [
  ['Register for the mandatory Tri-Valley workshop (10am)', 'Grants intern', '2026-12-02', 'Required before the application opens Nov 23.'],
  ['Create the Walmart Spark Good account and submit', 'Grants intern', '2026-11-30', 'Final 2026 cycle. Missed in 2024.'],
  ['Confirm 990-N is on file for 2024 and 2025', 'CFO', '2026-11-20', 'File at irs.gov/990n if missing.'],
  ['Check Good360 catalog for sleeping bags before ordering', 'CFO', '', 'Free membership.'],
  ['Pick who counts as a sponsor and draft outreach', 'CEO', '', 'Drafts only until reviewed.'],
  ['Call 10 directory listings that are over 6 months old', 'Ops intern', '', 'Use Directory check, oldest first.'],
  ['Plan this winter outreach (bags, kits, volunteers)', 'COO', '2026-12-10', 'Cost it in Supplies & orders.'],
];

export const COLLECTIONS: Record<Collection['key'], Collection> = {
  tasks: {
    key: 'tasks',
    title: 'Tasks',
    blurb: 'Everything that needs doing, who has it, and when.',
    noun: 'task',
    titleKey: 'title',
    statusKey: 'status',
    statusOrder: TASK_STATUS,
    doneValues: ['Done'],
    dueKey: 'due',
    chipKeys: ['owner', 'status'],
    fields: [
      { key: 'title', label: 'Task', type: 'text', required: true },
      owner,
      { key: 'status', label: 'Status', type: 'select', required: true, options: TASK_STATUS },
      { key: 'due', label: 'Due', type: 'date' },
      { key: 'notes', label: 'Notes', type: 'textarea' },
    ],
    seed: seedTasks.map(([title, o, due, notes], i) => ({ id: `seed-${i + 1}`, title, owner: o, status: 'To do', due, notes })),
  },
  partners: {
    key: 'partners',
    title: 'Partnerships',
    blurb: 'Partners, funders and prospects, who owns each relationship, and the next step.',
    noun: 'partner',
    titleKey: 'org',
    statusKey: 'stage',
    statusOrder: ['In talks', 'Reached out', 'Idea', 'Active', 'Paused'],
    doneValues: [],
    chipKeys: ['kind', 'owner', 'stage'],
    fields: [
      { key: 'org', label: 'Organization', type: 'text', required: true },
      { key: 'kind', label: 'Type', type: 'select', required: true, options: ['Partner', 'Funder', 'Donor', 'Supplier', 'Prospect'] },
      owner,
      { key: 'stage', label: 'Stage', type: 'select', required: true, options: PARTNER_STAGE },
      { key: 'next', label: 'Next step', type: 'textarea' },
    ],
    seed: PARTNER_ROWS.map((r, i) => ({ id: `seed-${i + 1}`, org: r.org, kind: r.kind, owner: r.owner, stage: r.stage, next: r.next })),
  },
  ideas: {
    key: 'ideas',
    title: 'Drive ideas',
    blurb: 'New drives and events: who is planning them and what they need.',
    noun: 'idea',
    titleKey: 'title',
    statusKey: 'status',
    statusOrder: IDEA_STATUS,
    doneValues: ['Done'],
    chipKeys: ['owner', 'status', 'when'],
    fields: [
      { key: 'title', label: 'Idea', type: 'text', required: true },
      owner,
      { key: 'status', label: 'Status', type: 'select', required: true, options: IDEA_STATUS },
      { key: 'when', label: 'When', type: 'text' },
      { key: 'why', label: 'Why', type: 'textarea' },
      { key: 'needs', label: 'Needs', type: 'textarea' },
    ],
    seed: IDEAS.map((r, i) => ({ id: `seed-${i + 1}`, title: r.title, owner: r.owner, status: r.status, when: r.when ?? '', why: r.why, needs: r.needs })),
  },
};

export const isCollectionKey = (k: string): k is Collection['key'] => k in COLLECTIONS;
