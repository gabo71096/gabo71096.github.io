import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/70 dark:bg-background/40 border-border/40 supports-[backdrop-filter]:bg-background/60 sticky z-50 w-full border-b backdrop-blur-md backdrop-filter">
      <div className="container mx-auto flex max-w-4xl items-center justify-between p-4">
        <motion.a
          className="flex items-center text-lg font-medium"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ {personalInfo.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {["experience", "skills", "education"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="hover:text-foreground/80 text-foreground/60 transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item === "experience" && "💼 "}
              {item === "skills" && "🛠️ "}
              {item === "education" && "🎓 "}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="text-foreground p-2 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="border-border/10 bg-background/80 dark:bg-background/40 border-t px-4 py-4 backdrop-blur-md backdrop-filter md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {["experience", "skills", "education"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="hover:text-foreground/80 text-foreground/60 py-2 transition-colors"
                  onClick={toggleMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {item === "experience" && "💼 "}
                  {item === "skills" && "🛠️ "}
                  {item === "education" && "🎓 "}
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
