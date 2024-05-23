/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/chas-challenge' : '',
    trailingSlash: true,
    // output: "export",
    images: {
        unoptimized: true,
    },
    optimizeFonts: false
};

export default nextConfig;
