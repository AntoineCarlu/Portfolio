"use client";

import { useState } from "react";

export default function AddExperience() {

  const [experience_title, setExperience_title] = useState('');
  const [experience_infos, setExperience_infos] = useState('');
  const [experience_descr, setExperience_descr] = useState('');
  const [experience_date, setExperience_date] = useState('');

  // Function to add news "Experiences" with form element
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!experience_title || !experience_infos || !experience_descr || !experience_date) {
      alert('Renseignez tous les champs.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/experiences', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ experience_title, experience_infos, experience_descr, experience_date }),
      });

      if (res.ok) {
        alert('Experience créée !');
        setExperience_title('');
        setExperience_infos('');
        setExperience_descr('');
        setExperience_date('');
      } else {
        throw new Error('Failed to create a new experience.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setExperience_title(e.target.value)}
        value={experience_title}
        type="text" 
        placeholder='Experience title' 
      />

      <input
        onChange={(e) => setExperience_infos(e.target.value)}
        value={experience_infos}
        type="text" 
        placeholder='Experience informations' 
      />

      <input
        onChange={(e) => setExperience_descr(e.target.value)}
        value={experience_descr}
        type="text" 
        placeholder='Experience description' 
      />

      <input
        onChange={(e) => setExperience_date(e.target.value)}
        value={experience_date}
        type="text"
        placeholder='Experience date'
      />

      <button type="submit">Create Experience</button>
    </form>
  );

}
