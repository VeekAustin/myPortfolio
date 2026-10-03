"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-[#0d1117] px-4 pt-20 text-[#c9d1d9]"
    >
      <motion.div
        className="max-w-3xl text-center"
        variants={container}
        initial={reduce ? "show" : "hidden"}
        animate="show"
      >
        <motion.div
          variants={item}
          className="relative mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full ring-2 ring-[#238636] ring-offset-2 ring-offset-[#0d1117]"
        >
          <Image
            src="/myprofilepic.jpg"
            alt="Victor Augustine"
            fill
            sizes="112px"
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div variants={item} className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1a2e1e] bg[#0f1a11] px-4 py-1.5 text-sm text-[#8b949e]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#238636] opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h2 w-2 rounded-full bg-[#238636]" />
            </span>
            Open to fullstack, frontend and backend roles
          </div>
        </motion.div>
        <motion.h1
          variants={item}
          className="mb-4 text-5xl font-bold text[#f0f6fc] md:text-7xl"
        >
          Victor Augustine Inieke
        </motion.h1>
        <motion.h2
          variants={item}
          className="mb-6 text-2xl text-[#8b949e] md:text-3xl"
        >
          Fullstack Developer
        </motion.h2>
        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[#8b949e]"
        >
          I build full-stack web apps with React, Next.js, TypeScript, Node.js,
          prisma and MongoDB.
        </motion.p>
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#projects"
            className="rounded-full bg-[#238636] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#2ea043]"
          >
            View My Work
          </Link>
          <a
            href="/Victor-Augustine-Inieke-CV.pdf"
            download
            className="rounded-full border border[#30363d] px-8 py-3 font-semibold text-[#c9d1d9] transition-colors hover:border-[#238636] hover:text[#f0f6fc]"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}