import Head from "next/head";
import Projects from "./components/projects";
const baseUrl = process.env.NEXT_PUBLIC_DB_URL;
async function getData() {
  const projectRes = await fetch(`${baseUrl}/projects`);

  if (!projectRes.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projectsData = await projectRes.json();
  return projectsData;
}
const ProjectsPage = async () => {
  const data = await getData();

  return (
    <div>
      <Head>
        <title>portfolio page | my projects</title>
        <meta name="robots" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Nayan88888" />
        <meta name="twitter:creator" content="@Nayan88888" />
        <meta
          property="og:title"
          content="Nayan chandrakar a professional web app developer"
        />
      </Head>

      <Projects projects={data?.data} />
    </div>
  );
};

export default ProjectsPage;
