import { Project, projects } from "../data/data";

function ProjectCard(
  { image, name, desc, techs, completed, index}: Project & { index : number}
) {
  return (
    <div className={`flex ${index % 2 != 0? 'flex-wrap-reverse' : 'flex-wrap'} mx-auto lg:justify-start justify-center gap-8 mt-6`}>
      <a href={completed ? image : ''} className={`${!completed ? 'pointer-events-none order-3' : ''}`}>
        <img
          src={image}
          width={280}
          className={`border rounded shadow-xl hover:shadow-red-300 ${completed ? '': 'blur'}`}
        />
      </a>

      <div>
        <h2 className="font-bold mx-auto">{name}</h2>
        <div className="md:text-start">
        <p className="mt-2 min-w-96">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-1 justify-center mt-2">
          {techs.map((tech) => (
            <span className="font-bold px-4 py-2 bg-red-500 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-6xl p-2 text-center mt-16">
        <h2 className="font-bold text-red-500 mb-1 mx-auto">Portfolio</h2>
        <h3 className="text-2xl font-extrabold mx-auto">Projects</h3>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <ProjectCard
              completed={project.completed}
              image={project.image}
              name={project.name}
              desc={project.desc}
              techs={project.techs}
              index = {idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
