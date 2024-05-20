/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    // basePath: process.env.NODE_ENV === 'production' ? '/chas-challenge' : '/',
    trailingSlash: true,
    output: "export",
    images: {
        loader: "akamai",
        path: "",
    },
    // assetPrefix: "/chas-challenge",
};

export default nextConfig;
