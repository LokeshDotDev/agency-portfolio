"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "motion/react";
import Image from "next/image";

const team = [
  {
    name: "Ava Patel",
    role: "Founder & Creative Director",
    image: "https://picsum.photos/id/1027/300/300",
    bio: "Visionary leader with 12+ years in digital branding and UX. Loves bold ideas and beautiful execution.",
  },
  {
    name: "Liam Chen",
    role: "Lead Developer",
    image: "https://picsum.photos/id/1005/300/300",
    bio: "Full-stack expert and code perfectionist. Obsessed with performance, accessibility, and clean architecture.",
  },
  {
    name: "Sofia Rossi",
    role: "Senior Designer",
    image: "https://picsum.photos/id/1012/300/300",
    bio: "Award-winning designer with a passion for minimal, conversion-driven UI. Makes pixels sing.",
  },
  {
    name: "David Kim",
    role: "Strategy & Growth",
    image: "https://picsum.photos/id/1011/300/300",
    bio: "Growth strategist and analytics guru. Turns data into actionable insights and business wins.",
  },
];

const AboutTeamSection = () => {
  return (
    <section
      id="about"
      className="relative w-full py-32 flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Animated Magic UI background for the whole section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Aurora animated gradient */}
        <div className="absolute inset-0 w-full h-full animate-gradient-x bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-200 via-fuchsia-200 to-cyan-200 dark:from-blue-900 dark:via-fuchsia-900 dark:to-cyan-900 opacity-60 blur-2xl" />
        {/* Subtle animated grid overlay */}
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full opacity-30 dark:opacity-10 animate-pulse-slow"
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
      </div>
      <div className="mb-12 relative z-10">
        <TextAnimate
          as="h2"
          animation="fadeIn"
          className="text-5xl font-extrabold text-center tracking-tight"
        >
          About Us
        </TextAnimate>
        <p className="mt-4 text-lg text-center text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
          Meet the team behind your next big success. We blend creativity,
          technology, and strategy to deliver world-class results.
        </p>
      </div>
      {/* Team grid */}
      <div className="relative z-10 w-full max-w-6xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.6,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="group flex flex-col items-center bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl p-8 backdrop-blur-lg hover:scale-[1.04] hover:shadow-blue-200/60 hover:border-blue-400 transition-all duration-300 relative overflow-hidden"
          >
            {/* Magic UI accent bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 rounded-b-full blur-sm opacity-70" />
            {/* Avatar */}
            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="96px"
                priority={idx === 0}
              />
            </div>
            {/* Name & Role */}
            <div className="flex flex-col items-center mt-2 mb-2">
              <span className="font-bold text-neutral-900 dark:text-white text-lg">
                {member.name}
              </span>
              <span className="text-sm text-blue-500 dark:text-blue-400 font-semibold">
                {member.role}
              </span>
            </div>
            {/* Bio */}
            <p className="text-sm text-center text-neutral-600 dark:text-neutral-300 mt-2">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeamSection;
