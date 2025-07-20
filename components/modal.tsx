"use client";

import { LucideBug, LucideCheck, LucideSparkle, LucideX } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface IModalProps {
  show: boolean;
  title: string;
  message: string;
  isSuccess?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<IModalProps> = ({
  show,
  title,
  message,
  isSuccess = true,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <LucideX className="size-4" />
            </button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className={`mx-auto mb-6 flex size-16 items-center justify-center rounded-full ${isSuccess ? "bg-green-500" : "bg-red-500"}`}
            >
              {isSuccess ? (
                <LucideCheck className="size-6 text-white" />
              ) : (
                <LucideX className="size-6 text-white" />
              )}
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-2 text-2xl font-medium"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 text-gray-600 dark:text-gray-400"
            >
              {message}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              {isSuccess ? (
                <LucideSparkle className="size-5 text-yellow-500" />
              ) : (
                <LucideBug className="size-5" />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
