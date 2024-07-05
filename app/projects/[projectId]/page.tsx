import Container from "@components/container/Container";
import HeadingShortner from "@components/global/HeadingShortner";
import { TProject } from "@types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const baseUrl = process.env.NEXT_PUBLIC_DB_URL;
async function getData(projectId: string) {
  const projectRes = await fetch(`${baseUrl}/projects/${projectId}`);

  if (!projectRes.ok) {
    throw new Error("Failed to fetch projects");
  }

  const { data } = await projectRes.json();
  return data;
}
const ProjectDetailsPage = async ({
  params,
}: {
  params: { projectId: string };
}) => {
  const data: TProject = await getData(params?.projectId);

  return (
    <div>
      {" "}
      <Head>
        <title>{data?.title} </title>
        <meta name="robots" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@imrannaaziremon" />
        <meta name="twitter:creator" content="@imrannaaziremon" />
        <meta
          property="og:title"
          content="Imran N. Emon a professional web app developer"
        />
      </Head>
      <div className="relative">
        <Image
          src={
            (data?.image?.url as string) ||
            "https://studio.uxpincdn.com/studio/wp-content/uploads/2022/02/web-ui-design-examples-6.png.webp"
          }
          width={1280}
          height={720}
          alt={data?.title}
          className="aspect-[16/6] w-full object-cover"
        />
        <div className="absolute flex items-center justify-center inset-0 bg-opacity-0 bg-slate-600/80 backdrop-blur-[3px]">
          <div>
            <HeadingShortner
              title={data?.title}
              description={`This page contains the case study of ${data?.title} Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.

`}
            />
            {/* links */}
            <div className="flex justify-center gap-2">
              <Link
                href={data.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Live <FaExternalLinkAlt className="ml-2" />
              </Link>
              {data.clientGitHub && (
                <Link
                  href={data?.clientGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
                >
                  Client <FaGithub className="ml-2" />
                </Link>
              )}
              {data?.backendGitHub && (
                <Link
                  href={data.backendGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
                >
                  Backend <FaGithub className="ml-2" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Container className="text-white my-10">
        <h3 className="text-xl font-semibold text-blue-500">Description:</h3>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: data?.description as string }}
        ></div>
      </Container>
    </div>
  );
};

export default ProjectDetailsPage;
