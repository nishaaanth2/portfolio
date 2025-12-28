import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import yosoku from "@/public/yosoku.png";
import pixnot from "@/public/pixnot.png";
import diostec from "@/public/diostec.png";
import unknown from "@/public/unknown.webp";
import wordanalytics from "@/public/wordanalytics.png";
import barrontechserve from "@/public/btsScreenshot.png";
import nftgdp from "@/public/NFTGDP_first_frame.jpg";
import aladdyn from "@/public/Aladdyn.jpeg";
import kittymagic from "@/public/km.png";
import wedlink from "@/public/wedlink.png";
import railwayRuleClarifier from "@/public/Railway Rule Clarifier AI.jpeg";

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
    title: "Senior Architect & Lead Developer",
    location: "ADRIG AI Technologies Pvt. Ltd, Chennai",
    description:
      "Leading full-stack development of scalable SaaS platforms. Specializing in AI-driven workflows, microservices architecture, and real-time business messaging automation.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 – Present",
  },
  {
    title: "Freelancer",
    location: "Remote",
    description:
      "Helping startup companies grow their business together. Providing technical expertise and development services to support business growth and innovation.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 – Present",
  },
  {
    title: "Full Stack Developer",
    location: "Orgware Tech, Chennai",
    description:
      "Developed and maintained full-stack applications using Next.js, ReactJS, ExpressJS, and various databases. Managed project structure and ensured timely delivery.",
    icon: React.createElement(FaReact),
    date: "Aug 2022 – Nov 2023",
  },
  {
    title: "Full Stack Developer",
    location: "Guardian Link, Chennai",
    description:
      "Led the architecture and development of NFT Analytics platforms using ReactJS, ExpressJS, Python, and AWS Lambda.",
    icon: React.createElement(FaReact),
    date: "Oct 2021 – Jul 2022",
  },
  {
    title: "Backend Developer",
    location: "AIOTY Labs, Chennai",
    description:
      "Developed backend services using Flask, MQTT, and implemented machine learning models (.mlmodel) for real-time data processing.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2020 – Sep 2021",
  },
  {
    title: "B.E Computer Science",
    location: "Jeppiaar Engineering College",
    description:
      "Bachelor's degree in Computer Science with 7.62 CGPA. Participated in hackathons, organized coding symposiums, conducted workshops, and managed coding club activities.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 – 2021",
  },
  {
    title: "Higher Secondary (CBSE)",
    location: "Velammal Vidhyashram",
    description:
      "Completed Higher Secondary education with 66.4% marks.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
] as const;

export const projectsData = [
  {
    title: "Aladdyn",
    description:
      "SaaS platform connecting AI agents to business messaging channels (WhatsApp, Email, Instagram). Enables automation and scaling of customer support conversations.",
    tags: ["Vite", "Express.js", "Microservices", "PostgreSQL", "Prisma ORM", "Mail Server", "MCP", "RAG"],
    imageUrl: aladdyn,
    url: "https://aladdyn.io",
  },
  {
    title: "Kitty Magic",
    description:
      "Real-time chat microservice for event organization and group interactions with Socket.io integration.",
    tags: ["Express.js", "Socket.io", "PostgreSQL", "Prisma"],
    imageUrl: kittymagic,
  },
  {
    title: "Barron Tech Serve",
    description:
      "Mobile app for employee tracking with live GPS dashboard. Managed as Project Manager, Team Lead, and Developer. Features real-time location tracking, trip management, and location-based expense calculation.",
    tags: [ "Android", "Real-time Tracking", "GPS", "Admin Panel", "Express.js", "MongoDB"],
    imageUrl: barrontechserve,
  },
  {
    title: "Stock Price Prediction Web",
    description:
      "Predictive analytics platform with personalized stock recommendations and real-time data processing.",
    tags: ["React", "Tailwind", "Express", "MongoDB", "AWS EC2", "Vercel"],
    imageUrl: yosoku,
  },
  {
    title: "Wedlink",
    description:
      "Boutique wedding design studio website for creating timeless wedding invitations. Features elegant designs for modern romantics, showcasing collections, services, and custom invitation design options.",
    tags: ["Next.js", "TailwindCSS", "lenis"],
    imageUrl: wedlink,
  },
  {
    title: "Railway Rule Clarifier AI",
    description:
      "Southern Railway rule book website with multiple interlinked chapters, OCR processing, and AI-powered knowledge support bot. Features comprehensive rule navigation, document extraction, and interactive Q&A system for railway regulations.",
    tags: ["Next.js", "PostgreSQL", "Tesseract OCR"],
    imageUrl: railwayRuleClarifier,
  },
  {
    title: "NFTGDP",
    description:
      "Multi-chain NFT analytics pipeline providing insights and data aggregation across multiple blockchain networks.",
    tags: ["Python", "AWS Lambda", "MongoDB"],
    imageUrl: nftgdp,
  },
  {
    title: "AI OCR Service",
    description:
      "OCR extraction service using GPT with serverless processing for document analysis and data extraction.",
    tags: ["Next.js", "Auth0", "AWS Lambda", "AWS EC2"],
    imageUrl: unknown,
  },
  {
    title: "NFT LENS",
    description:
      "Multi-chain NFT scanner backend with real-time monitoring and ML-based analysis capabilities.",
    tags: ["Flask", "MQTT", "ML model"],
    imageUrl: unknown,
  },
] as const;

export const skillsData = [
  "Next.js",
  "React.js",
  "TailwindCSS",
  "ShadCN UI",
  "Node.js",
  "Express.js",
  "Python",
  "Flask",
  "FastAPI",
  "REST APIs",
  "WebSockets",
  "PostgreSQL",
  "MongoDB",
  "Prisma ORM",
  "AWS EC2",
  "AWS S3",
  "AWS Lambda",
  "Docker",
  "CI/CD",
  "Linux",
  "RAG",
  "OCR",
  "MCP",
  "Socket.io",
  "MQTT",
] as const;
