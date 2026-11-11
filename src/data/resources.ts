// Public services for people experiencing homelessness in the Tri-Valley.
// Source: Tri-Valley Human Services Pocket Guide, Human Services Commissions of
// Dublin, Livermore and Pleasanton, revised February 8, 2024.
// Hours and services change. Re-check each entry by phone and update `lastVerified`.
//
// This file is public (the repo is public). Only list services here.
// Never add where people sleep or stay.

export type ResourceCategory =
  | 'Shelter & housing help'
  | 'Food'
  | 'Showers & laundry'
  | 'Health'
  | 'Mental health & recovery'
  | 'Safety & crisis'
  | 'Benefits & ID'
  | 'Warm indoor places'
  | 'Transportation';

export type City = 'Livermore' | 'Pleasanton' | 'Dublin' | 'Countywide';

export interface Resource {
  id: string;
  name: string;
  category: ResourceCategory;
  city: City;
  address?: string;
  phone?: string;
  hours?: string;
  website?: string;
  notes?: string;
  lastVerified: string; // ISO date the info was last confirmed
}

export const RESOURCE_SOURCE = {
  name: 'Tri-Valley Human Services Pocket Guide',
  revised: '2024-02-08',
};

const GUIDE = RESOURCE_SOURCE.revised;

export const HELP_NOW = [
  { label: 'Housing, food & services (24/7, many languages)', phone: '211', display: '2-1-1' },
  { label: 'Mental health crisis (24/7)', phone: '988', display: '988' },
  { label: 'Domestic violence crisis line, Tri-Valley Haven', phone: '8008848119', display: '(800) 884-8119' },
  { label: 'Emergency', phone: '911', display: '911' },
];

