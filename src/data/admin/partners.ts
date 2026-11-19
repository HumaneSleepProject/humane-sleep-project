// Partnership pipeline. THIS FILE IS PUBLIC: organization names and status only.
// Never add a person's name, email or phone number here. Keep contacts in the shared inbox or Drive.
import type { Owner } from './team';

export type PartnerStage = 'Idea' | 'Reached out' | 'In talks' | 'Active' | 'Paused';

export interface PartnerRow {
  org: string;
  kind: 'Partner' | 'Funder' | 'Donor' | 'Supplier' | 'Prospect';
  stage: PartnerStage;
  owner: Owner;
  next: string;
}

export const PARTNER_ROWS: PartnerRow[] = [
  { org: "Shepherd's Gate", kind: 'Partner', stage: 'Active', owner: 'COO', next: 'Co-hosted Brushes and Bonds (Oct 2025). Plan the next event together.' },
  { org: 'Cornerstone Church', kind: 'Partner', stage: 'Active', owner: 'CEO', next: 'Friday drop-off. Confirm what they can take.' },
  { org: 'Livermore-Amador Symphony', kind: 'Donor', stage: 'Active', owner: 'CEO', next: 'Ask about another estate-sale collection.' },
  { org: 'Salesforce', kind: 'Partner', stage: 'Active', owner: 'CEO', next: 'Event on the calendar. Confirm the date.' },
  { org: 'Movement Lab', kind: 'Partner', stage: 'Active', owner: 'COO', next: 'Drive bin partner (2023 plan). Confirm the bin is still there.' },
  { org: 'Bollywood 92.3 FM', kind: 'Donor', stage: 'Active', owner: 'CEO', next: 'Holi booth 2025. Ask about this year.' },
  { org: 'Sewa Diwali', kind: 'Funder', stage: 'Active', owner: 'CEO', next: 'Winter supplies sponsor. Share the 2026 plan.' },
  { org: 'Kannada Kootu / KKNC', kind: 'Funder', stage: 'Active', owner: 'CEO', next: 'Winter supplies sponsor. Share the 2026 plan.' },
  { org: 'Rotary Club of Livermore', kind: 'Funder', stage: 'Active', owner: 'CEO', next: 'Funded the 2024 outreach. Report results before the 2027 round.' },
  { org: 'Way Up Art & Frame', kind: 'Supplier', stage: 'Active', owner: 'COO', next: 'Donated art supplies and framing. Thank them with photos.' },
  { org: 'Fremont Bank', kind: 'Prospect', stage: 'Idea', owner: 'CEO', next: 'Find the community giving contact.' },
  { org: 'Good360', kind: 'Prospect', stage: 'Idea', owner: 'CFO', next: 'Free membership. Check the catalog for sleeping bags.' },
  { org: 'Open Heart Kitchen', kind: 'Prospect', stage: 'Idea', owner: 'COO', next: 'Meal partner. Ask about a joint distribution day.' },
  { org: 'Operation Dignity', kind: 'Prospect', stage: 'Idea', owner: 'COO', next: 'Ask how they would use sleeping bags.' },
];
