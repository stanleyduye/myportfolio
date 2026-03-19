"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Paragraph } from "../../shared/Typography";

const banner = [
  {
    id: 1,
    list: [
      "JSON & data manipulation",
      "Code Optimization",
      "Caching Strategies",
      "Performance Optimization",
      "Git/GitHub",
      "Styled-Components",
      "Sass/SCSS",
      "Bootstrap",
      "REST APIs",
    ],
  },
  {
    id: 2,
    list: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Typescript",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "React Query",
      "Shadcn",
    ],
  },
  {
    id: 3,
    list: [
      "Problem-Solving & Debugging",
      "Effective Communication",
      "Leadership",
      "Commitment",
      "Collaboration",
    ],
  },
];

const BannerRow = ({ row, direction }: { row: any; direction: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);

  useEffect(() => {
    if (containerRef.current && rowRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const rowWidth = rowRef.current.scrollWidth;
      setMaxX(rowWidth - containerWidth);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <motion.div
        ref={rowRef}
        className="flex items-center gap-2 whitespace-nowrap"
        animate={
          maxX > 0
            ? { x: direction === 1 ? [0, -maxX, 0] : [-maxX, 0, -maxX] }
            : {}
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {row.list.map((item: string, i: number) => (
          <div key={`${row.id}-${i}`} className="flex items-center">
            <Paragraph className="px-4 py-1 bg-[#222] text-white rounded-xl">
              {item}
            </Paragraph>

            {i < row.list.length - 1 && (
              <span className="text-3xl mt-3 md:mt-4 lg:mt-5 mx-2 text-[#6e06f2]">
                •
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="bg-[#B8B8B8] w-full py-8 lg:py-10 flex flex-col justify-between gap-4 md:gap-6 items-start my-16 lg:my-20 rounded-xl overflow-x-hidden">
      {banner.map((row, index) => {
        const direction = index === 1 ? -1 : 1;
        return <BannerRow key={row.id} row={row} direction={direction} />;
      })}
    </div>
  );
};

export default Banner;
