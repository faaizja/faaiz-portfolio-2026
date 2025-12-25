"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Resume", href: "/FaaizAbdullahResume.pdf" },
  ];

  const menuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" } 
    },
    open: { 
      opacity: 1, 
      height: "100vh",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], when: "beforeChildren" } 
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-50/70 border-b border-gray-100 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-full items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tight text-black hover:-rotate-12 transition-transform duration-300 ease-in-out">
          <span className="font-cairo uppercase">f</span>
          <span className="font-cairo uppercase">a</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 text-base font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              {...(link.name === "Resume" ? { download: "FaaizAbdullahResume.pdf" } : {})}
              className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:content-[''] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-50 block text-black md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-0 left-0 w-full bg-white flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  variants={linkVariants}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    {...(link.name === "Resume" ? { download: "FaaizAbdullahResume.pdf" } : {})}
                    className="text-4xl font-bold tracking-tighter text-black hover:text-gray-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
            
            {/* Social / Footer hint in mobile menu */}
            <motion.div 
              variants={linkVariants}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 text-sm font-medium uppercase tracking-widest text-gray-400"
            >
              Faaiz Abdullah &copy; 2026
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}