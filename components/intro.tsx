"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpeg"
              alt="profile"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.1,
              duration: 0.3,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Christian.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">data driven apps</span>. My focus is{" "}
        <span className="underline">React | Node | Express | Mongo</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row gap-2 justify-center items-center px-4 font-medium text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 flex items-center gap-2 shadow-sm rounded-full text-white px-7 py-3 outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 active:bg-gray-900 transition-all"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/ChristianStanderCV.pdf"
          className="group bg-white px-7 py-3 flex items-center gap-2 shadow-sm rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition-all cursor-pointer borderBlack dark:bg-white/10"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-0.5" />
        </a>
        <a
          href="https://www.linkedin.com/in/christian-stander-310818276/"
          target="_blank"
          className="bg-white text-gray-700 px-4 py-4 flex items-center gap-2 shadow-sm rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/MrShifu01"
          target="_blank"
          className="bg-white text-gray-700 px-4 py-4 flex items-center gap-2 shadow-sm rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
