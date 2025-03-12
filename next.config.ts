/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "static.vecteezy.com",
			},
		],
	},
};

module.exports = nextConfig;
