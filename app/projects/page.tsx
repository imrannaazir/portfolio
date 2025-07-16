import type { Metadata } from "next";
import ProjectCard from "../components/project-card";
import myData from '../../my-data.json';

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Explore projects by Md Emon Hossen, including Fast Mart, WeRWealthy, and more.",
	openGraph: {
		title: "Md Emon Hossen's Projects",
		description:
			"Discover the latest projects built by Md Emon Hossen, including web development and open-source contributions.",
		url: "https://imrannaaziremon.vercel.app/projects",
		siteName: "Md Emon Hossen's Portfolio",
		images: [
			{
				url: "/logos/placeholder.png",
				width: 1200,
				height: 630,
				alt: "Md Emon Hossen's Projects",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Md Emon Hossen's Projects",
		description:
			"Explore a variety of projects and open-source contributions by Md Emon Hossen.",
		images: ["/logos/placeholder.png"],
		creator: "@your_twitter_handle", // dummy
		creatorId: "@your_twitter_handle", // dummy
		site: "@your_twitter_handle", // dummy
		siteId: "@your_twitter_handle", // dummy
	},
};

const projectsData = (myData.projects || [
	{
		name: "Dummy Project",
		description: "This is a dummy project. Replace with your real project.",
		features: ["Feature 1", "Feature 2"],
		technologies: ["Tech1", "Tech2"],
		links: { github: "#", live: "#" },
	},
]).map((project, idx) => ({
	project: project.name || `Dummy Project ${idx+1}`,
	logo: "/logos/placeholder.png",
	description: project.description || "Dummy description.",
	technologies: project.technologies || ["Tech1", "Tech2"],
	website: (project.links && project.links.live) || "#",
}));

// const openSourceData = [
// {
// 	project: "Maya",
// 	logo: "https://cdn.ayushchugh.com/logos/maya.png",
// 	description:
// 		"Maya is a project that helps users manage their pocket money, track expenses, and set savings goals.",
// 	technologies: ["React", "Node.js", "Express", "TypeScript"],
// 	website: "https://github.com/maya-manager",
// },
// {
// 	project: "Multi Email",
// 	logo: "https://cdn.ayushchugh.com/logos/multiEmail.png",
// 	description:
// 		"Multi Email is a platform that allows users to connect and manage multiple email services in one place.",
// 	technologies: ["React", "Node.js", "Express", "OAuth", "TypeScript"],
// 	website: "https://github.com/MultiEmail/",
// },
// ];

export default function ProjectsPage() {
	return (
		<section>
			<h1 className="font-medium text-2xl mb-4 tracking-tight">Projects 🚀</h1>

			{/* Projects Section */}
			<div className="prose prose-neutral dark:prose-invert">
				{projectsData.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.project}
						logo={project.logo}
						description={project.description}
						technologies={project.technologies}
						website={project.website}
					/>
				))}
			</div>

			{/* Open Source Contributions Section */}
			{/* <h2 className="font-medium text-2xl mb-4">Open Source Contributions</h2>
      <p className="prose prose-neutral dark:prose-invert">
        These are various open-source projects maintained by me, as well as
        those to which I have contributed throughout my programming journey.
      </p>
      <div className="prose prose-neutral dark:prose-invert mt-4">
        {openSourceData.map((contribution, index) => (
          <ProjectCard
            key={index}
            title={contribution.project}
            logo={contribution.logo}
            description={contribution.description}
            technologies={contribution.technologies}
            website={contribution.website}
          />
        ))}
      </div> */}
		</section>
	);
}
