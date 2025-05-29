"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

// Grouped tech stack for better organization and full stack coverage
const techGroups = [
  {
    label: "Frontend",
    items: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="w-7 h-7 text-orange-500" />,
        desc: "Semantic, accessible markup for the modern web.",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="w-7 h-7 text-blue-500" />,
        desc: "Responsive, beautiful styling for every device.",
      },
      {
        name: "JavaScript",
        icon: <FaJs className="w-7 h-7 text-yellow-400" />,
        desc: "The language of the web, powering interactivity.",
      },
      {
        name: "React.js",
        icon: <FaReact className="w-7 h-7 text-cyan-400" />,
        desc: "Component-based UI for fast, scalable apps.",
      },
      {
        name: "Next.js",
        icon: (
          <SiNextdotjs className="w-7 h-7 text-neutral-900 dark:text-white" />
        ),
        desc: "Modern React framework for fast, scalable web apps.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-7 h-7 text-cyan-500" />,
        desc: "Utility-first CSS for rapid, beautiful UI development.",
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="w-7 h-7 text-purple-600" />,
        desc: "Popular CSS framework for responsive design.",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-7 h-7 text-blue-600" />,
        desc: "Typed superset of JavaScript for safer code.",
      },
    ],
  },
  {
    label: "Backend & Databases",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-7 h-7 text-green-600" />,
        desc: "Event-driven, non-blocking server runtime.",
      },
      {
        name: "Express.js",
        icon: (
          <SiExpress className="w-7 h-7 text-neutral-800 dark:text-white" />
        ),
        desc: "Minimal, flexible Node.js web application framework.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-7 h-7 text-green-500" />,
        desc: "NoSQL database for flexible, scalable data.",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-7 h-7 text-blue-700" />,
        desc: "Advanced open-source relational database.",
      },
      {
        name: "MySQL",
        icon: <DiMysql className="w-7 h-7 text-blue-500" />,
        desc: "Popular open-source SQL database.",
      },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into your goals, audience, and market to craft a winning plan.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    desc: "Wireframes, UI/UX, and interactive prototypes for rapid feedback.",
  },
  {
    step: "03",
    title: "Build & Launch",
    desc: "Agile development, pixel-perfect QA, and a seamless go-live.",
  },
  {
    step: "04",
    title: "Growth & Support",
    desc: "Ongoing optimization, analytics, and partnership for long-term success.",
  },
];

const TechStackSection = () => {
  return (
    <section
      id="tech"
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
          Technology & Approach
        </TextAnimate>
        <p className="mt-4 text-lg text-center text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
          Our stack and process are designed for speed, quality, and results.
        </p>
      </div>
      {/* Modern horizontal tech stack with pill cards and subtle separators */}
      <TooltipProvider>
        <div className="relative z-10 w-full max-w-5xl px-2 mx-auto flex flex-col gap-8 mb-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {techGroups.flatMap((group, gIdx) => [
              // Group label as a subtle separator
              gIdx !== 0 && (
                <div
                  key={`sep-${group.label}`}
                  className="hidden md:block w-0.5 h-10 bg-gradient-to-b from-blue-200 via-fuchsia-200 to-cyan-200 dark:from-blue-900 dark:via-fuchsia-900 dark:to-cyan-900 rounded-full opacity-60 mx-2"
                />
              ),
              ...group.items.map((tech, idx) => (
                <Tooltip key={tech.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: gIdx * 0.1 + idx * 0.04,
                        duration: 0.3,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 bg-white/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 rounded-full shadow px-4 py-2 hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer min-w-[110px]"
                    >
                      <span>{tech.icon}</span>
                      <span className="font-medium text-neutral-900 dark:text-white text-sm whitespace-nowrap">
                        {tech.name}
                      </span>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="max-w-xs text-xs text-neutral-700 dark:text-neutral-200"
                  >
                    {tech.desc}
                  </TooltipContent>
                </Tooltip>
              )),
            ])}
          </div>
        </div>
      </TooltipProvider>
      {/* Process timeline with connecting lines */}
      <div className="relative z-10 w-full max-w-4xl px-2 mx-auto flex flex-col gap-8 mt-10">
        <h3 className="text-xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-4 tracking-tight">
          Our Process
        </h3>
        <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          {/* Connecting line */}
          <div
            className="absolute md:top-1/2 md:left-0 md:right-0 md:h-1 md:w-full md:bg-gradient-to-r from-blue-200/60 via-fuchsia-200/40 to-cyan-200/40 dark:from-blue-900/30 dark:via-fuchsia-900/20 dark:to-cyan-900/20 rounded-full z-0 hidden md:block"
            style={{ top: "50%" }}
          />
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200/60 via-fuchsia-200/40 to-cyan-200/40 dark:from-blue-900/30 dark:via-fuchsia-900/20 dark:to-cyan-900/20 rounded-full z-0 md:hidden" />
          {process.map((p, idx) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.4, type: "spring" }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col items-center bg-white/95 dark:bg-neutral-900/95 border border-blue-100 dark:border-blue-900 rounded-xl shadow p-5 mx-1 min-h-[160px] relative z-10 group hover:scale-[1.03] hover:shadow-blue-200/60 hover:border-blue-400 transition-all duration-200"
            >
              {/* Step number with animated ring */}
              <div className="relative mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 via-fuchsia-400 to-cyan-400 flex items-center justify-center text-white font-extrabold text-base shadow-lg border-2 border-white dark:border-neutral-900 z-10">
                  {p.step}
                </div>
                <div className="absolute inset-0 rounded-full border border-blue-300 dark:border-blue-800 animate-pulse opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all" />
              </div>
              <span className="font-semibold text-neutral-900 dark:text-white text-base mb-1 text-center tracking-tight">
                {p.title}
              </span>
              <span className="text-xs text-neutral-600 dark:text-neutral-300 text-center leading-normal">
                {p.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
