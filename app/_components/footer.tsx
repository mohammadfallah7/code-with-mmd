"use client";

import Container from "@/components/container";
import { containerVariants, itemVariants, socialLinks } from "@/lib/utils";
import { Code2, LucideArrowUp, LucideHeart } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, {
    once: true,
    margin: "-50px",
  });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      <AnimatedGradientLine isInView={isInView} />
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute bottom-10 left-1/4 size-64 rounded-full bg-blue-400 opacity-5 blur-3xl dark:bg-blue-500" />
        <div className="absolute top-10 right-1/3 size-48 rounded-full bg-purple-400 opacity-5 blur-3xl dark:bg-purple-500" />
      </motion.div>
      <Container>
        <div className="relative z-10 py-16">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8 text-center"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 text-2xl font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-blue-500"
                >
                  <Code2 className="size-6" />
                </motion.div>
                <span>Mohammad Fallah</span>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="mx-auto max-w-md text-sm text-gray-600 dark:text-gray-400"
              >
                Crafting digital experiences with passion, precision, and a
                touch of magic
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  target="_blank"
                  href={social.href}
                  className={`rounded-full bg-gray-100/50 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-200/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-4"
            >
              <div className="h-px w-16 bg-gray-300 dark:bg-gray-700" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-500"
              >
                <LucideHeart className="size-4 fill-red-500 text-red-500" />
              </motion.div>
              <div className="h-px w-16 bg-gray-300 dark:bg-gray-700" />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-500">
                &copy; {new Date().getFullYear()} CodeWithMMD. All right
                reserved.
              </p>
              <p className="text-xs text-gray-700 dark:text-gray-600">
                Built with Nextjs
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 rounded-full border border-gray-300 bg-gray-100/50 px-4 py-2 text-sm font-medium text-gray-600 backdrop-blur-sm transition-all duration-300 hover:bg-gray-200/50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-white"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LucideArrowUp className="size-5" />
                <span>Back to top</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};

const AnimatedGradientLine = (isInView: { isInView: boolean }) => {
  return (
    <div className="absolute top-0 left-0 h-px w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        animate={isInView ? { opacity: 1, width: "100%" } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:from-transparent dark:via-blue-500 dark:to-transparent"
      />
      <motion.div
        animate={{ x: ["-50%", "calc(100vw + 50%)"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 6,
            ease: "linear",
            delay: 1,
          },
        }}
        className="absolute top-0 h-px w-32 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 blur-sm dark:from-blue-400 dark:via-purple-500 dark:to-blue-400"
      />
    </div>
  );
};

export default Footer;
