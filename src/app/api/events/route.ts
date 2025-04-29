import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  try {
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

    return NextResponse.json(
      events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    );
  } catch (error) {
    console.error('Error reading events:', error);
    return NextResponse.json({ error: 'Failed to load events' }, { status: 500 });
  }
} 