import { motion } from "framer-motion";
import { Globe, Mail, MapPin } from "lucide-react";
import { siGithub } from "simple-icons";
import { personalInfo } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const childVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<section className="relative overflow-hidden py-16 md:py-24">
			<div className="relative z-10 container mx-auto max-w-4xl px-6 md:px-4">
				<motion.div
					className="mb-8 flex flex-col justify-between md:flex-row md:items-center"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<div className="text-center md:text-left">
						<motion.h1
							className="mb-2 text-4xl font-bold"
							variants={childVariants}
						>
							{personalInfo.name}{" "}
							<span className="inline-block animate-pulse">✨</span>
						</motion.h1>

						<motion.p
							className="text-muted-foreground mb-6 text-xl"
							variants={childVariants}
						>
							Software Engineer 👨‍💻
						</motion.p>

						<motion.div
							className="flex flex-col items-center gap-2 md:items-start"
							variants={containerVariants}
						>
							<motion.div
								className="text-muted-foreground flex items-center text-sm"
								variants={childVariants}
								whileHover={{ scale: 1.05, color: "#4b5563" }}
							>
								<MapPin className="mr-2 h-4 w-4" />📍 {personalInfo.location}
							</motion.div>

							<motion.a
								href={`mailto:${personalInfo.email}`}
								className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
								variants={childVariants}
								whileHover={{ scale: 1.05, color: "#4b5563" }}
							>
								<Mail className="mr-2 h-4 w-4" />📧 {personalInfo.email}
							</motion.a>

							<motion.a
								href={personalInfo.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
								variants={childVariants}
								whileHover={{ scale: 1.05, color: "#4b5563" }}
							>
								<svg
									role="img"
									viewBox="0 0 24 24"
									className="mr-2 h-4 w-4"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>GitHub</title>
									<path d={siGithub.path} />
								</svg>
								🌟 GitHub
							</motion.a>

							<motion.a
								href={personalInfo.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
								variants={childVariants}
								whileHover={{ scale: 1.05, color: "#4b5563" }}
							>
								<svg
									role="img"
									viewBox="0 0 24 24"
									className="mr-2 h-4 w-4"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>LinkedIn</title>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
								🔗 LinkedIn
							</motion.a>

							<motion.a
								href={`https://${personalInfo.portfolio}`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
								variants={childVariants}
								whileHover={{ scale: 1.05, color: "#4b5563" }}
							>
								<Globe className="mr-2 h-4 w-4" />🌐 Portfolio
							</motion.a>
						</motion.div>
					</div>

					<motion.div
						className="mt-6 flex justify-center md:mt-0"
						variants={childVariants}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<div className="relative">
							<div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 opacity-30 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
							<img
								src="/profile.jpeg"
								alt="Profile"
								className="relative w-48 rounded-full ring-2 ring-green-500/50 md:w-60"
								style={{ objectFit: "cover" }}
							/>
						</div>
					</motion.div>
				</motion.div>

				<MotionWrapper>
					<div className="rounded-lg border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-green-500/10">
						<p className="text-muted-foreground relative mb-4 py-2 pl-4">
							<span className="absolute top-0 left-0 h-full w-1 rounded-full bg-gradient-to-b from-green-500 to-emerald-500"></span>
							🚀 Software Engineer with {new Date().getFullYear() - 2020}+ years
							of experience designing, building, and deploying scalable web
							applications, APIs, and business-critical systems across
							healthcare, logistics, and e-commerce industries. Experienced in
							full-stack development using Ruby on Rails, React, Next.js, .NET,
							and FastAPI, with strong expertise in PostgreSQL, MySQL, AWS,
							Azure, and GCP. Proven track record delivering end-to-end
							solutions including payment integrations, real-time systems,
							dashboards, ERP integrations, workflow automation, and AI-powered
							features that improve operational efficiency, reliability, and
							user experience. Skilled at leveraging modern AI tools and
							automation workflows to accelerate development and enhance product
							capabilities.
						</p>
					</div>
				</MotionWrapper>
			</div>
		</section>
	);
}
