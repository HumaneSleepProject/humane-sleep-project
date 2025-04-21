'use client';

import { useEffect } from 'react';

export default function Stars() {
  useEffect(() => {
    const container = document.getElementById('stars-container');
    if (!container) return;
    
    // Clear any existing stars
    container.innerHTML = '';
    
    // Create different types of stars
    const createStars = (count: number, sizeRange: [number, number], brightness: number) => {
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const [minSize, maxSize] = sizeRange;
        const size = Math.random() * (maxSize - minSize) + minSize;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 4;
        const duration = 2 + Math.random() * 3; // Random duration between 2-5 seconds
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
        star.style.opacity = `${brightness}`;
        
        fragment.appendChild(star);
      }
      
      container.appendChild(fragment);
    };
    
    // Create different types of stars
    createStars(300, [0.5, 1], 0.8); // Small bright stars
    createStars(200, [1, 2], 0.6);   // Medium stars
    createStars(100, [2, 3], 0.4);   // Large dim stars
    createStars(50, [3, 4], 0.3);    // Very large dim stars
  }, []);

  return <div className="stars" id="stars-container"></div>;
} 