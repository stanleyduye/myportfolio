"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
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

// Animation variants for mobile menu items (staggered)
const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [openSideBar, setOpenSideBar] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Update active section on route change
  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  // Close sidebar on click outside
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

  // Add a subtle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo with animated dot */}
        <Link href="/" onClick={() => setActiveSection("/")} className="group">
          <motion.div
            className="flex items-end gap-1 cursor-pointer"
            whileHover="hover"
            initial="rest"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              StanleyDuye
            </span>
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
              variants={{
                rest: { y: 0, scale: 1 },
                hover: {
                  y: -4,
                  scale: 1.2,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 10,
                    repeat: 1,
                    repeatType: "reverse",
                  },
                },
              }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.link;
            return (
              <Link
                key={item.id}
                href={item.link}
                onClick={() => setActiveSection(item.link)}
                className="relative group"
              >
                <span
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-green-500"
                      : "text-gray-600 hover:text-green-500"
                  }`}
                >
                  {item.label}
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Contact Button */}
        <Link href="/contact" className="hidden lg:block group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <BiMessageRoundedDetail
              className="relative bg-white text-gray-800 rounded-full p-2 hover:text-green-500 transition-colors"
              size={44}
            />
          </motion.div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenSideBar(true)}
          className="lg:hidden text-gray-700 hover:text-green-500 transition-colors"
          aria-label="Open menu"
        >
          <FaBars size={24} />
        </button>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {openSideBar && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenSideBar(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
              />
              {/* Sidebar */}
              <motion.div
                ref={sidebarRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-64 bg-white/90 backdrop-blur-xl shadow-2xl lg:hidden z-50 flex flex-col"
              >
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => setOpenSideBar(false)}
                    className="p-2 text-gray-600 hover:text-green-500 transition-colors"
                    aria-label="Close menu"
                  >
                    <AiOutlineClose size={24} />
                  </button>
                </div>

                <nav className="flex flex-col items-center gap-6 mt-8 px-4">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.link;
                    return (
                      <motion.div
                        key={item.id}
                        custom={index}
                        variants={mobileItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="w-full"
                      >
                        <Link
                          href={item.link}
                          onClick={() => {
                            setOpenSideBar(false);
                            setActiveSection(item.link);
                          }}
                          className={`block text-center py-2 px-4 rounded-lg transition-all duration-200 ${
                            isActive
                              ? "bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium shadow-lg"
                              : "text-gray-700 hover:bg-green-50"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    variants={mobileItemVariants}
                    custom={navItems.length}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="w-full mt-4 flex justify-center"
                  >
                    <MessageButton
                      title="Get In Touch"
                      action={() => {
                        setOpenSideBar(false);
                        router.push("/contact");
                      }}
                    />
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default NavBar;
