/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/user',
                permanent: true,
            },
            {
                source: '/',
                destination: '/user',
                permanent: false,
            }
        ]
    }
};

export default nextConfig;
