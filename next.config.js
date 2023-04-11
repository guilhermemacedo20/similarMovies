/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'https://api.themoviedb.org/',"https://image.tmdb.org"],
  },
}

module.exports = nextConfig
