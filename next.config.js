/** @type {import('next').NextConfig} */
const nextConfig = {
  apiRoutes: [
    {
      handler: "./api/notes.js",
    },
  ],
};

module.exports = nextConfig;
