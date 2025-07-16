import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Md Emon Hossen",
		short_name: "emon_portfolio",
		description:
			"This is Md. Emon Hossen, a MERN Stack Developer from Bangladesh. I've self-taught all the tech stacks I use, such as React JS, Redux, Next.js, and Tailwind CSS.",
		start_url: "/",
		id: "com.emon.portfolio",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/favicon/web-app-manifest-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/favicon/web-app-manifest-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/public/logos/placeholder.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
		],
	};
}
