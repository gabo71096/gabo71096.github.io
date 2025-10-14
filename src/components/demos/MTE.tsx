import { motion } from "framer-motion";
import MotionWrapper from "../MotionWrapper";
import { Images, Info, Layers } from "lucide-react";
import mteLogo from "@/images/mte/mte-logo.png";
import admin from "@/images/mte/admin.png";
import chat from "@/images/mte/chat.png";
import index from "@/images/mte/index.png";
import landing from "@/images/mte/landing.png";
import notebook from "@/images/mte/notebook.png";
import { ImageZoom } from "../ui/shadcn-io/image-zoom";
import { Marquee, MarqueeContent, MarqueeItem } from "../ui/shadcn-io/marquee";

export default function MTE() {
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
	const carouselImgs = [admin, chat, index, landing, notebook];

	return (
		<>
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
								Mama, Te Entiendo
							</motion.h1>
							<motion.p
								className="text-muted-foreground text-xl"
								variants={childVariants}
							>
								A mental health application designed to support mothers in the
								postpartum period.
							</motion.p>
						</div>

						<motion.div
							className="mt-6 flex justify-center md:mt-0"
							variants={childVariants}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<img
								src={mteLogo.src}
								alt="Mama, Te Entiendo Logo"
								className="w-48 md:w-60"
								style={{ objectFit: "cover" }}
							/>
						</motion.div>
					</motion.div>
				</div>
			</section>
			<section>
				<div className="container mx-auto max-w-4xl px-6 md:px-4">
					<MotionWrapper>
						<h2 className="mb-8 flex items-center text-center text-2xl font-bold md:text-left">
							<motion.span
								className="mr-2 inline-block"
								initial={{ rotate: 0 }}
								whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
								transition={{ duration: 0.5, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<Info color="purple" />
							</motion.span>{" "}
							About
						</h2>
					</MotionWrapper>
					<motion.div
						className="mt-3 mb-8 rounded-lg border border-purple-500/20 bg-purple-50/80 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-purple-500/10 dark:bg-purple-900/10"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<p className="text-sm leading-7 text-muted-foreground md:text-base">
							Mama, Te Entiendo was created to support mothers in the tender but
							also difficult months after birth. It offers a safe space to learn
							from evidence-informed content and real stories, reflect through
							gentle tasks, and connect directly with a licensed therapist when
							needed. Mama, Te Entiendo's goal is to reduce isolation, make help
							feel accessible, and turn small daily check-ins into meaningful
							progress—at your pace, in your language, with care.
						</p>
					</motion.div>

					<MotionWrapper>
						<h2 className="mb-8 flex items-center text-center text-2xl font-bold md:text-left">
							<motion.span
								className="mr-2 inline-block"
								initial={{ rotate: 0 }}
								whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
								transition={{ duration: 0.5, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<Layers color="purple" />
							</motion.span>{" "}
							Tech Stack
						</h2>
					</MotionWrapper>
					<motion.div
						className="mt-3 mb-8 rounded-lg border border-purple-500/20 bg-purple-50/80 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-purple-500/10 dark:bg-purple-900/10"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<p className="text-sm leading-7 text-muted-foreground md:text-base">
							The application was built using Ruby on Rails as the core
							framework, providing a robust foundation for handling complex user
							interactions and data management. The backend leverages PostgreSQL
							for reliable data storage, while Redis powers the real-time chat
							functionality through Action Cable, enabling seamless
							communication between mothers and therapists. Background job
							processing is handled by Sidekiq, ensuring smooth performance for
							task evaluations and notifications. The entire stack is
							containerized using Docker and Docker Compose, deployed to a
							DigitalOcean Ubuntu server with Nginx serving as a reverse proxy
							for secure, efficient request handling. This architecture ensures
							scalability, maintainability, and a smooth user experience for
							both mothers seeking support and therapists providing care.
						</p>
					</motion.div>
				</div>
			</section>
			<section>
				<div className="container mx-auto max-w-4xl px-6 md:px-4">
					<MotionWrapper>
						<h2 className="mb-8 flex items-center text-center text-2xl font-bold md:text-left">
							<motion.span
								className="mr-2 inline-block"
								initial={{ rotate: 0 }}
								whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
								transition={{ duration: 0.5, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<Images color="purple" />
							</motion.span>{" "}
							Gallery
						</h2>
					</MotionWrapper>
					<motion.div
						className="mt-3 mb-8 rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<Marquee>
							<MarqueeContent>
								{carouselImgs.map((img, index) => (
									<MarqueeItem key={img.src}>
										<ImageZoom>
											<img
												src={img.src}
												alt={`MTE ${index}.png`}
												className="rounded-xl max-h-96"
											/>
										</ImageZoom>
									</MarqueeItem>
								))}
							</MarqueeContent>
						</Marquee>
					</motion.div>
				</div>
			</section>
		</>
	);
}
