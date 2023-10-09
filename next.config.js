/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['data.greensnz.com'],
    },
    env: {
        url: "https://data.greensnz.com"
    },
    async redirects() {
        return [
            {
                source: '/paihia-indian/menu',
                destination: '/paihia/indian/menu',
                permanent: true,
            },
            {
                source: '/paihia-thai/contact',
                destination: '/paihia/thai/contact',
                permanent: true,
            },
            {
                source: '/paihia-indian/about',
                destination: '/paihia/indian',
                permanent: true,
            },
            {
                source: '/paihia-indian/contact',
                destination: '/paihia/indian/contact',
                permanent: true,
            },
            {
                source: '/paihia-thai',
                destination: '/paihia/thai',
                permanent: true,
            },
            {
                source: '/russell',
                destination: '/',
                permanent: true,
            },
            {
                source: '/paihia-indian',
                destination: '/paihia/indian',
                permanent: true,
            },
            {
                source: '/paihia-thai/menu',
                destination: '/paihia/thai/menu',
                permanent: true,
            },
            {
                source: '/russell/menu',
                destination: '/',
                permanent: true,
            },
            {
                source: '/russell/about',
                destination: '/',
                permanent: true,
            },
            {
                source: '/russell/contact',
                destination: '/',
                permanent: true,
            },
            {
                source: '/russell/gallery',
                destination: '/',
                permanent: true,
            },
            {
                source: '/russell/contact/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/paihia-indian/data/menu/beef-curry/',
                destination: '/paihia/indian/menu',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
