import DeleteBtn from "./DeleteProject.component";

const getProjects = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/projects", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch projects.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading projects: ", error);
  }
}

export default async function SelectProjects() {
  const { projects } = await getProjects();

  // Page content
  return (
    <div>
      <select
      onChange={(e) => setSelectedProjectId(e.target.value)}
      value={selectedProjectId}
      >
        <option value={null}>Sélectionner un projet</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      {/* <DeleteBtn /> */}
    </div>
  )
}
