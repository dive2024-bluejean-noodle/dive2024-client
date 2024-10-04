import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BuMeet',
    short_name: 'BuMeet',
    description: '낯선 땅 부산에 온 것을 환영하네.',
    start_url: '/',
    display: 'standalone',
    background_color: '#7ebefe',
    theme_color: '#7ebefe',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
