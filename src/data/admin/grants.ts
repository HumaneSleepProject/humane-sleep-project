// Admin dashboard data. THIS FILE IS PUBLIC (the repo is public), so keep it to
// facts that are already public or harmless: program names, public deadlines, status.
// Never add cash balances, bank or login details, permit numbers, or people's contact info.
// Source: HSP Grants and Compliance tracker, verified Nov 10, 2026.
// Dates marked estimate=true are inferred from past cycles; confirm on the funder's site.

export type GrantStatus =
  | 'Prospect'
  | 'Researching'
  | 'Drafting'
  | 'Submitted'
  | 'Reporting'
  | 'Won'
  | 'Lost'
  | 'Missed'
  | 'Stalled'
  | 'Not a fit';

export interface Grant {
  funder: string;
  program: string;
  status: GrantStatus;
  fit: 'High' | 'Medium' | 'Low';
  maxAward?: number;
  deadline?: string; // YYYY-MM-DD
  estimate?: boolean;
  next: string;
}

export const GRANTS: Grant[] = [
  { funder: 'Walmart (Spark Good)', program: 'Local Grants, final 2026 cycle', status: 'Prospect', fit: 'High', maxAward: 5000, deadline: '2026-11-30', next: 'Create a Spark Good account on Walmart.org and submit. Missed in 2024.' },
  { funder: 'Tri-Valley cities', program: 'Housing & Human Services Grant FY27-29', status: 'Prospect', fit: 'High', deadline: '2026-12-02', next: 'Mandatory workshop. Application opens Nov 23 in ZoomGrants. One application covers Livermore, Pleasanton and Dublin.' },
  { funder: 'City of Livermore, Arts Commission', program: 'Mini Grant 2025 (Brushes and Bonds)', status: 'Reporting', fit: 'Medium', maxAward: 1000, deadline: '2026-11-12', next: 'Reporting is open. Reply to the city, send photos and receipts, confirm reimbursement.' },
  { funder: 'Rotarian Foundation of Livermore', program: 'Community Grant 2027', status: 'Prospect', fit: 'High', maxAward: 10000, deadline: '2027-02-01', estimate: true, next: 'Won in 2024. Lead with 2024 results. Watch for the Dec/Jan announcement.' },
  { funder: 'City of Pleasanton', program: 'Community Grant: Civic Arts', status: 'Prospect', fit: 'Medium', maxAward: 7500, deadline: '2027-02-04', estimate: true, next: 'Reuse the paint night model. Needs a Pleasanton resident on the board.' },
  { funder: 'City of Livermore, Arts Commission', program: 'Project & Program Grant', status: 'Prospect', fit: 'Medium', maxAward: 10000, deadline: '2027-03-01', next: 'Due Mar 1 and Sep 1 each year. Close out the Mini Grant first.' },
  { funder: 'Rotary Club of San Francisco', program: 'SF Rotary Foundation grant', status: 'Drafting', fit: 'Medium', maxAward: 20000, deadline: '2027-04-01', estimate: true, next: 'Must be submitted by a member in good standing.' },
  { funder: 'Good360', program: 'Donated goods membership', status: 'Prospect', fit: 'High', next: 'Free membership. Check the catalog for sleeping bags and hygiene items before buying.' },
  { funder: 'Rotary Club of Pleasanton Foundation', program: 'Community grants', status: 'Researching', fit: 'Medium', next: 'Find the application window.' },
  { funder: 'Tri-Valley Nonprofit Alliance', program: 'Tri-Valley Nonprofit Fund', status: 'Prospect', fit: 'Medium', maxAward: 5000, next: 'Rounds are rolling or quarterly. Check tvnpa.org.' },
  { funder: 'Chef Giving Community', program: 'Fundraising Matching Program', status: 'Prospect', fit: 'Medium', next: 'Not verified. Confirm eligibility.' },
  { funder: 'Fremont Bank', program: 'Corporate giving', status: 'Prospect', fit: 'Medium', next: 'Not verified. Find the contact.' },
  { funder: 'Rotarian Foundation of Livermore', program: '2024 Community Grant', status: 'Won', fit: 'High', next: 'Confirm the award amount in the books.' },
  { funder: 'Tri-Valley cities (Dublin host)', program: 'HHSG FY 2025-27', status: 'Submitted', fit: 'High', next: 'Confirm the outcome of the Jan 2025 application.' },
  { funder: 'Rotary Club of Oakland #3', program: 'Community Service Grant FY23', status: 'Stalled', fit: 'Low', maxAward: 5000, next: 'Open since 2024. Decide whether to close it.' },
  { funder: 'Alameda Community Fund', program: 'Capital grant FY23-24', status: 'Stalled', fit: 'Low', maxAward: 3000, next: 'Ask was above the cap and the program serves Alameda residents only.' },
  { funder: 'Tri-Valley Nonprofit Alliance', program: 'Nonprofit Fund FY23', status: 'Lost', fit: 'Medium', maxAward: 5000, deadline: '2024-02-29', next: 'Reapply in the next round.' },
  { funder: 'Walmart (Spark Good)', program: 'Local Grants 2024', status: 'Missed', fit: 'High', maxAward: 5000, deadline: '2024-03-01', next: 'See the Nov 2026 row.' },
  { funder: 'Rotary Club of Berkeley', program: '2024-2025', status: 'Researching', fit: 'Low', next: 'Confirm whether anything was ever submitted.' },
];

export interface Filing {
  filing: string;
  agency: string;
  due: string;
  status: 'VERIFY' | 'CHECK DATE' | 'Upcoming';
  note: string;
}

export const FILINGS: Filing[] = [
  { filing: 'Confirm 990-N history (2023, 2024, 2025)', agency: 'IRS', due: '2026-11-12', status: 'VERIFY', note: 'Three missed years in a row means automatic loss of tax-exempt status. Look up each year at irs.gov.' },
  { filing: 'Confirm CA Attorney General registration (CT-1)', agency: 'CA Attorney General', due: '2026-11-12', status: 'VERIFY', note: 'Public benefit corporations must register and renew.' },
  { filing: 'Confirm CA state tax exemption (FTB 3500/3500A)', agency: 'CA FTB', due: '2026-11-12', status: 'VERIFY', note: 'No state exemption letter found. Without it the FTB may treat HSP as taxable.' },
  { filing: 'Sales and use tax return (if annual filer)', agency: 'CDTFA', due: '2027-01-31', status: 'VERIFY', note: 'Seller\'s permit has been active since Sept 2024. Confirm the filing frequency.' },
  { filing: 'Statement of Information (SI-100)', agency: 'CA Secretary of State', due: '2027-02-01', status: 'CHECK DATE', note: 'Biennial. Last filed Apr 2025. Look up the exact due month.' },
  { filing: 'IRS 990-N (tax year 2026)', agency: 'IRS', due: '2027-05-17', status: 'Upcoming', note: 'Due the 15th day of the 5th month after year end. May 15 is a Saturday, so it moves to Monday.' },
  { filing: 'FTB 199N (tax year 2026)', agency: 'CA FTB', due: '2027-05-17', status: 'Upcoming', note: 'California e-Postcard for small organizations.' },
  { filing: 'RRF-1 and CT-TR-1 (tax year 2026)', agency: 'CA Attorney General', due: '2027-05-17', status: 'Upcoming', note: 'Annual renewal plus the Treasurer\'s Report.' },
];
