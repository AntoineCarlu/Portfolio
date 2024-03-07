"use client";

export default function DeleteDataBtn({ id, type, name }) {

  // Function to delete a data from the database with confirmation
  const deleteData = async() => {
    const confirmed = confirm(`Voulez-vous réellement supprimer "${name}" ?`);

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/${type}s?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert(`${type} deleted !`);
      }
    }
  };

  return (
    <button className="delete_btn" onClick={deleteData}>
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
