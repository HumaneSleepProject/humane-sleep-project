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

export const sampleEvents: Event[] = [
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
  },
  {
    id: '3',
    title: 'Sleep Technology Expo',
    date: '2024-06-10T11:00:00',
    description: 'Explore the latest sleep tracking devices and technology solutions for better sleep quality.',
    location: 'Tech Innovation Center',
    imageUrl: '/images/events/tech-expo.jpg',
    registrationUrl: 'https://example.com/register/tech-expo',
    isActive: true
  }
]; 