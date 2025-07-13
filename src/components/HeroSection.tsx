import { personalInfo } from "@/lib/data";
import { Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
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
                <MapPin className="mr-2 h-4 w-4" />
                📍 {personalInfo.location}
              </motion.div>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Github className="mr-2 h-4 w-4" />
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
                <Linkedin className="mr-2 h-4 w-4" />
                🔗 LinkedIn
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
              🚀 I am a Software Engineer with{" "}
              {new Date().getFullYear() - 2020}+ years of experience working as
              a Full-Stack and Front-End developer. I have knowledge of
              frameworks such as Ruby on Rails, Express.js, Fastify, FastAPI,
              ElysiaJS, .NET, Next.js; libraries such as Bootstrap, React,
              TailwindCSS, ShadCN; and languages such as Ruby, Python,
              TypeScript, C#, among others. I have developed projects of varying
              complexity, such as simple static web pages, API clients that
              report COVID results to Ministry of Health, complex multi-step
              forms for the biggest railway company in New Zealand (KiwiRail),
              LIMS software (Laboratorio GenoSUR), blogs (Mamá, Te Entiendo) and
              inventory apps (Europ Assistance). In addition, I am fluent in
              both Spanish and English.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
