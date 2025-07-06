import Head from "next/head";
import Projects from "./components/projects";
const ProjectsPage = async () => {
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
          content="Md. Emon Hossen a professional web app developer"
        />
      </Head>

      <Projects />
    </div>
  );
};

export default ProjectsPage;