export const RESOURCES: Resource[] = [
  // Shelter & housing help
  {
    id: 'coordinated-entry',
    name: 'Alameda County Coordinated Entry (via 2-1-1)',
    category: 'Shelter & housing help',
    city: 'Countywide',
    phone: '211',
    notes: 'Front door to shelter and housing programs for people who are homeless or about to be. Dial 2-1-1 anytime.',
    lastVerified: GUIDE,
  },
  {
    id: 'cityserve',
    name: 'CityServe of the Tri-Valley',
    category: 'Shelter & housing help',
    city: 'Livermore',
    address: '3311 Pacific Ave, Livermore, CA',
    phone: '9252222273',
    website: 'https://cityservecares.org',
    notes: 'Multi-Service Center.',
    lastVerified: GUIDE,
  },
  {
    id: 'abode',
    name: 'Abode Services',
    category: 'Shelter & housing help',
    city: 'Livermore',
    address: '3311 Pacific Ave, Livermore, CA',
    phone: '5102905948',
    website: 'https://abodeservices.org',
    notes: 'Multi-Service Center.',
    lastVerified: GUIDE,
  },
  {
    id: 'shepherds-gate',
    name: "Shepherd's Gate",
    category: 'Shelter & housing help',
    city: 'Livermore',
    address: '1660 Portola Ave, Livermore, CA',
    phone: '8882164776',
    website: 'https://shepherdsgate.org',
    notes: 'Shelter for women and children.',
    lastVerified: GUIDE,
  },
  {
    id: 'tvh-homeless',
    name: 'Tri-Valley Haven, Homeless Services',
    category: 'Shelter & housing help',
    city: 'Livermore',
    address: '3663 Pacific Ave, Livermore, CA',
    phone: '9254492510',
    website: 'https://trivalleyhaven.org',
    lastVerified: GUIDE,
  },
  {
    id: 'livermore-housing',
    name: 'City of Livermore Housing & Human Services',
    category: 'Shelter & housing help',
    city: 'Livermore',
    address: '1052 S. Livermore Ave, Livermore, CA',
    phone: '9259604580',
    website: 'https://www.livermoreca.gov/housing',
    lastVerified: GUIDE,
  },
  {
    id: 'pleasanton-housing',
    name: 'City of Pleasanton Housing Information',
    category: 'Shelter & housing help',
    city: 'Pleasanton',
    address: '200 Old Bernal Ave, Pleasanton, CA',
    phone: '9259315007',
    lastVerified: GUIDE,
  },

  // Showers & laundry
  {
    id: 'vineyard',
    name: 'Vineyard Resource Center (Open Heart Kitchen)',
    category: 'Showers & laundry',
    city: 'Livermore',
    address: '450 North Ave, Livermore, CA',
    phone: '9255801616',
    hours: 'Mon-Fri, 9am-5pm',
    website: 'https://openheartkitchen.org',
    notes: 'Showers, laundry and a place to rest. Hot meals Mon-Fri, noon-5pm.',
    lastVerified: GUIDE,
  },

  // Food
  {
    id: 'ohk-meals',
    name: 'Open Heart Kitchen Community Hot Meals',
    category: 'Food',
    city: 'Livermore',
    address: '450 North Ave, Livermore, CA',
    phone: '9255801616',
    hours: 'Mon-Fri, noon-5pm (dine in or take out)',
    website: 'https://openheartkitchen.org',
    lastVerified: GUIDE,
  },
  {
    id: 'tvh-pantry',
    name: 'Tri-Valley Haven Food Pantry',
    category: 'Food',
    city: 'Livermore',
    address: '150 North L St, Livermore, CA',
    phone: '9254491664',
    website: 'https://trivalleyhaven.org',
    lastVerified: GUIDE,
  },
  {
    id: 'church-of-christ',
    name: 'Tri-Valley Church of Christ Community Care',
    category: 'Food',
    city: 'Livermore',
    address: '4481 East Ave, Livermore, CA',
    phone: '9254474333',
    lastVerified: GUIDE,
  },
  {
    id: 'svdp',
    name: 'Society of St. Vincent de Paul (thrift store and vouchers)',
    category: 'Food',
    city: 'Livermore',
    address: '1817 Second St, Livermore, CA',
    phone: '9254551104',
    notes: 'Clothing and vouchers.',
    lastVerified: GUIDE,
  },
  {
    id: 'valley-bible',
    name: 'Valley Bible Church',
    category: 'Food',
    city: 'Pleasanton',
    address: '7106 Johnson Dr, Pleasanton, CA',
    phone: '9252271301',
    lastVerified: GUIDE,
  },
  {
    id: 'childrens-emergency-council',
    name: "Children's Emergency Council",
    category: 'Food',
    city: 'Dublin',
    address: '7421 Amarillo Rd, Dublin, CA',
    phone: '9258285363',
    lastVerified: GUIDE,
  },

  // Health
  {
    id: 'axis-livermore',
    name: 'Axis Community Health, Livermore Clinic',
    category: 'Health',
    city: 'Livermore',
    address: '3311 Pacific Ave, Livermore, CA',
    phone: '9254621755',
    website: 'https://axishealth.org',
    lastVerified: GUIDE,
  },
  {
    id: 'axis-pleasanton',
    name: 'Axis Community Health, Pleasanton Clinic',
    category: 'Health',
    city: 'Pleasanton',
    address: '5925 W. Las Positas Blvd, Pleasanton, CA',
    phone: '9254621755',
    website: 'https://axishealth.org',
    lastVerified: GUIDE,
  },
  {
    id: 'va-livermore',
    name: 'VA Medical Center, Livermore',
    category: 'Health',
    city: 'Livermore',
    address: '4951 Arroyo Rd, Livermore, CA',
    phone: '9253734700',
    notes: 'For veterans. VA crisis line: (800) 698-2411, 24/7.',
    lastVerified: GUIDE,
  },

  // Mental health & recovery
  {
    id: 'bacs',
    name: 'Bay Area Community Services, Valley Wellness',
    category: 'Mental health & recovery',
    city: 'Pleasanton',
    address: '3900 Valley Ave, Suite B, Pleasanton, CA',
    phone: '9254848457',
    website: 'https://bayareacs.org',
    lastVerified: GUIDE,
  },
  {
    id: 'acbh',
    name: 'Alameda County Behavioral Health Care Services',
    category: 'Mental health & recovery',
    city: 'Countywide',
    phone: '8004919099',
    lastVerified: GUIDE,
  },
  {
    id: 'aa-trivalley',
    name: 'Alcoholics Anonymous, Tri-Valley 24/7 hotline',
    category: 'Mental health & recovery',
    city: 'Dublin',
    phone: '9258290666',
    website: 'https://trivalleyaa.org',
    lastVerified: GUIDE,
  },

  // Safety & crisis
  {
    id: 'tvh-dv',
    name: 'Tri-Valley Haven, Domestic Violence Services',
    category: 'Safety & crisis',
    city: 'Livermore',
    phone: '8008848119',
    website: 'https://trivalleyhaven.org',
    notes: '24-hour crisis line.',
    lastVerified: GUIDE,
  },
  {
    id: 'crisis-support',
    name: 'Crisis Support Services of Alameda County',
    category: 'Safety & crisis',
    city: 'Countywide',
    phone: '8003092131',
    website: 'https://crisissupport.org',
    lastVerified: GUIDE,
  },

  // Benefits & ID
  {
    id: 'ac-social-services',
    name: 'Alameda County Self-Sufficiency Center (CalFresh, Medi-Cal)',
    category: 'Benefits & ID',
    city: 'Livermore',
    address: '2499 Constitution Dr, Livermore, CA',
    phone: '9254550747',
    hours: 'Mon-Fri, 8:30am-5pm',
    lastVerified: GUIDE,
  },
  {
    id: 'bay-legal',
    name: 'Bay Area Legal Aid, Legal Advice Line',
    category: 'Benefits & ID',
    city: 'Countywide',
    phone: '8005515554',
    website: 'https://baylegal.org',
    lastVerified: GUIDE,
  },

  // Warm indoor places (public buildings; call first)
  {
    id: 'pleasanton-library',
    name: 'Pleasanton Public Library',
    category: 'Warm indoor places',
    city: 'Pleasanton',
    address: '400 Old Bernal Ave, Pleasanton, CA',
    phone: '9259313400',
    notes: 'Public building. Also hosts the Veterans Resource Center (ext. 4).',
    lastVerified: GUIDE,
  },
  {
    id: 'dublin-library',
    name: 'Dublin Library',
    category: 'Warm indoor places',
    city: 'Dublin',
    address: '200 Civic Plaza, Dublin, CA',
    phone: '9258037252',
    lastVerified: GUIDE,
  },
  {
    id: 'livermore-civic-library',
    name: 'Livermore Civic Center Library',
    category: 'Warm indoor places',
    city: 'Livermore',
    address: '1188 S. Livermore Ave, Livermore, CA',
    phone: '9253735500',
    lastVerified: GUIDE,
  },
  {
    id: 'pleasanton-senior',
    name: 'Pleasanton Senior Center',
    category: 'Warm indoor places',
    city: 'Pleasanton',
    address: '5353 Sunol Blvd, Pleasanton, CA',
    phone: '9259315365',
    notes: 'Senior meals by reservation one business day ahead: (925) 500-8241.',
    lastVerified: GUIDE,
  },
  {
    id: 'dublin-senior',
    name: 'Dublin Senior Center',
    category: 'Warm indoor places',
    city: 'Dublin',
    address: '7600 Amador Valley Blvd, Dublin, CA',
    phone: '9255564511',
    lastVerified: GUIDE,
  },

  // Transportation
  {
    id: 'wheels-dar',
    name: 'Wheels Dial-A-Ride (LAVTA)',
    category: 'Transportation',
    city: 'Livermore',
    phone: '9254557510',
    website: 'https://wheelsbus.com/dial-a-ride',
    lastVerified: GUIDE,
  },
  {
    id: 'pleasanton-rides',
    name: 'Pleasanton Rides',
    category: 'Transportation',
    city: 'Pleasanton',
    phone: '9253981045',
    lastVerified: GUIDE,
  },
];
