'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Image from 'next/image';
import { GalleryImage } from '@/utils/gallery';

interface ImageMasonryProps {
  images: GalleryImage[];
}

export default function ImageMasonry({ images }: ImageMasonryProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Masonry 
        columns={{ xs: 1, sm: 2, md: 3 }} 
        spacing={2}
        defaultColumns={4}
        defaultSpacing={1}
      >
        {images.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: 'fit-content',
            }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={item.width}
              height={item.height}
              loading={index < 3 ? "eager" : "lazy"}
              priority={index < 3}
              quality={75}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                `<svg width="${item.width}" height="${item.height}" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#1a1a1a"/>
                </svg>`
              ).toString('base64')}`}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.opacity = '1';
              }}
            />
          </Box>
        ))}
      </Masonry>
    </Box>
  );
} 