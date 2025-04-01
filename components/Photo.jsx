"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.3, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.3, ease: "easeIn" },
          }}
          className="w-[280px] h-[280px] xl:w-[480px] xl:h-[480px] mix-blend-screen absolute left-[10px] xl:left-[13px] top-[10px] xl:top-[13px]"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={85}
            fill
            sizes="(max-width: 768px) 280px, 480px"
            alt="Vishwas Patel"
            className="object-cover rounded-full"
            style={{
              objectPosition: "center center",
              objectFit: "cover",
              mixBlendMode: "screen",
              transform: "scale(0.95)"
            }}
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0", opacity: 0 }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
              opacity: 1,
            }}
            transition={{
              opacity: { delay: 0.2, duration: 0.3, ease: "easeIn" },
              strokeDasharray: { duration: 20, repeat: Infinity, repeatType: "reverse" },
              rotate: { duration: 20, repeat: Infinity, repeatType: "reverse" },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
