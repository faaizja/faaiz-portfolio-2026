const projects = [
  {
    id: 1,
    title: "Study Spotr",
    description: "Study Spotr is a web application that allows users to find study groups and study partners based on their location and interests.",
    image: "/ss.png",  
  },
  {
    id: 2,
    title: "ASL Express",
    description: "Short description for project two.",
    image: "/asl.png",
  },
  {
    id: 3,
    title: "Pharmabotics",
    description: "Short description for project three.",
    image: "/pharmabotics.png",
  },
  {
    id: 4,
    title: "Football Wizard",
    description: "Short description for project four.",
    image: "/footballwizard.png",
  },
  {
    id: 5,
    title: "Dragon Ball Shooters",
    description: "Short description for project five.",
    image: "/dbshooters.png",
  },
  {
    id: 6,
    title: "Nouri",
    description: "Short description for project six.",
    image: "/nouri.png",
  },
];

export default function notableProjects() {
  return (
    <section className="w-full bg-white text-black py-16">
      <div className="mx-auto flex max-w-fit flex-col gap-12 px-6 md:px-12">
        <h1 className="text-left text-2xl lg:text-4xl font-semibold tracking-tight">
          Notable Projects
        </h1>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-lg drop-shadow-2xl hover:-rotate-3 transition-transform duration-300 ease-in-out">
                <img
                  src={project.image}
                  alt={project.title}
                  height={300}
                  width={700}
                  className=""
                />
              </div>

              <div className="">
                <h2 className="text-md lg:text-2xl font-semibold text-black">{project.title}</h2>
                <p className="text-sm lg:text-lg text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}