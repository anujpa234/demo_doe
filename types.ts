export interface Sponsor {
  id: number;
  name: string;
  logo: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface EventCard {
  id: number;
  date: string;
  title: string;
  description: string;
  category: 'Utilities' | 'Water' | 'Regulation';
  link: string;
}

export interface Speaker {
  id: number;
  name: string;
  role: string;
  organization: string;
  image: string;
}

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  logo: string;
}