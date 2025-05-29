"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "motion/react";
import Image from "next/image";

const testimonials = [
	{
		name: "Sarah Lee",
		role: "CMO, Fintech Startup",
		image: "https://picsum.photos/id/1011/200/200",
		quote:
			"The team delivered beyond our expectations. Our revenue grew 2x in just 6 months!",
	},
	{
		name: "James Carter",
		role: "Founder, SaaS Company",
		image: "https://picsum.photos/id/1012/200/200",
		quote:
			"Their design and development process is world-class. We felt like true partners.",
	},
	{
		name: "Priya Singh",
		role: "Head of Marketing, E-Commerce",
		image: "https://picsum.photos/id/1015/200/200",
		quote:
			"We saw a 40% boost in engagement after our website relaunch. Highly recommended!",
	},
];

const TestimonialsSection = () => {
	return (
		<section
			id="testimonials"
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
					Testimonials
				</TextAnimate>
				<p className="mt-4 text-lg text-center text-neutral-500 dark:text-neutral-300 max-w-2xl mx-auto">
					Build trust with real client feedback.
				</p>
			</div>
			{/* Modern testimonial cards with accent and glassmorphism */}
			<div className="relative z-10 w-full max-w-5xl px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
				{testimonials.map((t, idx) => (
					<motion.div
						key={t.name}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.1, duration: 0.6, type: "spring" }}
						viewport={{ once: true }}
						className="group flex flex-col items-center bg-white/70 dark:bg-neutral-900/70 border border-blue-100 dark:border-blue-900 rounded-3xl shadow-2xl p-10 backdrop-blur-xl hover:scale-[1.04] hover:shadow-blue-200/60 hover:border-blue-400 transition-all duration-300 relative overflow-hidden"
					>
						{/* Magic UI accent bar */}
						<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-cyan-400 rounded-b-full blur-sm opacity-70" />
						{/* Avatar */}
						<div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
							<Image
								src={t.image}
								alt={t.name}
								fill
								className="object-cover"
								sizes="80px"
								priority={idx === 0}
							/>
						</div>
						{/* Quote */}
						<blockquote className="text-lg italic text-center text-neutral-800 dark:text-neutral-100 mb-4 relative z-10">
							<span className="text-3xl text-blue-400 font-serif leading-none align-top mr-1">
								“
							</span>
							{t.quote}
							<span className="text-3xl text-blue-400 font-serif leading-none align-bottom ml-1">
								”
							</span>
						</blockquote>
						{/* Name & Role */}
						<div className="flex flex-col items-center mt-2">
							<span className="font-bold text-neutral-900 dark:text-white text-base">
								{t.name}
							</span>
							<span className="text-sm text-neutral-500 dark:text-neutral-400">
								{t.role}
							</span>
						</div>
					</motion.div>
				))}
			</div>
			{/* Reminder for next.config.js */}
			<div className="mt-12 text-center text-sm text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
				{/* next.config.js must allow external images from picsum.photos */}
				{/* Add this to your next.config.js: */}
				{/* images: { */}
				{/*   domains: ["picsum.photos"], */}
				{/* } */}
			</div>
		</section>
	);
};

export default TestimonialsSection;
