"use client";

import {
  containerVariants,
  imageVariants,
  itemVariants,
  socialLinks,
  textVariants,
} from "@/lib/utils";
import { LucideArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="min-h-screen transition-all duration-500">
      <motion.section
        id="hero"
        className="relative flex min-h-screen items-center justify-center px-6 pt-5"
        style={{ y: heroY }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 h-64 w-64 rounded-full bg-blue-400 opacity-10 blur-3xl dark:bg-blue-500"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 h-48 w-48 rounded-full bg-purple-400 opacity-10 blur-3xl dark:bg-purple-500"
          />
        </div>

        <div className="z-10 mx-auto mt-10 w-full max-w-7xl">
          <MobileHero />
          <DesktopHero />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        >
          <LucideArrowDown className="size-5 text-gray-400 dark:text-gray-600" />
        </motion.div>
      </motion.section>
    </div>
  );
};

const DesktopHero = () => {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-left"
      >
        <motion.div
          variants={textVariants}
          className="mb-6 text-sm tracking-widest text-gray-600 uppercase dark:text-gray-500"
        >
          Front End Developer
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="mb-8 text-5xl leading-tight font-light xl:text-7xl"
        >
          <span className="text-gray-900 dark:text-white">
            Building digital
          </span>
          <br />
          <span className="font-medium text-blue-500">experiences</span>
          <br />
          <span className="text-gray-900 dark:text-white">that matter</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mb-12 max-w-lg text-xl leading-relaxed font-light text-gray-600 dark:text-gray-400"
        >
          I craft beautiful, functional web applications with modern
          technologies and thoughtful user experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="mb-8 flex gap-6">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-blue-500 px-8 py-4 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 hover:bg-blue-600"
          >
            View Work
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-gray-300 px-8 py-4 text-sm font-medium tracking-wider text-gray-700 uppercase transition-all duration-300 hover:border-gray-400 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 flex gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              whileHover={{ y: -3, scale: 1.1 }}
              className="rounded-full p-3 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        className="flex justify-center lg:justify-end"
      >
        <div className="relative">
          <motion.div
            variants={itemVariants}
            className="absolute -top-16 -left-28 flex items-center gap-8 text-xs tracking-widest uppercase"
          >
            <span className="text-gray-500 dark:text-gray-600">React</span>
            <span className="text-gray-400 dark:text-gray-700">.</span>
            <span className="text-gray-500 dark:text-gray-600">TypeScript</span>
            <span className="text-gray-400 dark:text-gray-700">.</span>
            <span className="text-gray-500 dark:text-gray-600">Next</span>
            <span className="text-gray-400 dark:text-gray-700">.</span>
            <span className="text-gray-500 dark:text-gray-600">Prisma</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="h-96 w-80 overflow-hidden rounded-3xl border-4 border-gray-300 shadow-2xl dark:border-gray-800"
          >
            <img
              src="/mohammad-fallah.jpg"
              alt="Mohammad Fallah"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-4 rounded-3xl border border-blue-500/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-8 rounded-3xl border border-purple-500/10"
          />
        </div>
      </motion.div>
    </div>
  );
};

const MobileHero = () => {
  return (
    <div className="block lg:hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center"
      >
        <motion.div variants={imageVariants} className="mb-8">
          <div className="relative mx-auto h-32 w-32">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-32 w-full overflow-hidden rounded-2xl border-4 border-gray-300 shadow-2xl dark:border-gray-800"
            >
              <img
                src="/mohammad-fallah.jpg"
                alt="Mohammad Fallah"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-2 rounded-2xl border border-blue-500/20"
            />
          </div>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="mb-4 text-sm tracking-widest text-gray-600 uppercase dark:text-gray-500"
        >
          Front End Developer
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-6 text-3xl leading-tight font-light md:text-5xl"
        >
          <span className="text-gray-900 dark:text-white">
            Building digital
          </span>
          <span className="ml-2 font-medium text-blue-500">experiences</span>
          <br />
          <span className="text-gray-900 dark:text-white">that matter</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-8 max-w-xl text-base leading-relaxed font-light text-gray-600 md:text-lg dark:text-gray-400"
        >
          I craft beautiful, functional web applications with modern
          technologies and thoughtful user experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-blue-500 px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 hover:bg-blue-600"
          >
            View Work
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-gray-300 px-8 py-3 text-sm font-medium tracking-wider text-gray-700 uppercase transition-all duration-300 hover:border-gray-400 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              whileHover={{ y: -3, scale: 1.1 }}
              className="rounded-full p-3 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-widest uppercase"
        >
          <span className="text-gray-500 dark:text-gray-600">React</span>
          <span className="text-gray-400 dark:text-gray-700">.</span>
          <span className="text-gray-500 dark:text-gray-600">TypeScript</span>
          <span className="text-gray-400 dark:text-gray-700">.</span>
          <span className="text-gray-500 dark:text-gray-600">Next</span>
          <span className="text-gray-400 dark:text-gray-700">.</span>
          <span className="text-gray-500 dark:text-gray-600">Prisma</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
