import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className }: Props) => {
  return (
    <p
      className={`text-[0.9rem] md:text-[1.1rem] mt-3 md:mt-5 text-[#9498a0] ${className}`}
    >
      {children}
    </p>
  );
};

export const Title = ({ children, className }: Props) => {
  return (
    <h1
      className={`text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] font-bold text-[#222] leading-none ${className}`}
    >
      {children}
    </h1>
  );
};

export const SectionTitle = ({ children, className }: Props) => {
  return (
    <div className="flex items-end gap-[2px] justify-start">
      <h1
        className={`text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[3.5rem] font-bold text-[#222] leading-none ${className}`}
      >
        {children}
      </h1>
      <div className="flex w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full bg-[#]"></div>
    </div>
  );
};

export const HomepageSectionTitle = ({ children, className = "" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-end gap-2 justify-start mb-4"
    >
      <h1
        className={`
          text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]
          font-bold leading-none
          bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent
          ${className}
        `}
      >
        {children}
      </h1>

      {/* Glowing, pulsing dot */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
      />
    </motion.div>
  );
};
