"use client";

import Modal from "@/components/modal";
import TextInput from "@/components/text-input";
import { env } from "@/lib/env";
import {
  contactInfo,
  containerVariants,
  itemVariants,
  socialLinks,
} from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { LucideSend } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { FormEvent, useRef, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null);
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const isValidate = formData.name && formData.email && formData.message;

    if (!isValidate) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        env.emailJsServiceId!,
        env.emailJsTemplateId!,
        formRef.current!,
        { publicKey: env.emailJsPublicKey },
      );

      setFormData({ name: "", message: "", email: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Error in submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="relative overflow-hidden px-6 py-24"
    >
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-blue-400 opacity-5 blur-3xl dark:bg-blue-500" />
        <div className="absolute right-1/4 bottom-40 h-80 w-80 rounded-full bg-purple-400 opacity-5 blur-3xl dark:bg-purple-500" />
      </motion.div>
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-10 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 text-sm tracking-widest text-gray-600 uppercase dark:text-gray-500"
          >
            Let's Connect
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-3xl font-light md:text-5xl"
          >
            Get in
            <span className="font-medium text-blue-500"> Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400"
          >
            Ready to start your next project? Let's discuss how we can bring
            your ideas to life
          </motion.p>
        </motion.div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-gray-200 bg-gray-50/80 p-8 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50 dark:backdrop-blur-sm"
            >
              <h3 className="mb-8 text-2xl font-medium">Send a message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <TextInput
                    value={formData.name}
                    name="name"
                    label="Your Name"
                    handleInputChange={(value) =>
                      handleInputChange("name", value)
                    }
                  />
                  <TextInput
                    value={formData.email}
                    type="email"
                    name="email"
                    label="Email Address"
                    handleInputChange={(value) =>
                      handleInputChange("email", value)
                    }
                  />
                </div>
                <TextInput
                  value={formData.message}
                  label="Your Message"
                  handleInputChange={(value) =>
                    handleInputChange("message", value)
                  }
                  textarea={true}
                  name="message"
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 py-4 text-sm font-medium tracking-wider text-white uppercase transition-all duration-300 hover:bg-blue-600 disabled:bg-blue-400"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="size-4 rounded-full border-2 border-white border-t-transparent"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <LucideSend className="size-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-2xl font-medium">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 rounded-xl bg-gray-50/50 p-4 transition-all duration-300 hover:bg-gray-100/50 dark:bg-gray-800/30 dark:hover:bg-gray-800/50"
                  >
                    <div className="rounded-lg bg-white p-3 dark:bg-gray-700">
                      <info.icon className="size-4 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-500">
                        {info.label}
                      </div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-xl font-medium">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    target="_blank"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    key={index}
                    href={social.href}
                    className={`flex items-center space-x-3 rounded-xl border border-gray-200 bg-white/80 p-4 transition-all duration-300 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-gray-600 ${social.color}`}
                  >
                    <social.icon className="size-5" />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {showSuccess && (
        <Modal
          show={showSuccess}
          title="Message Sent!"
          message="Thanks for reaching out! I'll get back to you within 24 hours."
          onClose={() => setShowSuccess(false)}
        />
      )}
      {showError && (
        <Modal
          show={showError}
          isSuccess={false}
          title="Missing Fields!"
          message="Please fill out all required fields!"
          onClose={() => setShowError(false)}
        />
      )}
    </section>
  );
};

export default Contact;
