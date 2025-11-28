import Button from "./Button";

export default function ProjectsSideBar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li
            key={project.id}
            className="w-full px-2 py-1 text-left text-stone-400 rounded-sm hover:text-stone-200 cursor-pointer hover:bg-stone-800"
          >
            {project.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
