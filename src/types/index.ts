export interface Leader {
  id: number;
  name: string;
  role: string;
  designation?: string;
  image?: string;
  quote?: string;
  description?: string;
}

export interface Course {
  id: number;
  name: string;
  partner: string;
  duration: string;
  fee: string;
  isNew?: boolean;
  image?: string;
  badge?: string;
  school?: string;
}

export interface School {
  id: number;
  name: string;
  courses: number;
  icon?: string;
  isComingSoon?: boolean;
  description?: string;
}

export interface Partner {
  id: number;
  name: string;
  logo?: string;
}

export interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
  image?: string;
  isNew?: boolean;
  link?: string;
}

export interface Notice {
  id: number;
  title: string;
  date?: string;
  type: "admission" | "general" | "urgent";
  link?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  initials?: string;
  course: string;
  placement?: string;
  quote: string;
  image?: string;
}

export interface Stat {
  id: number;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon?: string;
}