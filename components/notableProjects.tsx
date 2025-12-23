const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Short description for project one.",
    image: "/p1.png",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Short description for project two.",
    image: "/p1.png",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Short description for project three.",
    image: "/p1.png",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Short description for project four.",
    image: "/p1.png",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Short description for project five.",
    image: "/p1.png",
  },
  {
    id: 6,
    title: "Project Six",
    description: "Short description for project six.",
    image: "/p1.png",
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
              <div className="overflow-hidden bg-gray-100 rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  height={500}
                  width={500}
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