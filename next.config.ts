/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
	images: {
		domains: ["res.cloudinary.com"],
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static.vecteezy.com",
			},
		],
	},
};

module.exports = nextConfig;
