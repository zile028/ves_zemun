/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: 'localhost'
            },
            {
                protocol: "https",
                hostname: '*'
            },
            {
                protocol: 'https',
                hostname: 'dashboard.visoka-ekonomska.edu.rs',
                pathname: '/uploads/**'
            }
        ]
    }
};

export default nextConfig;
