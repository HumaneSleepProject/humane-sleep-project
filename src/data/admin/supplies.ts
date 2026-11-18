// What HSP can actually hand out, and what a cold-weather bag costs.
// THIS FILE IS PUBLIC (the repo is public). Prices and ratings only. No stock counts that
// are guesses, no contact details, no supplier logins, and never where people sleep.
//
// Update `checked` whenever you re-check a price on the vendor's site.

export type SupplyStatus = 'We supply' | 'Not stocked';

export interface SupplyItem {
  item: string;
  status: SupplyStatus;
  note: string;
}

// Matches the checkboxes on the public "request supplies" form.
export const SUPPLY_ITEMS: SupplyItem[] = [
  { item: 'Sleeping bags', status: 'We supply', note: 'Cold-weather only (rated 30°F or lower). Thin summer bags are not winter-ready.' },
  { item: 'Blankets', status: 'We supply', note: 'Fleece blankets, sold in cases of 168 by the wholesalers we have priced.' },
  { item: 'Hygiene kits', status: 'We supply', note: 'Self-care kits.' },
  { item: 'Warm clothing / socks', status: 'We supply', note: 'Socks, beanies and donated warm layers.' },
  { item: 'Tents or tarps', status: 'Not stocked', note: 'We do not have these right now, so the public request form no longer offers them.' },
];

export interface BagOption {
  vendor: string;
  product: string;
  rating: string;
  winterReady: boolean;
  perBag: number; // dollars, at one 10-bag case
  caseSize: number;
  checked: string; // ISO date the price was last confirmed
  note: string;
}

export const BAG_OPTIONS: BagOption[] = [
  {
    vendor: 'BagsInBulk',
    product: 'Waterproof Extra Cold Weather',
    rating: '15°F to 30°F',
    winterReady: true,
    perBag: 17,
    caseSize: 10,
    checked: '2026-11-17',
    note: '$170 per case of 10, 400GSM fill, 82" x 29". Listed as dropping toward $15 each at very large orders. Ask about nonprofit pricing.',
  },
  {
    vendor: 'BagsInBulk',
    product: 'Waterproof Cold Weather',
    rating: 'about 30°F',
    winterReady: false,
    perBag: 13,
    caseSize: 10,
    checked: '2026-11-17',
    note: 'Cheaper, but only rated to about 30°F and the price is a "from" price. Fine for mild nights, not a hard freeze.',
  },
  {
    vendor: 'BagsInBulk',
    product: 'Basic sleeping bag',
    rating: '60°F to 77°F',
    winterReady: false,
    perBag: 9.75,
    caseSize: 10,
    checked: '2026-11-17',
    note: 'Do not buy for winter. This is a summer bag.',
  },
  {
    vendor: 'Socks\'NBulk',
    product: 'Yacht and Smith polyester sleeping bag',
    rating: 'not listed',
    winterReady: false,
    perBag: 18,
    caseSize: 10,
    checked: '2026-11-17',
    note: 'The listing gives no temperature rating, so we cannot call it winter-ready until they answer.',
  },
];

export const ORDER_DEFAULTS = {
  people: 100, // a typical Friday meal line is 80 to 100
  caseSize: 10,
  perBag: 17,
};
