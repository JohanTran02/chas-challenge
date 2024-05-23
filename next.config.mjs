/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/chas-challenge' : '',
    output: "export",
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    },
    optimizeFonts: false
};

export default nextConfig;
