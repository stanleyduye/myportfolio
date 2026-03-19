"use client";

import { useRouter } from "next/navigation";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import MyStory from "../about-me/components/myStory";
import ProjectListings from "../projects/list";
import { PageNavigationButton } from "../shared/Button";
import EnhancedHomepageSectionTitle from "../shared/EnhancedHomepageSectionTitle";

const HomepageSections = () => {
  const router = useRouter();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants
  const stripeVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contentVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  };
  return (
    <div className="flex flex-col gap-10 md:gap-15 lg:gap-20 my-0 md:my-20">
      <EnhancedHomepageSectionTitle title="Projects">
        <div className="sm:-mt-10 md:mt-0">
          <div className="h-[55rem] md:h-[60rem] relative overflow-hidden">
            <ProjectListings />
            <div className="absolute bottom-0 w-full h-[10rem] z-20 bg-gradient-to-b from-transparent to-white" />
          </div>
          <div className="flex justify-center my-8">
            <PageNavigationButton
              title="View all recent projects"
              action={() => router.push("/projects")}
            />
          </div>
        </div>
      </EnhancedHomepageSectionTitle>

      <EnhancedHomepageSectionTitle title="My Profile">
        <div ref={sectionRef} className="mt-10">
          <div className="relative h-[20rem] md:h-[30rem] flex md:gap-10 gap-5 overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm p-6 md:p-8 ">
            {/* Left decorative stripe with animated gradient */}
            <motion.div
              variants={stripeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="w-10 h-full rounded-2xl bg-gradient-to-b from-green-400 via-green-500 to-blue-500 shadow-lg"
            >
              {/* Optional pulsing dot or line inside the stripe */}
              <motion.div
                animate={{
                  y: ["0%", "100%", "0%"],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-full h-1/3 bg-white/30 rounded-full blur-sm"
              />
            </motion.div>

            {/* Right side – MyStory content with fade effect */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex-1 overflow-y-auto scroll-m-0 pr-2 custom-scrollbar"
            >
              <MyStory />
            </motion.div>

            {/* Fade gradient at the bottom (exactly as original) */}
            <div className="absolute bottom-0 left-0 w-full h-[10rem] pointer-events-none bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

            {/* Subtle floating background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10" />
          </div>

          {/* View Profile button with consistent styling */}
          <div className="flex justify-center my-8">
            <PageNavigationButton
              title="View profile"
              action={() => router.push("/about-me")}
            />
          </div>
        </div>
      </EnhancedHomepageSectionTitle>
    </div>
  );
};

export default HomepageSections;
