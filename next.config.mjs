/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true, // Set to true if you want to ignore ESLint during build
    },
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    }
};

export default nextConfig;
