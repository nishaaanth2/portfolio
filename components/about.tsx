"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { yearsOfExperience } from "@/lib/utils";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      A passionate researcher and developer with a deep interest in exploring new technologies. With {yearsOfExperience()}+ years of experience as a Full Stack Developer, I specialize in ReactJS, NextJS, shadCN, TailwindCSS, NodeJS, ExpressJS, and Python, as well as PostgreSQL and Web3.js. I am constantly striving to learn and grow in the field of technology.
      </p>
    </motion.section>
  );
}
