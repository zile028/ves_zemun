/** @type {import('next').NextConfig} */
const nextConfig = {
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
