"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
      }}
      className="h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto h-full overflow-hidden">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Data Science Enthusiast</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="home-name-accent">Kabir Shah</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
             I’m a data science enthusiast who designs scalable, efficient data pipelines and uncovers actionable insights from complex datasets. I’m currently pursuing my MS in Computer Science at Northeastern University.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-accent border-accent hover:bg-accent hover:text-white transition-all duration-300"
                onClick={() => window.open('/assets/KABIR_SHAH_Resume.pdf', '_blank')}
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
