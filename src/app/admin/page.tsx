'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface NetlifyUser {
  id: string;
  email: string;
  user_metadata: {
    full_name?: string;
  };
}

declare global {
  interface Window {
    netlifyIdentity: {
      on: (event: string, callback: (user: NetlifyUser | null) => void) => void;
    };
  }
}

export default function AdminPage() {
  useEffect(() => {
    // Initialize Netlify CMS
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user: NetlifyUser | null) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);

  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <div id="nc-root" />
    </>
  );
} 