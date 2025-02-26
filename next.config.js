/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    eslint: {
      ignoreDuringBuilds: true, 
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      domains: ['example.com'], 
    },
    i18n: {
      locales: ['en', 'uz'],
      defaultLocale: 'en',
    },
  };
  
  module.exports = nextConfig;
  