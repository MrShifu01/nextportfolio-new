"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
    ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6,
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="underline">passionate</span>{" "}
        <strong>full stack web developer</strong> and{" "}
        <strong>data scientist</strong> from South Africa. Over the past decade,
        I've been involved in entrepreneurship and have designed websites for
        various ventures.
      </p>
      <p>
        Around four years ago, I discovered my deep{" "}
        <span className="underline">love</span> for programming, which led me to
        excel in my <span className="italic">Data Science Degree</span> and
        complete a rigorous <span className="italic">Full Stack Bootcamp</span>.
        With a strong foundation in both disciplines, I'm now ready to take on
        larger projects and continuously expand my skills in pursuit of
        innovative solutions.
      </p>
      <br/>
      <p>
        As I reflect on my journey, I'm proud of the challenges I've overcome and the expertise I've cultivated. Collaborating with diverse teams and solving real-world problems have been paramount to my growth. I'm eager to leverage my skills and experiences to create impactful solutions, and I'm always on the lookout for new challenges and opportunities to learn and innovate.
      </p>
    </motion.section>
  );
}
