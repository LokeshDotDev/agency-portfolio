"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  LucideShoppingCart,
  LucideBarChart3,
  LucideBrush,
  LucideCloudUpload,
} from "lucide-react";
import { GridPattern } from "@/components/magicui/grid-pattern";

const caseStudies = [
  {
    title: "E-Commerce Platform",
    image: null,
    description:
      "A scalable online store with real-time inventory, payments, and analytics.",
    tags: ["Next.js", "Stripe", "Vercel"],
    icon: (
      <LucideShoppingCart className="w-10 h-10 text-blue-500 group-hover:text-cyan-400 transition-colors" />
    ),
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    image: null,
    description:
      "A beautiful analytics dashboard for SaaS founders to track growth.",
    tags: ["React", "Tailwind", "Chart.js"],
    icon: (
      <LucideBarChart3 className="w-10 h-10 text-fuchsia-500 group-hover:text-pink-400 transition-colors" />
    ),
    link: "#",
  },
  {
    title: "Brand Website Redesign",
    image: null,
    description:
      "A bold new look for a global brand, boosting engagement by 40%.",
    tags: ["UI/UX", "Branding", "SEO"],
    icon: (
      <LucideBrush className="w-10 h-10 text-yellow-400 group-hover:text-orange-400 transition-colors" />
    ),
    link: "#",
  },
  {
    title: "Cloud Migration",
    image: null,
    description:
      "Seamless migration of legacy systems to the cloud for a fintech client.",
    tags: ["DevOps", "AWS", "Automation"],
    icon: (
      <LucideCloudUpload className="w-10 h-10 text-green-400 group-hover:text-teal-400 transition-colors" />
    ),
    link: "#",
  },
];

const CaseStudiesSection = () => {
  return (
    <section
      id="portfolio"
      className="relative w-full py-32 flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Animated conic gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full animate-spin-slow bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-400 via-fuchsia-500 to-teal-400 opacity-40 blur-2xl" />
      </div>
      {/* SVG grid overlay */}
      <GridPattern
        className="absolute inset-0 z-0 opacity-60 dark:opacity-30 pointer-events-none"
        width={56}
        height={56}
        x={-1}
        y={-1}
      />
      <div className="mb-12 relative z-10">
        <TextAnimate
          as="h2"
          animation="fadeIn"
          className="text-5xl font-extrabold text-center tracking-tight"
        >
          Case Studies
        </TextAnimate>
        <p className="mt-4 text-lg text-center text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
          Real results, real impact. Explore how we solve business challenges
          for our clients.
        </p>
      </div>
      {/* Premium 2-column grid layout */}
      <div className="relative z-10 w-full max-w-5xl px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {caseStudies.map((cs) => (
          <div
            key={cs.title}
            className="group relative bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl p-8 flex flex-col gap-4 backdrop-blur-lg overflow-hidden hover:scale-[1.025] transition-transform duration-300"
            style={{ minHeight: 320 }}
          >
            {/* Magic UI accent bar */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-teal-400 rounded-t-3xl animate-gradient-x" />
            {/* Icon/Logo */}
            <div className="flex items-center justify-center mb-2">
              <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center shadow-md">
                {cs.icon}
              </div>
            </div>
            {/* Title */}
            <h3 className="text-2xl font-extrabold text-center text-neutral-900 dark:text-white tracking-tight mb-1">
              {cs.title}
            </h3>
            {/* Description */}
            <p className="text-neutral-600 dark:text-neutral-300 text-center mb-2 text-base leading-relaxed">
              {cs.description}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-neutral-200 text-neutral-700 text-xs font-semibold dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* CTA Button */}
            <div className="flex justify-center mt-auto">
              <a
                href={cs.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`View Project: ${cs.title}`}
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
