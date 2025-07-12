import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="from-background to-muted/20 border-t border-purple-500/10 bg-gradient-to-b py-6 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl px-6 md:px-4">
        <motion.div
          className="flex flex-col items-center justify-center md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-muted-foreground text-center text-sm md:text-left"
            whileHover={{ scale: 1.01 }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
