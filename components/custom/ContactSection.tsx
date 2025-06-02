"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative w-full py-32 flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Animated Magic UI background for the whole section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Aurora gradient animation */}
        <div className="absolute inset-0 w-full h-full animate-gradient-x bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-200 via-fuchsia-200 to-cyan-200 dark:from-blue-900 dark:via-fuchsia-900 dark:to-cyan-900 opacity-60 blur-2xl" />
        {/* Subtle grid pattern overlay */}
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full opacity-30 dark:opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Spinning globe accent */}
        <Image
          src="/globe.svg"
          alt="Contact background"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-30 dark:opacity-10 blur-[2px] select-none pointer-events-none animate-spin-slow"
          draggable="false"
          width={420}
          height={420}
          priority
        />
      </div>
      <div className="mb-12 relative z-10">
        <TextAnimate
          as="h2"
          animation="fadeIn"
          className="text-5xl font-extrabold text-center tracking-tight"
        >
          Contact Us
        </TextAnimate>
        <p className="mt-4 text-lg text-center text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
          Make it easy for clients to reach out. We usually respond within 24
          hours.
        </p>
      </div>
      {/* Animated glassy card for the form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl p-0 overflow-hidden backdrop-blur-xl"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative z-10 p-10 flex flex-col gap-6"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-2 animate-bounce">🎉</div>
              <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Thank you! We will be in touch soon.
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-semibold text-neutral-800 dark:text-neutral-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-semibold text-neutral-800 dark:text-neutral-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                  placeholder="you@email.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-semibold text-neutral-800 dark:text-neutral-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-800/80 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <Button
                type="submit"
                className="mt-2 w-full text-base font-bold rounded-xl shadow-lg bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 animate-gradient-x"
              >
                Send Message
              </Button>
            </>
          )}
        </motion.div>
      </motion.form>
    </section>
  );
};

export default ContactSection;
