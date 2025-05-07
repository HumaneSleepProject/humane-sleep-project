export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  description: string;
  location: string;
  imageUrl: string;
  registrationUrl?: string | null;
  isActive?: boolean;
}

export interface EventsData {
  upcoming: Event[];
  past: Event[];
}

// This function will be called at build time
export async function getEvents(): Promise<Event[]> {
  try {
    const response = await fetch('/api/events');
    const data: EventsData = await response.json();
    return data.upcoming;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

import eventsData from '../data/events.json';

export function getStaticEvents(): Event[] {
  return eventsData.upcoming;
} 