import Container from "@components/container/Container";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { TBlog } from "@types";

const baseUrl = process.env.NEXT_PUBLIC_DB_URL;
async function getData() {
  const blogRes = await fetch(`${baseUrl}/blogs/all`, {
    next: {
      revalidate: 5,
    },
  });

  if (!blogRes.ok) {
    throw new Error("Failed to fetch projects");
  }

  const { data } = await blogRes.json();
  return data;
}

const page: FC = async () => {
  const data = await getData();

  return (
    <Container>
      <h1 className="text-2xl font-bold text-center text-white lg:text-3xl mt-14">
        Tech Blogs
      </h1>
      <div className="grid gap-8 mt-8 lg:grid-cols-3 mb-20 ">
        {data?.data?.map((data: TBlog) => {
          const { _id, image, title } = data;
          return (
            <Link key={_id} href={`/blogs/${_id}`}>
              <div className="flex flex-col justify-between p-4 space-y-4 rounded-[10px] bg-white/10 h-full ">
                <h2 className="text-xl font-bold text-white text-center lg:text-start">
                  {title}
                </h2>
                <span className=" lazy-load-image-background blur lazy-load-image-loaded">
                  <Image
                    src={image?.url as string}
                    alt="resource-image"
                    loading="lazy"
                    className="rounded-xl  aspect-video object-cover"
                    width={330}
                    height={153}
                  />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default page;
