"use client";

export default function DeleteBtn({ id }) {

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
    <button onClick={deleteProject} style={{ background: '#e74c3c', ':hover': { background: '#c0392b' } }}>
      Delete
    </button>
  )
}
