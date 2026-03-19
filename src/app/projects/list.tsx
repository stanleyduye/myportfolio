"use client";

import { motion, Variants } from "framer-motion"; // 👈 Import Variants
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const projects = [
  {
    id: 2,
    title: "Go-Mailer",
    description:
      "Go-Mailer is a digital marketing company that provides email marketing services to businesses. They specialize in creating and managing email campaigns, designing templates, and analyzing campaign performance to help businesses effectively reach their target audience and achieve their marketing goals.",
    image: "/Images/go-mailer.png",
    bgImage: "/Images/project-background/bg2.png",
    link: "https://go-mailer.com",
  },
  {
    id: 1,
    title: "Organogram Workspace",
    description:
      "Organogram Workspace is an all-in-one SAAS platform for business operations by integrating multiple HR, payroll, and performance management tools into a single unified workspace. It serves organizations of all sizes with apps that streamline workforce management, automate payroll, and enhance employee performance tracking.",
    image: "/Images/workspace.png",
    bgImage: "/Images/project-background/bg1.png",
    link: " https://organogram.ltd/workspace",
  },
  {
    id: 5,
    title: "Workspace Performance (OKR)",
    description:
      "The Workspace Performance App is a comprehensive performance management solution designed to help businesses track, evaluate, and enhance employee performance. It offers tools for setting goals, providing feedback, conducting evaluations, and fostering continuous improvement, making it an essential tool for optimizing workforce productivity.",
    image: "/Images/okr.png",
    bgImage: "/Images/project-background/bg1.png",
    link: "https://okr.organogram.app/",
  },
  {
    id: 7,
    title: "BuildByte",
    description:
      "This is a project aimed to help businesses seamlessly build and manage their online presence with the power of Artificial Intelligence. It offers a comprehensive suite of tools and services designed to simplify the process of creating, maintaining, and optimizing websites and digital platforms. With BuildByte, businesses can easily establish a strong online presence, enhance their digital marketing efforts, and effectively engage with their target audience.",
    image: "/Images/buildbyte.png",
    bgImage: "/Images/project-background/bg2.png",
    link: "https://app2.buildbyte.dev/fe",
  },

  {
    id: 3,
    title: "Workspace HR",
    description:
      "The Workspace HR App in Organogram Workspace is a powerful, cloud-based solution designed to simplify and automate human resource management. It provides businesses with an all-in-one platform to manage employee data, track attendance, oversee performance, and enhance the overall employee experience.",
    image: "/Images/hr.png",
    bgImage: "/Images/project-background/bg3.png",
    link: "https://people.organogram.app/",
  },
  {
    id: 6,
    title: "Marp Cleaning services",
    description:
      "Marp Cleaning services is a professional cleaning company that provides comprehensive cleaning solutions for residential and commercial properties. They offer a wide range of services including deep cleaning, regular maintenance, and specialized cleaning for unique needs.",
    image: "/Images/marp.png",
    bgImage: "/Images/project-background/bg1.png",
    link: "https://marpcleaningservice.com.ng/",
  },
  {
    id: 4,
    title: "Workspace Payroll",
    description:
      "The Workspace Payroll App is a powerful, automated payroll processing solution designed to simplify salary calculations, tax deductions, and compliance reporting. It ensures accurate, timely payments while reducing administrative workload, making it the perfect payroll management tool for businesses of all sizes.",
    image: "/Images/payroll.png",
    bgImage: "/Images/project-background/bg4.png",
    link: "https://payroll.organogram.app/",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const ProjectListings = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
            <div className="relative w-full h-48 md:h-56 mb-4 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/20 group-hover:ring-green-400/50 transition-all duration-300">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Floating gradient dot (like in the title) */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 shadow-lg"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-md">
              {project.title}
            </h3>

            <p className="text-sm md:text-base text-gray-100 line-clamp-3 mb-4 flex-grow drop-shadow">
              {project.description}
            </p>

            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-300 font-medium hover:text-white transition-colors duration-200 group/link"
            >
              <span>View Project</span>
              <GoArrowUpRight className="text-lg transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Animated gradient border on hover */}
          <div className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400 to-blue-500" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectListings;
