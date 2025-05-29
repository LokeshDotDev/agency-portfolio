"use client";
import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  LucideMonitor,
  LucidePalette,
  LucideRocket,
  LucideCloud,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, scalable websites and web apps tailored to your business needs.",
    icon: (
      <LucideMonitor className="w-12 h-12 text-blue-500 group-hover:text-cyan-400 transition-colors" />
    ),
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, user-centric interfaces that delight and convert.",
    icon: (
      <LucidePalette className="w-12 h-12 text-pink-500 group-hover:text-fuchsia-400 transition-colors" />
    ),
    color: "from-pink-500 to-fuchsia-400",
  },
  {
    title: "Branding & Strategy",
    description: "Build a memorable brand and a winning digital strategy.",
    icon: (
      <LucideRocket className="w-12 h-12 text-yellow-400 group-hover:text-orange-400 transition-colors" />
    ),
    color: "from-yellow-400 to-orange-400",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploy, scale, and manage your digital products with confidence.",
    icon: (
      <LucideCloud className="w-12 h-12 text-green-400 group-hover:text-teal-400 transition-colors" />
    ),
    color: "from-green-400 to-teal-400",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      <Spotlight />
      <div className="relative z-10 mb-12">
        <TextAnimate
          as="h2"
          animation="fadeIn"
          className="text-5xl font-extrabold text-center tracking-tight"
        >
          Our Services
        </TextAnimate>
        <p className="mt-4 text-lg text-center text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
          We deliver end-to-end digital solutions for ambitious brands and
          startups.
        </p>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl px-4">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            whileHover={{
              y: -16,
              scale: 1.05,
              boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.18)",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            className="group relative flex flex-col items-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-2xl border border-neutral-200/60 dark:border-neutral-800/60 rounded-3xl shadow-2xl p-8 min-h-[380px] overflow-hidden hover:border-primary/40"
          >
            <div
              className={`absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br ${service.color} rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition`}
            />
            <div
              className={`flex items-center justify-center w-24 h-24 rounded-2xl bg-white/80 dark:bg-neutral-950/80 shadow-lg mb-6 border-4 border-white dark:border-neutral-900 transition-all duration-300 group-hover:scale-105`}
            >
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center text-neutral-900 dark:text-white drop-shadow-lg">
              {service.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-center mb-8 text-base leading-relaxed">
              {service.description}
            </p>
            <Button
              variant="secondary"
              className="mt-auto group-hover:scale-110 transition-transform font-semibold px-6 py-2 rounded-full shadow-md bg-gradient-to-r from-primary/80 to-blue-400/80 text-white border-0"
            >
              Learn More
            </Button>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-60" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
