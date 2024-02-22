"use client";

export default function DeleteSkillBtn({ id }) {

  // Function to delete a "Skill" from the database with confirmation
  const deleteSkill = async() => {
    const confirmed = confirm('Voulez-vous réellement supprimer cette compétence ?');

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/skills?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert('Compétence supprimée !');
      }
    }
  };

  return (
    <button className="delete_btn" onClick={deleteSkill}>
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
