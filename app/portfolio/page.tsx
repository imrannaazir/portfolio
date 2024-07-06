import Head from "next/head";
import Projects from "./components/projects";
const baseUrl = process.env.NEXT_PUBLIC_DB_URL;
async function getData() {
  const projectRes = await fetch(`${baseUrl}/projects`, {
    next: {
      revalidate: 5,
    },
  });

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
        <meta name="twitter:site" content="@imrannaaziremon" />
        <meta name="twitter:creator" content="@imrannaaziremon" />
        <meta
          property="og:title"
          content="Imran N. Emon a professional web app developer"
        />
      </Head>

      <Projects projects={data?.data} />
    </div>
  );
};

export default ProjectsPage;
