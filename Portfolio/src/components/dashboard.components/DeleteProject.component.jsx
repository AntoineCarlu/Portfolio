"use client";

import { useRouter } from "next/navigation";

export default function DeleteBtn({ id }) {
  const router = useRouter();

  // Function to delete a "Project" from the database with confirmation
  const deleteProject = async() => {
    const confirmed = confirm('Voulez-vous réellement supprimer ce projet ?');

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/projects?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={deleteProject}>
      Delete
    </button>
  )
}
