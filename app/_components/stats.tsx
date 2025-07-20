"use client";

import { containerVariants, itemVariants, stats } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, {
    once: true,
    amount: "some",
  });

  return (
    <motion.div
      id="stats"
      ref={statsRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="my-5 flex flex-wrap justify-center gap-12 lg:gap-36 xl:gap-44"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex flex-col items-center gap-3"
        >
          <div className="text-lg text-blue-500 md:text-xl lg:text-2xl">
            {stat.number}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stats;
