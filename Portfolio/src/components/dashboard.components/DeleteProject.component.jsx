"use client";

export default function DeleteProjectBtn({ id }) {

  // Function to delete a "Project" from the database with confirmation
  const deleteProject = async() => {
    const confirmed = confirm('Voulez-vous réellement supprimer ce projet ?');

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/projects?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert('Projet supprimé !');
      }
    }
  };

  return (
    <button className="delete_btn" onClick={deleteProject}>
      Delete
      <style jsx>{`
        .delete_btn {
          background-color: #e74c3c;
        }
        .delete_btn:hover {
          background-color: #c0392b;
        }
      `}</style>
    </button>
  )
}
