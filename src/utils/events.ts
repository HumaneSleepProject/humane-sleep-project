import matter from 'gray-matter';

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  imageUrl: string;
  registrationUrl?: string;
  isActive: boolean;
}

// This function will be called at build time
export async function getEvents(): Promise<Event[]> {
  // In development, we'll use sample data
  if (process.env.NODE_ENV === 'development') {
    return [
      {
        id: '1',
        title: 'Sleep Science Workshop',
        date: '2024-04-15T10:00:00',
        description: 'Join us for an in-depth workshop on the latest sleep science research and practical techniques for better sleep.',
        location: 'Virtual Event',
        imageUrl: '/images/events/sleep-workshop.jpg',
        registrationUrl: 'https://example.com/register/sleep-workshop',
        isActive: true
      },
      {
        id: '2',
        title: 'Meditation & Sleep Retreat',
        date: '2024-05-20T09:00:00',
        description: 'A weekend retreat focusing on meditation techniques that promote better sleep and overall well-being.',
        location: 'Mountain View Resort',
        imageUrl: '/images/events/meditation-retreat.jpg',
        registrationUrl: 'https://example.com/register/meditation-retreat',
        isActive: true
      }
    ];
  }

  // In production, we'll use the static data
  const events: Event[] = [];
  try {
    const response = await fetch('/api/events');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return events;
  }
} 