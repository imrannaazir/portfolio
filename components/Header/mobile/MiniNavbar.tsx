"use client";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { navigation } from "@constants/navigation";
import { FC, useCallback } from "react";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import HoverButton from "@components/ui/button/HoverButton";

interface MiniNavbarProps {
  isOpen: boolean;
  handleClick: () => void;
}

const MiniNavbar: FC<MiniNavbarProps> = ({ isOpen, handleClick }) => {
  const router = useRouter();
  const handleRoute = useCallback(
    (href: string) => {
      router.push(href);
    },
    [router]
  );

  return (
    <div
      className={`
              bg-black/40 border-r-[1.5px] border-r-gray-500 backdrop-blur-[250px] fixed translate xl:hidden inset-0 w-[18rem] h-[100vh] p-6 md:p-4 transition-all duration-900 ${
                isOpen ? "translate-x-0" : "-translate-x-96"
              } ${isOpen ? "opacity-100" : "opacity-20"}`}
    >
      <span onClick={() => handleClick()} className="cursor-pointer p-2">
        <AiOutlineCloseCircle size={30} color="white" />
      </span>
      <div className=" flex justify-start gap-3 flex-col h-full mt-4 w-full">
        {navigation?.map((data) => {
          const { href, id, label, svg } = data;
          return (
            <span
              key={id}
              className=" text-sm text-white bg-transparent transition-all duration-200 rounded-[10px] p-4 cursor-pointer border-[1.5px] border-gray-500 hover:border-white"
              onClick={() => handleRoute(href)}
            >
              {label}
            </span>
          );
        })}
        <Link
          target="_blank"
          rel="noreferer"
          href="mailto:imrannaaziremon@gmail.com"
          className="mt-6 text-center"
        >
          <HoverButton label="Hire Me" />
        </Link>
      </div>
    </div>
  );
};
export default MiniNavbar;
