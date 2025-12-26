"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import ContactButton from "../../components/contactButton";
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          
          {/* Header Area - Following Experience Page Layout */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-16"
          >
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                  Get in Touch
                </h1>
                <p className="text-base text-gray-600 max-w-2xl">
                  Have a project in mind or just want to chat? I&apos;m always open to discussing new opportunities and creative ideas.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Left: Contact Form Card (Spans 7) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-md">
                {/* Black Accent Line - Matching Education Theme */}
                <div className="absolute left-0 top-0 h-full w-1 bg-black"></div>
                
                <div className="p-6 md:p-10 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">Send a Message</h2>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                        <input
                          type="text"
                          className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-black focus:bg-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                        <input
                          type="email"
                          className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-black focus:bg-white"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                      <textarea
                        rows={5}
                        className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-black focus:bg-white resize-none"
                        placeholder="Hey Faaiz, I was wondering if..."
                      />
                    </div>

                    <div className="pt-2">
                      <ContactButton word="Send Message" />
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Right: Social/Contact Info (Spans 5) */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-bold tracking-tight">Connect Elsewhere</h2>
                  <div className="h-[1px] flex-grow bg-black/5"></div>
                </div>

                {/* Social Items - Styled exactly like Experience Articles */}
                {[
                  { 
                    label: "Email", 
                    value: "faaizabdullah0707@gmail.com", 
                    icon: <Mail size={18} />, 
                    href: "mailto:faaizabdullah0707@gmail.com",
                    color: "from-red-500 to-red-700",
                    bg: "bg-red-50",
                    text: "text-red-700"
                  },
                  { 
                    label: "LinkedIn", 
                    value: "Connect on LinkedIn", 
                    icon: <Linkedin size={18} />, 
                    href: "https://www.linkedin.com/in/faaiz-abdullah-9004391a4/",
                    color: "from-blue-600 to-blue-800",
                    bg: "bg-blue-50",
                    text: "text-blue-700"
                  },
                  { 
                    label: "GitHub", 
                    value: "View Repository", 
                    icon: <Github size={18} />, 
                    href: "https://github.com/faaizja",
                    color: "from-purple-500 to-purple-800",
                    bg: "bg-gray-50",
                    text: "text-gray-700"
                  }
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all ease-in-out duration-300 hover:shadow-md"
                  >
                    <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${social.color}`}></div>
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${social.bg} ${social.text} transition-colors`}>
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{social.label}</p>
                      <p className="text-sm font-semibold text-black">{social.value}</p>
                    </div>
                    <ArrowUpRight size={16} className="text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Helper component for arrow icon
function ArrowUpRight({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}