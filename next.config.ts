import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
    APP_URL: process.env.APP_URL,
    SELECTEL_URL: process.env.SELECTEL_URL,
    RECAPTCHA_SITE_SECRET: process.env.RECAPTCHA_SITE_SECRET,
  },
  images: {
    domains: [new URL(process.env.SELECTEL_URL as string).hostname],
  },
};
export default nextConfig;
