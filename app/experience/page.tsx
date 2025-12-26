"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                  Experience
                </h1>
                <p className="text-base text-gray-600 max-w-2xl">
                  A timeline of where I've worked, what I've built, and the impact I've made along the way.
                </p>
              </div>

              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                href="/FaaizAbdullahResume.pdf"
                download="FaaizAbdullahResume.pdf"
                className="group flex items-center gap-2 rounded-xl border-2 border-black bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-black"
              >
                <span>Download Resume</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <div className="space-y-16">
            {/* Professional Experience */}
            <section className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <h2 className="text-2xl font-bold tracking-tighter text-black md:text-3xl">
                  Professional Experience
                </h2>
                <div className="h-[1px] flex-grow bg-black/5"></div>
              </motion.div>

              <div className="space-y-6">
                {/* AEM */}
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-teal-200 hover:shadow-md"
                >
                  {/* Teal Accent - AEM environmental theme */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-teal-500 to-emerald-600"></div>
                  
                  <div className="flex flex-col gap-5 p-6 pl-8 md:p-8 md:pl-10">
                    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                      <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="font-bold uppercase tracking-wider text-teal-700">AEM</span>
                            <span className="text-gray-400">•</span>
                            <span className="font-medium text-gray-500">May 2025 – August 2025</span>
                          </div>
                          
                          <h3 className="text-2xl font-bold tracking-tight text-black">
                            Cloud Engineer Intern
                          </h3>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {["AWS", "Lambda", "EC2", "S3", "Athena", "PowerShell"].map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700 border border-teal-100"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-sm leading-relaxed text-gray-700">
                      <li className="flex gap-2.5">
                        <span className="text-teal-500 mt-1 flex-shrink-0 text-xs">▪</span>
                        <span>Built multi-account monitoring pipelines for EC2, ECS, data transfer, and security posture across AWS accounts.</span>
                      </li>
                      <li className="flex gap-2.5">
                        <span className="text-teal-500 mt-1 flex-shrink-0 text-xs">▪</span>
                        <span>Analyzed EBS usage and recommended rightsizing strategies, helping eliminate an estimated <span className="font-semibold text-black">$30,000/year</span> in unnecessary storage costs.</span>
                      </li>
                      <li className="flex gap-2.5">
                        <span className="text-teal-500 mt-1 flex-shrink-0 text-xs">▪</span>
                        <span>Automated cost analytics with AWS Lambda, S3, and Athena to provide near real-time reporting and insights.</span>
                      </li>
                      <li className="flex gap-2.5">
                        <span className="text-teal-500 mt-1 flex-shrink-0 text-xs">▪</span>
                        <span>Migrated legacy datasets from RDS/EBS to S3 using PowerShell and AWS CLI, reducing storage overhead.</span>
                      </li>
                    </ul>
                  </div>
                </motion.article>

                {/* Zebra Robotics */}
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-md"
                >
                  {/* Blue Accent - Zebra Robotics blue theme */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-800"></div>
                  
                  <div className="flex flex-col gap-5 p-6 pl-8 md:p-8 md:pl-10">
                    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                      <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="font-bold uppercase tracking-wider text-blue-700">Zebra Robotics</span>
                            <span className="text-gray-400">•</span>
                            <span className="font-medium text-gray-500">November 2024 – August 2025</span>
                          </div>
                          
                          <h3 className="text-2xl font-bold tracking-tight text-black">
                            Coding Instructor
                          </h3>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {["Python", "Java", "Teaching", "Curriculum Design"].map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 border border-blue-100"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-sm leading-relaxed text-gray-700">
                      <li className="flex gap-2.5">
                        <span className="text-blue-500 mt-1 flex-shrink-0 text-xs">▪</span>
                        <span>Taught Python and Java to <span className="font-semibold text-black">40+ students</span>, helping them progress from fundamentals to building real projects.</span>
                      </li>
                      <li className="flex gap-2.5">
                        <span className="text-blue-500 mt-1 flex-shrink-0 text-xs">▪</span>
                        <span>Designed hands-on coding modules that improved engagement and enabled students to advance to the next proficiency level.</span>
                      </li>
                      <li className="flex gap-2.5">
                        <span className="text-blue-500 mt-1 flex-shrink-0 text-xs">▪</span>
                        <span>Collaborated with the business development team to pitch programs at schools and local events, contributing to enrollment growth.</span>
                      </li>
                    </ul>
                  </div>
                </motion.article>
              </div>
            </section>

            {/* Projects & Awards */}
            <section className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <h2 className="text-2xl font-bold tracking-tighter text-black md:text-3xl">
                  Awards
                </h2>
                <div className="h-[1px] flex-grow bg-black/5"></div>
              </motion.div>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/40 to-white transition-all duration-300 hover:border-amber-300 hover:shadow-md"
              >
                {/* Gold Accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600"></div>
                
                <div className="flex flex-col gap-5 p-6 pl-8 md:p-8 md:pl-10">
                  <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-bold uppercase tracking-wider text-amber-700">StormHacks 2025</span>
                          <span className="text-gray-400">•</span>
                          <span className="font-medium text-gray-500">October 2025</span>
                        </div>
                        
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 border border-amber-200">
                          <span className="text-amber-700">🏆</span>
                          <span className="text-xs font-bold text-amber-800">Best Hardware Project</span>
                        </div>

                        <h3 className="text-2xl font-bold tracking-tight text-black">
                          ASL Express
                        </h3>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {["Gemini AI", "Arduino", "Next.js", "ElevenLabs", "ESP32"].map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 border border-amber-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-sm leading-relaxed text-gray-800">
                    <li className="flex gap-2.5">
                      <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">▪</span>
                      <span>Built an AI-powered platform that removes communication barriers for deaf customers at drive-thrus, winning <span className="font-semibold text-black">Best Hardware Project at StormHacks 2025</span>.</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">▪</span>
                      <span>Integrated Gemini API for real-time sign language recognition and ElevenLabs for natural text-to-speech, enabling smooth two-way communication.</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">▪</span>
                      <span>Developed a full-stack web app paired with Arduino ESP32 hardware (ultrasonic sensors, buzzers, LCDs) to guide the ordering flow.</span>
                    </li>
                  </ul>
                </div>
              </motion.article>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}