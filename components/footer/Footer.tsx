import Container from "@components/container/Container";
import Image from "next/image";
import HeroImage from "../../public/home/logo.png";
import { BiEnvelope } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: BsFacebook,
      path: "https://facebook.com",
    },
    {
      id: 2,
      icon: BsTwitter,

      path: "https://twitter.com",
    },
    {
      id: 3,
      icon: BsInstagram,
      path: "https://instagram.com",
    },
    {
      id: 4,
      icon: BsLinkedin,
      path: "https://linkedin.com",
    },
  ];
  return (
    <div className="backdrop-blur-[10px] text-white bg-opacity-0  bg-slate-600/20 ring-1 ring-blue-400/20">
      <Container className="py-10 space-y-6">
        <div className="w-full flex justify-between ">
          {/* logo */}
          <div>
            <div className="text-4xl">
              <Image
                className="rounded-3xl scale-110"
                src={HeroImage}
                width={100}
                height={100}
                alt="hero_image"
                sizes="100"
              />
            </div>
            <p className="flex items-center gap-2 text-sm">
              <BiEnvelope /> imrannaaziremon@gmail.com
            </p>
          </div>
          {/* quick links */}
          <div className="flex items-center gap-2 text-sm">
            <p className="text-center dark:text-gray-500">
              {" "}
              &copy; 2024 Imran N. Emon All rights reserved
            </p>
          </div>
          {/* social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.path}>
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
