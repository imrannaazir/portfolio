import type { Metadata } from "next";
import WorkExperienceItem from "../components/work-experience-item";
import EducationItem from "../components/education-item";
import VolunteeringItem from "../components/volunteer-item";
import myData from '../../my-data.json';

export const metadata: Metadata = {
	title: "Resume",
	description:
		"A summary of Md Emon Hossen’s corporate contributions, skills, and experience as a MERN Stack Developer, including work with TechForing Ltd, Dignity Of Noble, and more.",
	openGraph: {
		type: "article",
		url: `https://imrannaaziremon.vercel.app/resume`,
		title: "Md Emon Hossen’s Resume",
		siteName: "Md Emon Hossen's Portfolio",
		description:
			"Detailed resume of Md Emon Hossen, MERN Stack Developer, with work experience, projects, and educational background.",
		images: [
			{
				url: "/logos/placeholder.png",
				width: 1200,
				height: 630,
				alt: "Md Emon Hossen's Resume",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Md Emon Hossen's Resume",
		description:
			"Check out Md Emon Hossen’s MERN Stack Developer resume, showcasing professional contributions and achievements.",
		images: ["/logos/placeholder.png"],
		creator: "@your_twitter_handle", // dummy
		creatorId: "@your_twitter_handle", // dummy
		site: "@your_twitter_handle", // dummy
		siteId: "@your_twitter_handle", // dummy
	},
};

const resumeData = {
	workExperience: (myData.experience || [
		{
			position: "Dummy Position",
			company: "Dummy Company",
			location: "Dummy Location",
			duration: "Dummy Duration",
			technologies: ["Tech1", "Tech2"],
		},
	]).map((exp, idx) => ({
		company: exp.company || `Dummy Company ${idx+1}`,
		logo: "/logos/placeholder.png",
		role: exp.position || "Dummy Position",
		period: exp.duration || "Dummy Duration",
		location: exp.location || "Dummy Location",
		workType: exp.workType || "Full-time",
		website: exp.website || "#",
		technologies: exp.technologies || ["Tech1", "Tech2"],
		responsibilities: exp.responsibilities || ["Responsibility 1", "Responsibility 2"],
	})),
	education: myData.education || [
		{
			institution: "Dummy Institution",
			logo: "/logos/placeholder.png",
			degree: "Dummy Degree",
			period: "Dummy Period",
			location: "Dummy Location",
		},
	],
	volunteering: myData.volunteering || [
		{
			organization: "Dummy Organization",
			logo: "/logos/placeholder.png",
			role: "Dummy Role",
			period: "Dummy Period",
			location: "Dummy Location",
			responsibilities: ["Responsibility 1", "Responsibility 2"],
		},
	],
};

export default function WorkPage() {
	return (
		<section>
			<div className="flex">
				<h1 className='font-medium text-2xl mb-2 tracking-tight'>
					My Resume 📝
				</h1>
			</div>

			{/* Work Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Work Experience</h2>
				{resumeData.workExperience.map((job, index) => (
					<WorkExperienceItem key={index} job={job} />
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Education Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Education</h2>
				{resumeData.education.map((edu, index) => (
					<EducationItem key={index} edu={edu} />
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Volunteering Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Volunteering</h2>
				{resumeData.volunteering.map((volunteer, index) => (
					<VolunteeringItem key={index} volunteer={volunteer} />
				))}
			</div>
		</section>
	);
}
