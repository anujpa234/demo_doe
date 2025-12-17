import { Sponsor, Stat, EventCard, Speaker, NewsItem, Testimonial } from './types';

// Placeholder images function to simulate local /images behavior or fallback
const getImg = (name: string, type: string = 'animals') => `https://picsum.photos/seed/${name}/400/400`;

export const SPONSORS: Sponsor[] = [
  { id: 1, name: 'Abu Dhabi Investment Office', logo: '/images/sponsor1.png' },
  { id: 2, name: 'ADQ', logo: '/images/sponsor2.png' },
  { id: 3, name: 'Department of Energy', logo: '/images/sponsor3.png' },
  { id: 4, name: 'Goldman Sachs', logo: '/images/sponsor4.png' },
  { id: 5, name: 'Presight', logo: '/images/sponsor5.png' },
  { id: 6, name: 'DEWA', logo: '/images/sponsor6.png' },
  { id: 7, name: 'Ministry of Energy', logo: '/images/sponsor7.png' },
];

export const STATS: Stat[] = [
  { id: 1, value: '25,000+', label: 'Exhibition Attendees' },
  { id: 2, value: '1,000+', label: 'Conference Delegates' },
  { id: 3, value: '120+', label: 'Conference Sessions' },
  { id: 4, value: '250+', label: 'Global Exhibitors' },
  { id: 5, value: '500+', label: 'Expert Speakers' },
];

export const EVENTS: EventCard[] = [
  {
    id: 1,
    date: '19-21 May 2026',
    title: 'World Utilities Congress.',
    description: 'In partnership with TAQA, centred on topics including Power Systems, Water Security, Cooling and Urban Demand.',
    category: 'Utilities',
    link: '#'
  },
  {
    id: 2,
    date: '19-20 May 2026',
    title: 'Water Innovation Summit.',
    description: 'A water innovation summit hosted by The Mohamed bin Zayed Water Initiative to bring together the global water community.',
    category: 'Water',
    link: '#'
  },
  {
    id: 3,
    date: '19 May 2026',
    title: 'Policies & Regulators’ Summit.',
    description: 'DoE-led summit and roundtables advancing regulations and policies for growth.',
    category: 'Regulation',
    link: '#'
  },
  {
    id: 4,
    date: '19-20 May 2026',
    title: 'Water Innovation Summit.',
    description: 'A water innovation summit hosted by The Mohamed bin Zayed Water Initiative to bring together the global water community.',
    category: 'Water',
    link: '#'
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: 'H.E. Eng. Awaidha Murshed Al Marar',
    role: 'Chairman',
    organization: 'Department of Energy',
    image: getImg('speaker1', 'people')
  },
  {
    id: 2,
    name: 'H.E. Ahmed Jasim Al Zaabi',
    role: 'Chairman',
    organization: 'Abu Dhabi Department of Economic Development',
    image: getImg('speaker2', 'people')
  },
  {
    id: 3,
    name: 'H.E. Dr. Sultan Ahmed Al Jaber',
    role: 'Minister of Industry and Advanced Technology',
    organization: 'UAE',
    image: getImg('speaker3', 'people')
  },
  {
    id: 4,
    name: 'H.E. Mariam bint Mohammed Almheiri',
    role: 'Head of International Affairs Office',
    organization: 'Presidential Court',
    image: getImg('speaker4', 'people')
  },
  {
    id: 5,
    name: 'H.E. Mrs. Maria Panayiotou',
    role: 'Minister of Agriculture, Rural Development & Environment',
    organization: 'Republic of Cyprus',
    image: getImg('speaker5', 'people')
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    date: '12th January 2025',
    title: 'Lorem ipsum dolor sitme teconsectetur adipiscinsee elitmas ecenas vulpue.',
    image: getImg('news1', 'tech'),
    link: '#'
  },
  {
    id: 2,
    date: '12th January 2025',
    title: 'Lorem ipsum dolor sitme teconsectetur adipiscinsee elitmas ecenas vulpue.',
    image: getImg('news2', 'tech'),
    link: '#'
  },
  {
    id: 3,
    date: '12th January 2025',
    title: 'Lorem ipsum dolor sitme teconsectetur adipiscinsee elitmas ecenas vulpue.',
    image: getImg('news3', 'tech'),
    link: '#'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Andreas Feil',
    role: 'First Secretary on Climate, Energy & Environment',
    quote: 'It was a true pleasure to participate in the World Utilities Congress 2025 and to represent Germany on the panel "Low Carbon and Green Hydrogen". As one of the hugest markets for green molecules, Germany is leading the charge.',
    logo: '/images/german_embassy.png'
  },
  {
    id: 2,
    name: 'Dr. Jan Haizmann',
    role: 'Secretary General/CEO',
    quote: 'The World Utilities Congress 2025 was a well organised and well attended conference. The quality of conference presentation was outstanding. World Utilities Congress continues to offer itself to the international energy community.',
    logo: '/images/zeta_logo.png'
  }
];
