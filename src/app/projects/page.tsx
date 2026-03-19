"use client";

import { motion } from "framer-motion";
import { PageTitle } from "../shared/PageTitle";
import ProjectListings from "./list";

const Projects = () => {
  return (
    <section className="relative min-h-screen py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements (same style as hero) */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-green-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <PageTitle
            title={
              <>
                <span className="text-[#22c55e]">Recent</span> Projects
              </>
            }
            paragraph="Step into my digital playground — a curated showcase of projects where creativity meets code. From responsive layouts to buttery‑smooth interactions, each piece is crafted with care to deliver fast, modern, and genuinely delightful experiences. Take a look around and see what I’ve been building lately."
          />
        </motion.div>

        {/* Project Listings with its own entrance animations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-12 md:mt-16"
        >
          <ProjectListings />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
