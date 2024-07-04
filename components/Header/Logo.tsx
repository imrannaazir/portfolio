import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logoImage from "../../public/home/logo.png";

const Logo: FC = () => {
  return (
    <Link href="/" className="cursor-pointer flex w-[8rem]">
      <Image src={logoImage} width={300} height={100} alt="emon" />
    </Link>
  );
};

export default Logo;
