"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Study Spotr",
    type: "Full-Stack Project",
    description: "A real-time study spot discovery app with Mapbox and AWS integrations.",
    tech: ["React", "Node.js", "MongoDB", "AWS S3", "Mapbox"],
    image: "/ss.png",
  },
  {
    id: 2,
    title: "ASL Express",
    type: "Hackathon Winner",
    description: "Award-winning platform bridging communication barriers for people with hearing loss.",
    tech: ["Arduino", "Next.js", "ElevenLabs", "Gemini API", "Supabase"],
    image: "/asl.png",
  },
  {
    id: 3,
    title: "Pharmabotics",
    type: "Course Work",
    description: "Automated medical dispensing system for patients that need assistance taking medication.",
    tech: ["React", "Node.js", "MongoDB", "Arduino"],
    image: "/pharmabotics.png",
  },
  {
    id: 4,
    title: "Football Wizard",
    type: "Personal Project",
    description: "A data-driven analytics tool for quick and accessible Premier League statistics.",
    tech: ["Python", "React", "OpenAI API", "RAGs"],
    image: "/footballwizard.png",
  },
  {
    id: 5,
    title: "Dragon Ball Shooters",
    type: "Game Dev",
    description: "Player vs CPU shooter game in Dragon Ball franchise theme.",
    tech: ["P5.js", "HTML5 Canvas", "CSS"],
    image: "/dbshooters.png",
  },
  {
    id: 6,
    title: "Nouri",
    type: "Startup / Project",
    description: "Food sustainability companion app with three distinct features to help users track and reduce food wastage.",
    tech: ["Figma", "Prototyping"],
    image: "/nouri.png",
  },
];

export default function NotableProjects() {
  return (
    <section className="w-full bg-white py-24 text-black">
      <div className="mx-auto max-w-full px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Notable Projects
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col gap-6"
            >
              <div className="relative aspect-[16/10] rounded-xl ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="hover:cursor-pointer h-full w-full transition-transform duration-300 ease-in-out hover:-rotate-3"
                />
                {/* Floating Project Type Tag */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-md bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-black drop-shadow-2xl border ring-1 ring-black/5">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-black">{project.title}</h2>
                  <div className="h-[1px] flex-grow mx-4 bg-gray-100"></div>
                </div>
                
                <p className="line-clamp-2 text-base leading-relaxed text-gray-600">
                  {project.description}
                </p>

                {/* Tech Stack Display */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest"
                    >
                      {item} {project.tech.indexOf(item) !== project.tech.length - 1 && "•"}
                    </span>
                  ))}
                </div>

                {/* Call-to-action */}
                <div className="pt-3">
                  <a
                    className="hover:cursor-pointer inline-flex items-center justify-center rounded-md border border-black px-4 py-2 text-xs font-medium uppercase tracking-wide text-black transition-all duration-200 hover:-translate-y-px hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Check it out
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}