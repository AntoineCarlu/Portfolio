"use client";

import { useState } from "react";

export default function UpdateProject({ id, link, img, descr, langu }) {

  const [NewProject_link, setNewProject_link] = useState(link);
  const [NewProject_img, setNewProject_img] = useState(img);
  const [NewProject_descr, setNewProject_descr] = useState(descr);
  const [NewProject_langu, setNewProject_langu] = useState(langu);

  // Function to UPDATE the "Project" selectionned by id
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!NewProject_link || !NewProject_img || !NewProject_descr || !NewProject_langu) {
      alert('Renseignez tous les champs.');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ NewProject_link, NewProject_img, NewProject_descr, NewProject_langu }),
      });

      if (res.ok) {
        alert('Projet modifié !');
        setNewProject_link('');
        setNewProject_img('');
        setNewProject_descr('');
        setNewProject_langu('');
      } else {
        throw new Error ("Failed to update project.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Page content
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setNewProject_link(e.target.value)}
          value={NewProject_link}
          type="text"
          placeholder='Project link'
        />

        <input
          onChange={(e) => setNewProject_img(e.target.value)}
          value={NewProject_img}
          type="text"
          placeholder='Project image link'
        />

        <input
          onChange={(e) => setNewProject_descr(e.target.value)}
          value={NewProject_descr}
          type="text"
          placeholder='Project description'
        />

        <input
          onChange={(e) => setNewProject_langu(e.target.value)}
          value={NewProject_langu}
          type="text"
          placeholder='Project languages'
        />

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}
