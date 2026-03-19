"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";

import { MessageButton } from "../shared/Button";

const navItems = [
  { id: "home", label: "Home", link: "/" },
  { id: "projects", label: "Projects", link: "/projects" },
  { id: "about_me", label: "About Me", link: "/about-me" },
];

const mobileNavVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [openSideBar, setOpenSideBar] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpenSideBar(false);
      }
    };

    if (openSideBar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSideBar]);

  return (
    <div className="flex items-center justify-between text-[#eaeaea] sticky top-0 py-5 shadow-sm md:px-10 px-3  bg-[#fff] z-50">
      <Link href={"/"} onClick={() => setActiveSection("/")}>
        <motion.div
          className="flex p-2 cursor-pointer items-end"
          onClick={() => {
            setOpenSideBar(false);
          }}
          whileHover="hover"
          initial="rest"
        >
          <p className="text-2xl font-bold text-[#6e06f2]">StanleyDuye</p>

          <motion.div
            className="block w-2 h-2 bg-[#6605e3] rounded-full"
            variants={{
              rest: { y: 0 },
              hover: {
                y: -4,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 10,
                  repeat: 1,
                  repeatType: "reverse",
                },
              },
            }}
          />
        </motion.div>
      </Link>

      <div
        className="lg:hidden cursor-pointer text-[#37373C] mr-2"
        onClick={() => setOpenSideBar(true)}
      >
        <FaBars size={20} />
      </div>

      <div className="hidden lg:flex flex-row justify-center items-center gap-10">
        {navItems.map((navItem, index) => (
          <Link
            href={navItem.link}
            onClick={() => setActiveSection(navItem.link)}
            key={index}
            className={`font-medium md:text-sm lg:text-base cursor-pointer p-2 transition-colors hover:text-[#6605e3] ${
              activeSection === navItem.link
                ? "text-[#6605e3]"
                : "text-[#7f828b] transition-colors duration-300"
            }`}
          >
            {navItem.label}
          </Link>
        ))}
      </div>

      <Link
        href={"/contact"}
        className="hidden lg:flex p-1 justify-center items-center cursor-pointer rotate-12 transition-colors duration-500"
      >
        <BiMessageRoundedDetail
          className={`bg-[#222] p-1 rounded-full hover:bg-[#4c4c4c] ${
            activeSection === "/contact" ? "text-[#6605e3]" : "text-white"
          }`}
          size={40}
        />
      </Link>

      <motion.div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-1/2 bg-[#fff] transform ${
          openSideBar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-[10] lg:hidden`}
        initial="hidden"
        animate={openSideBar ? "visible" : "hidden"}
      >
        <div className="flex justify-end my-6">
          <AiOutlineClose
            size={24}
            onClick={() => setOpenSideBar(false)}
            className="p-1 mr-8 text-[#37373C] cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center mt-10 gap-6">
          {navItems.map((navItem, index) => (
            <motion.div key={index} variants={mobileNavVariants} custom={index}>
              <Link
                href={navItem.link}
                onClick={() => {
                  setOpenSideBar(false);
                  setActiveSection(navItem.link);
                }}
                className={`font-medium cursor-pointer p-2 transition-colors hover:text-[#6605e3] text-xs md:text-sm ${
                  activeSection === navItem.link
                    ? "text-[#6605e3]"
                    : "text-[#7f828b] transition-colors duration-300"
                }`}
              >
                {navItem.label}
              </Link>
            </motion.div>
          ))}

          <MessageButton
            title="Get In Touch"
            action={() => {
              setOpenSideBar(false);
              router.push("/contact");
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
