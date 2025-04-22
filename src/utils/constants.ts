// Navigation items used across the site
export const NAVIGATION_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Partners', path: '/partners' },
  { label: 'Events', path: '/events' },
  { label: 'Information', path: '/information' },
  { label: 'Contact', path: '/contact' },
] as const;

// Gallery images for the home page
export const GALLERY_IMAGES = [
  {
    img: "/images/gallery/sleep6.jpg",
    title: "Healthy Sleep Habits",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep2.jpg",
    title: "Sleep Research",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep3.jpg",
    title: "Community Support",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep4.jpg",
    title: "Education Programs",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep5.jpg",
    title: "Wellness Workshops",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep1.jpg",
    title: "Sleep Awareness",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep7.jpg",
    title: "Sleep Awareness",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep8.jpg",
    title: "Sleep Awareness",
    width: 800,
    height: 600
  },
  {
    img: "/images/gallery/sleep9.jpg",
    title: "Sleep Awareness",
    width: 800,
    height: 600
  }
];

// Site-wide configuration
export const SITE_CONFIG = {
  name: "Humane Sleep Project",
  tagline: "Providing Compassion, One Sleep at a Time",
  logo: "/images/logo.png",
  donateUrl: "https://www.paypal.com/donate/?hosted_button_id=24CGE6XCKU4H4"
} as const;

// Partners and donors
export const PARTNERS = [
  { name: 'Salesforce', logo: '/images/partners/salesforce.png' },
  { name: 'Movement Lab Chiropractic', logo: '/images/partners/movement_lab.png' },
  { name: 'Livermore Symphony', logo: '/images/partners/livermore_symphony.jpg' },
  { name: 'Cornerstone Church', logo: '/images/partners/cornerstone_church.png' },
  { name: 'Shepherd\'s Gate', logo: '/images/partners/shepherds_gate.jpg' },
];


export const DONORS = [
  { name: 'Rotary Club of Livermore', logo: '/images/donors/livermore_rotary.jpg' },
  { name: 'Kannada Koota of Northern California', logo: '/images/donors/kannada_koota_of_northern_california.jpg' },
  { name: 'Bollywood 92.3', logo: '/images/donors/bollywood_923.jpg' },
  { name: 'Organizing with Love LLC', logo: '/images/donors/organizing_with_love_llc.png' },
  { name: 'Del Valle Continuation School', logo: '/images/donors/del_valle_continuation_school.png' },
  { name: 'Sewa Diwali', logo: '/images/donors/sewa_diwali.jpg' },
  { name: 'Tri Valley Kannada Sangha', logo: '/images/donors/tri_valley_kannada_sangha.jpg' },
  { name: 'Tri Valley 30 TV', logo: '/images/donors/tri_valley_30_tv.jpg' },
  { name: 'Livermore Police Department', logo: '/images/donors/livermore_police.jpg' },
  { name: 'Goodness Village', logo: '/images/donors/goodness_village.jpg' },
];

// Team members
export const TEAM_MEMBERS = [
  {
    name: "Sidharth Sreedar",
    role: "CEO",
    image: "/images/team/sid_pic.jpg",
    bio: "Sidharth Sreedar is the CEO of the Humane Sleep Project, an organization he helped found with a vision of improving sleeping conditions for individuals in underprivileged communities. Through this endeavor, he aims to inspire positive change within the community—something he is deeply committed to in his personal life as well."
  },
  {
    name: "Abhi Vishwas",
    role: "CFO",
    image: "/images/team/abhi_pic.jpg",
    bio: "Abhi Vishwas serves as CFO of the Humane Sleep Project, where he manages budgeting, grants, and financial strategy to maximize impact for the unhoused community. With a background in technical sales and management, he brings a data-driven, scalable approach to nonprofit operations. His passion for social equity and deep respect for the unhoused population fuel his commitment to sustainable, community-first solutions."
  },
  {
    name: "Aditi Sharma",
    role: "COO",
    image: "/images/team/aditi_pic.jpg",
    bio: "Aditi Sharma is the COO and Secretary of the Humane Sleep Project. A graduate of UC Davis and an aspiring physician, she co-founded the organization with the belief that everyone—regardless of their financial situation—deserves access to essential sleeping supplies. Through her work with HSP, she is dedicated to offering kindness and vital resources to support the well-being of individuals experiencing homelessness."
  },
  {
    name: "Siddharth Iyer",
    role: "Intern",
    image: "/images/team/sid_iyer_pic.jpg",
    bio: "Siddarth joined the Humane Sleep Project because he wants people without homes to feel cared for and noticed. He hopes to make a real difference by giving his time, sharing his ideas, and supporting others as they get back on their feet."
  },
  {
    name: "Anushka Sharma",
    role: "Intern",
    image: "/images/team/anushka_pic.jpg",
    bio: "Anushka is a highly motivated individual that wants to see access to provisions for everyone. Through her work as an intern, she has found an interest in helping others."
  }
];

// Resource map URL
export const RESOURCE_MAP_URL = "https://www.google.com/maps/d/embed?mid=13vmK1r7q7i_r85lGnPHhLw5DK7YPDzc&ehbc=2E312F";

// Contact form configuration
export const CONTACT_CONFIG = {
  formEndpoint: 'https://formspree.io/f/mldjknno',
  messages: {
    success: 'Thank you for your message! We\'ll get back to you soon.',
    error: 'There was a problem sending your message. Please try again.'
  },
  fields: {
    name: {
      label: 'Full Name',
      autoComplete: 'name'
    },
    email: {
      label: 'Email Address',
      type: 'email',
      autoComplete: 'email'
    },
    subject: {
      label: 'Subject'
    },
    message: {
      label: 'Message',
      multiline: true,
      rows: 6
    }
  }
} as const; 