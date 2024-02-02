import styles from '../dashboard.module.css';
import UpdateProject from '@/components/dashboard.components/UpdateProject.component';

// Function to GET a specific "Project" element datas with his id
const getProjectById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error ('Failed to fetch project.');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function DashboardUpdate({ params }) {
  const { id } = params;
  const { project } = await getProjectById(id);
  const { project_link, project_img, project_descr, project_langu } = project;

  return (
    <main className={styles.main}>
      <div className={styles.dashboard_center}>
        <UpdateProject id={id} link={project_link} img={project_img} descr={project_descr} langu={project_langu} />
      </div>
    </main>
  );
}
