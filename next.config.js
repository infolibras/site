/** @type {import("next").NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    SUAP_CLIENT_ID: process.env.SUAP_CLIENT_ID,
    SUAP_CLIENT_SECRET: process.env.SUAP_CLIENT_SECRET,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_TYPESENSE_HOST: process.env.NEXT_PUBLIC_TYPESENSE_HOST,
    NEXT_PUBLIC_TYPESENSE_PROTOCOL: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL,
    NEXT_PUBLIC_TYPESENSE_PORT: process.env.NEXT_PUBLIC_TYPESENSE_PORT,
    NEXT_PUBLIC_TYPESENSE_API_KEY: process.env.NEXT_PUBLIC_TYPESENSE_API_KEY
  }
}

module.exports = nextConfig
