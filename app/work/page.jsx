"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  ,
  {
    num: "01",
    category: "Supply Chain Performance Analytics Dashboard",
    title: "Supply Chain Performance Analytics Dashboard",
    description:
      "Developed an end-to-end analytics solution to monitor supplier delivery performance and inventory levels. Built ETL pipelines to clean and aggregate raw order and lead-time data into a centralized SQL data mart. Designed action-driven Tableau dashboards highlighting on-time delivery rates and stock-out risks to enable proactive decisions, and optimized queries to cut dashboard load time by ~40% for cross-functional stakeholders.",
    stack: [{ name: "Python" }, { name: "SQL" }, { name: "Tableau" }],
    image: "/assets/work/Supply Chain Performance Analytics Dashboard", 
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "Ad-hoc Insights Platform for Operational Data",
    title: "Ad-hoc Insights Platform for Operational Data",
    description:
      "Created a scalable insights platform to support data requests across logistics, operations, and purchasing. Consolidated disparate operational datasets into a query-optimized relational schema, improving ad-hoc query performance by ~50%. Built interactive Tableau dashboards with drill-downs and parameterized queries to answer high-impact business questions, and authored user docs and tutorials to drive adoption and data literacy for non-technical users.",
    stack: [{ name: "SQL" }, { name: "Python" }, { name: "Tableau" }, { name: "Excel" }],
    image: "/assets/work/Ad-hoc Insights Platform for Operational Data", 
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "Unique ID Management System",
    title: "Unique ID Management System",
    description:
      "Engineered a robust identity management platform for user authentication and comprehensive data logging to enable advanced user behavior analytics, boosting system accuracy by 30% and reducing processing time by 25% for over 1,000 users.",
    stack: [
      { name: "Python" },
      { name: "MySQL" },
      { name: "CSS" },
      { name: "JavaScript" }
    ],
    image: "/assets/work/uid-management-system.png",
    live: "",
    github: ""
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
      }}
      className="h-screen flex items-center overflow-hidden pt-24"
    >
      <div className="container mx-auto h-full overflow-hidden">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent" style={{ WebkitTextStroke: '2px #36e0e0' }}>
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button - commented out for now */}
                {/* {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )} */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-transparent">
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain p-4"
                          alt={project.title}
                          priority
                          quality={100}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent/80 w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
