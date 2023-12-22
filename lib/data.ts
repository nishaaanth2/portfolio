import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import yosoku from "@/public/yosoku.png";
import pixnot from "@/public/pixnot.png";
import diostec from "@/public/diostec.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Engineering",
    location: "Jeppiaar Engineering College",
    description:
      "With a four-year bachelor's degree, numerous hackathon victories, and event leadership. Organized coding symposiums, conducted workshops, and managed a coding club.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "Back-End Developer",
    location: "AIOTY Labs, Chennai",
    description:
      "Proficient in Flask, MQTT, and implementing machine learning models (.mlmodel).",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2020 - Sep 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Guardian Link, Chennai",
    description:
      "Led the architecture and team NFT Analytics development using ReactJS, ExpressJS, Python, and AWS Lambda.",
    icon: React.createElement(FaReact),
    date: "2021 Oct - 2022 Jul",
  },
  {
    title: "Full-Stack Developer",
    location: "Orgware, Chennai",
    description:
      "Expertise in Next.js, ReactJS, ExpressJS, AWS and various databases. Managed project structure and ensured timely delivery.",
    icon: React.createElement(FaReact),
    date: "Aug 2022 - Nov 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Pixnot",
    description:
      "AI image, code, video, music generator and AI chat.",
    tags: [ "Next.js", "shadCN", "Tailwind", "Prisma", "cockroachDB", "clerkAuth"],
    imageUrl: pixnot,
  },
  {
    title: "Yosoku",
    description:
      "Harness predictive analytics to anticipate future stock values and deliver tailored user recommendations.",
    tags: ["React", "TypeScript", "ExpressJS", "MongoDB", "Tailwind", "AWS"],
    imageUrl: yosoku,
  },
  {
    title: "Diostec",
    description:
      "Job Placement static website",
    tags: [ "Next.js", "GSAP", "Tailwind", "FramerMotion"],
    imageUrl: diostec,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "ExpressJS",
  "NestJS",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Web3",
  "shadCN",
  "Python",
  "GSAP",
  "Framer Motion",
] as const;
