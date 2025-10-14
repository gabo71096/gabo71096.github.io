import { motion } from "framer-motion";
import mteLogo from "@/images/mte/mte-logo.png";

export default function Projects() {
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
		<div className="py-16 md:py-24 container mx-auto max-w-4xl px-6 md:px-4">
			<motion.h1 className="mb-4 text-4xl font-bold" variants={childVariants}>
				Projects
			</motion.h1>
			<a href="/projects/mte">
				<motion.div
					className="mb-8 flex flex-col justify-between md:flex-row md:items-center rounded-lg border border-purple-500/20 bg-purple-50/80 p-8 shadow-sm dark:border-purple-500/10 dark:bg-purple-900/10"
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
			</a>
		</div>
	);
}
