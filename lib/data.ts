import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shifuWatches from "@/public/project1.jpg";
import shifuBookings from "@/public/project2.jpg";
import fullStackCrm from "@/public/project3.jpg";

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
    title: "Full-Stack Developer",
    location: "South Africa",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, JavaScript, Bootstrap, Node.js and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Graduated bootcamp",
    location: "HyperionDev, South Africa",
    description:
      "At Hyperion Dev's Full Stack Web Developer Bootcamp, I gained a versatile skill set in web development. I mastered front-end technologies like HTML, JavaScript, and CSS, using React.js and Next.js for dynamic websites.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Graduated BSc Data Science",
    location: "Sol Plaatje, South Africa",
    description:
      "I hold a Bachelor of Science in Data Science, equipping me with versatile skills to tackle complex challenges in the data-driven world. Proficient in Python, R, MATLAB, and Git, I specialize in developing scalable solutions for data analysis and manipulation.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Finance manager",
    location: "LMG Microfinance, South Africa",
    description:
      "Over the years, I gained extensive hands-on experience in diverse business areas, including administration, data management, debt collection, and staff management.",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Shifu Watches",
    description:
      "A Comprehensive Ecommerce website that has full admin capabilites, PayPal integration and Cart features.",
    tags: ["React", "Node.js", "MongoDB", "Bootstrap", "Express"],
    imageUrl: shifuWatches,
  },
  {
    title: "Shifu Bookings",
    description:
      "This Airbnb clone is built using the MERN stack, learnt to use the S3 buckets in AWS for storing the uploaded photos.",
    tags: ["React", "Node.js", "Express", "AWS", "Redux"],
    imageUrl: shifuBookings,
  },
  {
    title: "Full Stack CRM",
    description:
      "The system is designed to facilitate the management of client information and loan records for a cash loans business.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    imageUrl: fullStackCrm,
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
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "Redux",
  "React Query",
  "JWT",
  "Express",
  "React Email",
  "Python",
  "Pandas",
  "Framer Motion",
] as const;
