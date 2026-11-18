import type { MetadataRoute } from 'next';

const BASE = 'https://humane-sleep-project.vercel.app';
const PATHS = ['', '/about', '/partners', '/events', '/information', '/get-involved', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: `${BASE}${p}` }));
}
