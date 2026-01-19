"use client";

import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Organogram Workspace",
    description:
      "Organogram Workspace is an all-in-one SAAS platform for business operations by integrating multiple HR, payroll, and performance management tools into a single unified workspace. It serves organizations of all sizes with apps that streamline workforce management, automate payroll, and enhance employee performance tracking.",
    image: "/Images/workspace.png",
    bgImage: "/Images/project-background/bg1.png",
    link: "https://workspace.organogram.ltd/",
  },
  {
    id: 2,
    title: "Oloja",
    description:
      "Oloja is a B2C marketplace that connects service providers and customers in Australia. It offers a wide range of products such as electronics, fashion items, baby sitting, plumbing, etc. The platform is built with a focus on user experience and performance, ensuring that users can easily find and purchase products they love.",
    image: "/Images/oloja.jpg",
    bgImage: "/Images/project-background/bg2.png",
    link: "https://oloja.com.au/",
  },
  {
    id: 3,
    title: "Workspace HR",
    description:
      "The Workspace HR App in Organogram Workspace is a powerful, cloud-based solution designed to simplify and automate human resource management. It provides businesses with an all-in-one platform to manage employee data, track attendance, oversee performance, and enhance the overall employee experience.",
    image: "/Images/hr.jpg",
    bgImage: "/Images/project-background/bg3.png",
    link: "https://people.organogram.app/",
  },
  {
    id: 4,
    title: "Workspace Payroll",
    description:
      "The Workspace Payroll App is a powerful, automated payroll processing solution designed to simplify salary calculations, tax deductions, and compliance reporting. It ensures accurate, timely payments while reducing administrative workload, making it the perfect payroll management tool for businesses of all sizes.",
    image: "/Images/payroll.jpg",
    bgImage: "/Images/project-background/bg4.png",
    link: "https://payroll.organogram.app/",
  },
];

const imageVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectListings = () => {
  return (
    <div className="my-20 flex flex-col lg:flex-row flex-wrap gap-10 items-center justify-center">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="relative xs:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[45%] max-h-[35rem] bg-cover bg-center flex flex-col items-center justify-between p-5 md:p-10 mx-auto rounded-xl"
          style={{
            backgroundImage: `url(${project.bgImage})`,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={imageVariant}>
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={300}
              className="z-10 object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            variants={textContainer}
            className="flex flex-col items-start gap-3 z-10 self-start mt-4"
          >
            <motion.h1
              variants={textItem}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={textItem}
              className="text-[#f9f9f9] text-xs md:text-sm"
            >
              {project.description}
            </motion.p>

            <motion.div variants={textItem}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[10px] md:text-xs lg:text-[0.875rem] flex items-center gap-1 text-[#6e06f2] font-medium hover:underline transition-all duration-300"
              >
                View link <GoArrowUpRight />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectListings;
