"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#" },
    { name: "Experience", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Resume", href: "/FaaizAbdullahResume.pdf" },
  ];

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border drop-shadow-xl backdrop-blur-2xl">
      <div className="mx-auto flex max-w-full items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-black">
          Logo
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
          className="block text-black md:hidden"
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
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute left-0 top-full w-full border-b border-gray-100 bg-white px-6 py-8 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-center text-lg font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  {...(link.name === "Resume" ? { download: "FaaizAbdullahResume.pdf" } : {})}
                  className="text-gray-600 hover:text-black"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}