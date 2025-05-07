import path from 'path';
import { promises as fsPromises } from 'fs';

export interface GalleryImage {
  img: string;
  title: string;
  width: number;
  height: number;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  
  try {
    const files = await fsPromises.readdir(galleryDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    return imageFiles.map(file => ({
      img: `/images/gallery/${file}`,
      title: file.replace(/\.[^/.]+$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      width: 800,  // Default width
      height: 600  // Default height
    }));
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
} 