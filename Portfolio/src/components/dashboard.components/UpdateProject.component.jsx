"use client";

import { useState } from "react";

export default function UpdateProject({ id, link, img, descr }) {

  const [NewProject_link, setNewProject_link] = useState(link);
  const [NewProject_img, setNewProject_img] = useState(img);
  const [NewProject_descr, setNewProject_descr] = useState(descr);

  // Function to UPDATE the "Post" selectionned
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ NewProject_link, NewProject_img, NewProject_descr }),
      });

      if (!res.ok) {
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

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}
