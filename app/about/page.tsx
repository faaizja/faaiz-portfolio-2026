"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";

const photos = [
  { src: "/faaiz.jpg", alt: "Faaiz portrait" },
  { src: "/turkey.png", alt: "In turkey" },
];

export default function AboutPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              About Me
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column: Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="space-y-4 text-base leading-relaxed text-gray-700">
                  <p>
                    I&apos;m a software and cloud developer currently based in Vancouver, BC.
                  </p>
                  <p>
                    My experience includes full-stack development, cloud infrastructure, and AI-driven
                    projects, with hands-on work deploying and optimizing systems on AWS. I enjoy working
                    close to both the code and the infrastructure to ensure performance, reliability, and
                    clarity.
                  </p>
                  <p>
                    I’m most motivated by hands-on building and continuous learning. Whether it’s exploring
                    new technologies, improving system performance, or refining a product, I focus on writing
                    clean, efficient code and understanding the systems I work with end to end.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Continuous Vertical Moving Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div 
                className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl bg-gray-100"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Continuous Scroll Wrapper 
                  We repeat the list of photos twice to ensure no gap appears during transition.
                */}
                <div 
                  className="flex flex-col animate-infinite-vertical"
                  style={{ 
                    animationDuration: isHovered ? '25s' : '12s',
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite'
                  }}
                >
                  {[...photos, ...photos].map((photo, index) => (
                    <div 
                      key={index} 
                      className="relative w-full aspect-[3/4] flex-shrink-0"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        priority={index < 2}
                      />
                    </div>
                  ))}
                </div>

                {/* Vertical Gradient overlays for a smoother entrance/exit look */}
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CSS for the infinite scroll animation */}
        <style jsx global>{`
          @keyframes infinite-vertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-infinite-vertical {
            animation-name: infinite-vertical;
          }
        `}</style>

        {/* Snapshot Section */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
            >
              {/* Location */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Location
                </div>
                <div className="text-xl font-semibold text-black">
                  Vancouver, BC
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Originally from Karachi, Pakistan
                </div>
              </div>

              {/* Focus */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Current Focus
                </div>
                <div className="text-xl font-semibold text-black">
                  Full-Stack & Cloud Development
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Building AI-powered products and scalable infrastructure
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                What I Work With
              </h2>
              <p className="mt-3 text-base text-gray-600">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Frontend */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "React", "Next.js", "Tailwind CSS", "React Native"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Backend & Database
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "SQL", "PostgreSQL", "MongoDB", "Supabase"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud & Tools */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Cloud & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS S3", "AWS EC2", "AWS Lambda", "AWS Athena", "AWS EBS", "AWS Cloudformation", "AWS CloudWatch", "Supabase", "Git", "Postman", "Arduino", "Figma"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="bg-black py-16 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold tracking-tight">
                What Drives Me
              </h2>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-3">
                  <div className="text-5xl font-bold text-gray-600">01</div>
                  <h3 className="text-xl font-semibold">Impact Over Perfection</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Building products that solve real problems and get used by real people, 
                    not just polished demos that sit in a portfolio.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-5xl font-bold text-gray-600">02</div>
                  <h3 className="text-xl font-semibold">Developer Experience</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Clean code, clear documentation, and thoughtful architecture that makes 
                    teams move faster and builds more maintainable.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-5xl font-bold text-gray-600">03</div>
                  <h3 className="text-xl font-semibold">Continuous Learning</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Staying curious, experimenting with new tools, and pushing boundaries 
                    while maintaining reliability and performance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

    <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tighter text-black md:text-4xl">Education</h2>
          <div className="h-[1px] flex-grow bg-black/5"></div>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50/50 transition-all duration-500 hover:border-black/10 hover:shadow-2xl hover:shadow-black/[0.02]">
          {/* SFU Red Accent: Thicker and more vibrant for that pop */}
          <div className="absolute left-0 top-0 h-full w-[5px] bg-[#A6192E]"></div>

          <div className="flex flex-col gap-10 p-8 md:flex-row md:items-start md:justify-between lg:px-14 lg:py-12">
            <div className="flex-1 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#A6192E]">
                    Simon Fraser University
                  </span>
                  <div className="h-1 w-1 rounded-full bg-black/10"></div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Burnaby, BC</span>
                </div>
                
                <h3 className="text-3xl font-extrabold tracking-tighter text-black md:text-5xl lg:text-6xl">
                  Bachelor of Science
                </h3>
                <p className="mt-3 text-lg font-semibold text-gray-800 md:text-xl">
                  Interactive Systems and Computer Science
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                  Core Concentrations
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "AI and Data Science", 
                    "Design and Development for Web & Mobile"
                  ].map((item) => (
                    <span 
                      key={item}
                      className="rounded-xl border border-black/[0.08] bg-white px-4 py-2 text-xs font-bold text-black shadow-sm transition-all hover:border-black hover:bg-black hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              {/* Higher contrast dark box for the graduation date */}
              <div className="rounded-2xl px-7 py-6 bg-white shadow-xl shadow-black/10 md:text-right">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A6192E]">
                  Expected Graduation
                </p>
                <p className="mt-1 text-2xl font-black tracking-tighter text-black">
                  Aug 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    </main>

      <Footer />
    </div>
  );
}