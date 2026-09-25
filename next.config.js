/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/value",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSff8P__WNWYIvDiw20Ml1aVQd36nvBU1OaSDBrgoMrWPyYr_Q/viewform",
        permanent: false,
      },
      {
        source: "/buy",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSfyRsFVIStls6qVRLADA4OXRfsohJxVca1DGuouMA478H1xtg/viewform",
        permanent: false,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
    ],
  },
}

module.exports = nextConfig
