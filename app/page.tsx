import Link from "next/link";
import Image from "next/image";
import Badge from "./components/Badge";
import ArrowIcon from "./components/ArrowIcon";
import type { Metadata } from "next";
import Separator from "./components/separator";

export const metadata: Metadata = {
  title: "Md Emon Hossen",
  description:
    "This is Md. Emon Hossen, a MERN Stack Developer from Bangladesh. I've self-taught all the tech stacks I use, such as React JS, Redux, Next.js, and Tailwind CSS. ✌",
  openGraph: {
    title: "Md Emon Hossen",
    description:
      "This is Md. Emon Hossen, a MERN Stack Developer from Bangladesh. I've self-taught all the tech stacks I use, such as React JS, Redux, Next.js, and Tailwind CSS. ✌",
    url: "https://imrannaaziremon.vercel.app/",
    siteName: "Md Emon Hossen's Portfolio",
    images: [
      {
        url: "/logos/placeholder.png", // placeholder image
        height: 630,
        alt: "Md Emon Hossen",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Emon Hossen",
    description:
      "This is Md. Emon Hossen, a MERN Stack Developer from Bangladesh. I've self-taught all the tech stacks I use, such as React JS, Redux, Next.js, and Tailwind CSS. ✌",
    images: ["/logos/placeholder.png"],
    creator: "@your_twitter_handle", // dummy
    creatorId: "@your_twitter_handle", // dummy
    site: "@your_twitter_handle", // dummy
    siteId: "@your_twitter_handle", // dummy
  },
};

export default function Page() {
  return (
    <section>
      <header className="mb-6">
        <h1 className='font-medium text-2xl mb-2 tracking-tight'>
          Sup, I'm Md Emon Hossen👋
        </h1>
        <p className="text-lg prose prose-neutral dark:prose-invert">
          This is Md. Emon Hossen, a MERN Stack Developer from Bangladesh. I've self-taught all the tech stacks I use, such as React JS, Redux, Next.js, and Tailwind CSS. ✌
        </p>
      </header>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>Professional Work</h2>
        <p>
          I specialize in creating user-friendly digital experiences. Currently,
          I work as a <strong>Frontend Developer</strong> at
          <span className="not-prose">
            <Badge href="https://www.techforing.com/">
              <Image
                src="/logos/placeholder.png"
                alt="TechForing Ltd"
                height={16}
                width={16}
                className={"pr-1"}
              />
              TechForing Ltd
            </Badge>
          </span>
          where we're building modern web applications. I also worked as a <strong>Full Stack Developer</strong> at
          <span className="not-prose">
            <Badge href="https://dignityofnoble.org/">
              <Image
                src="/logos/placeholder.png"
                alt="Dignity Of Noble"
                height={16}
                width={16}
                className={"pr-1"}
              />
              Dignity Of Noble
            </Badge>
          </span>
          . For more details about my experience, check out my <Link href="/resume">resume</Link>.
        </p>
      </div>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>About Me</h2>
        <p>
          This is Md. Emon Hossen, a MERN Stack Developer from Bangladesh. I've self-taught all the tech stacks I use, such as React JS, Redux, Next.js, and Tailwind CSS. ✌<br /> <br />
          I consider myself fortunate to be able to develop and optimize web applications for a living. My deep interest in the web platform and SaaS products drives me to create results-driven digital solutions for my clients while becoming part of meaningful businesses along the way. <br /> <br />
          I've developed over 50 websites and worked closely with the founders of various startups. In addition, I've committed my time to three startups full-time, assisting them in hiring and managing their technical teams. I am excited to become a part of your journey. <br /> <br />
          Recently, I developed a digital marketing platform called The Run Digital. We help entrepreneurs define and achieve their web goals through our web-based solutions. We are driven by key performance indicators (KPIs) to ensure success.
        </p>
      </div>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>Personal Interests</h2>
        <p>
          Outside of work, I enjoy learning new technologies, reading tech blogs, and collaborating with other developers. (dummy)
        </p>
      </div>

      <Separator />

      <div className="mb-8 prose prose-neutral dark:prose-invert">
        <h2>Writing</h2>
        <p>
          I've started writing <Link href="/blog">blogs</Link> to help others
          improve their engineering skills. Stay tuned for more content!
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <article className="text-xs sm:hidden lg:block">
          Press ⌘+K to navigate with your keyboard.
        </article>
      </div>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/imrannaazir"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Follow me</p>
          </a>
        </li>
      </ul>

      <div>
        <a
          className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all text-neutral-600 dark:text-neutral-300 mt-3"
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:imrannaaziremon@gmail.com?subject=Hello Emon!"
        >
          <p className="h-7">
            <span className="mr-2 text-neutral-600">📧</span>
            imrannaaziremon@gmail.com
          </p>
        </a>
      </div>
    </section>
  );
}
