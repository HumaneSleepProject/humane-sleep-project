'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

interface ImageItem {
  img: string;
  title: string;
}

interface ImageMasonryProps {
  images: ImageItem[];
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
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: 4,
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Masonry>
    </Box>
  );
} 