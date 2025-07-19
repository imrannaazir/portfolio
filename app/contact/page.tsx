// pages/ContactPage.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Separator from "../components/separator";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
	title: "Contact",
	description: "Get in touch with Md Emon Hossen via email or schedule a meet.",
	openGraph: {
		title: "Contact Md Emon Hossen",
		description:
			"Find and connect with Md Emon Hossen via email or book a meeting.",
		url: "https://imrannaaziremon.vercel.app/contact",
		siteName: "Md Emon Hossen's Portfolio",
		images: [
			{
				url: "/logos/placeholder.png",
				width: 1200,
				height: 630,
				alt: "Contact Md Emon Hossen",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Md Emon Hossen",
		description: "Connect with Md Emon Hossen via email or schedule a meet.",
		images: ["/logos/placeholder.png"],
		creator: "@your_twitter_handle", // dummy
		creatorId: "@your_twitter_handle", // dummy
		site: "@your_twitter_handle", // dummy
		siteId: "@your_twitter_handle", // dummy
	},
};

export default function ContactPage() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-6 tracking-tight'>
				Contact 📧
			</h1>

			{/* Email Contact */}
			<div className="prose prose-neutral dark:prose-invert">
				<p>Feel free to reach out to me via email:</p>
				<div className="flex items-center mb-4">
					<EnvelopeSimple size={24} />
					<a
						href="mailto:imrannaaziremon@gmail.com"
						className="underline text-sm ml-1"
					>
						imrannaaziremon@gmail.com
					</a>
				</div>

				<Separator />

				{/* Meeting Schedule Option */}
				<h2 className="font-medium text-2xl mb-6 tracking-tight">
					Want to chat? Schedule a 1:1 with me!
				</h2>
				<div>
					<a
						href="https://calendly.com/your-meeting-link" // dummy
						target="_blank"
						rel="noopener noreferrer"
						className="underline text-sm"
					>
						Schedule a meet
					</a>
				</div>
			</div>
		</section>
	);
}
