"use client";

import { useState } from "react";

export default function AddProject() {

  const [project_link, setProject_link] = useState('');
  const [project_img, setProject_img] = useState('');
  const [project_descr, setProject_descr] = useState('');

  // Function to add news "Projects" with form element
  const handleSubmit = async () => {
    if (!project_link || !project_img || !project_descr) {
      alert('Renseignez tous les champs.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ project_link, project_img, project_descr }),
      });

      if (res.ok) {
        console.log('Project created successfully.');
      } else {
        throw new Error('Failed to create a new project.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setProject_link(e.target.value)}
        value={project_link}
        type="text" 
        placeholder='Project link' 
      />

      <input
        onChange={(e) => setProject_img(e.target.value)}
        value={project_img}
        type="text" 
        placeholder='Project image link' 
      />

      <input
        onChange={(e) => setProject_descr(e.target.value)}
        value={project_descr}
        type="text" 
        placeholder='Project description' 
      />

      <button type="submit">Create Project</button>
    </form>
  );

}
