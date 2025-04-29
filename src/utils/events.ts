import fs from 'fs';
import path from 'path';
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

export async function getEvents(): Promise<Event[]> {
  const eventsDirectory = path.join(process.cwd(), 'content/events');
  const filenames = fs.readdirSync(eventsDirectory);

  const events = filenames.map((filename) => {
    const filePath = path.join(eventsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      description: content,
      location: data.location,
      imageUrl: data.image,
      registrationUrl: data.registrationUrl,
      isActive: data.isActive ?? true,
    };
  });

  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
} 