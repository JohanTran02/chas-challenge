/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === 'production' ? '/chas-challenge' : '',
    trailingSlash: true,
    output: "export",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
