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
      Full Stack Developer with {yearsOfExperience()}+ years of experience building scalable, real-time applications and backend services. Focused on system design, microservices, database optimization, and cloud deployments. Experienced in AI-driven workflows including RAG, OCR, and real-time business messaging automation.
      </p>
    </motion.section>
  );
}
