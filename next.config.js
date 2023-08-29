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
    }

}

module.exports = nextConfig
