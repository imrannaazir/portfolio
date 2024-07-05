import Container from "@components/container/Container";
import HeadingShortner from "@components/global/HeadingShortner";
import { TBlog, TProject } from "@types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const baseUrl = process.env.NEXT_PUBLIC_DB_URL;
async function getData(blogId: string) {
  const blogRes = await fetch(`${baseUrl}/blogs/${blogId}`);

  if (!blogRes.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const { data } = await blogRes.json();
  return data;
}
const BlogDetailsPage = async ({ params }: { params: { blogId: string } }) => {
  const data: TBlog = await getData(params?.blogId);

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
              description={` @imrannaaziremon`}
            />
            {/* links */}
          </div>
        </div>
      </div>
      <Container className="text-white my-10">
        <h3 className="text-xl font-semibold text-blue-500">Content:</h3>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: data?.content as string }}
        ></div>
      </Container>
    </div>
  );
};

export default BlogDetailsPage;
