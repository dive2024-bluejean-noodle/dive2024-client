import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'dive2024-client',
        short_name: 'd2024',
        description: 'A Progressive Web App built with Next.js',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            // {
            //     src: '/icon-512x512.png',
            //     sizes: '512x512',
            //     type: 'image/png',
            // },
        ],
    }
}