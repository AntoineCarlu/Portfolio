"use client";

import { useState } from "react";

export default function AddSkill() {

  const [skill_name, setSkill_name] = useState('');
  const [skill_pourcent, setSkill_pourcent] = useState('');
  const [skill_category, setSkill_category] = useState('');

  // Function to add news "Skills" with form element
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!skill_name || !skill_pourcent || !skill_category) {
      alert('Renseignez tous les champs.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/skills', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ skill_name, skill_pourcent, skill_category }),
      });

      if (res.ok) {
        alert('Compétence créée !');
        setSkill_name('');
        setSkill_pourcent('');
        setSkill_category('');
      } else {
        throw new Error('Failed to create a new skill.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setSkill_name(e.target.value)}
        value={skill_name}
        type="text" 
        placeholder='Skill name' 
      />

      <input
        onChange={(e) => setSkill_pourcent(e.target.value)}
        value={skill_pourcent}
        type="text" 
        placeholder='Skill pourcent' 
      />

      <input
        onChange={(e) => setSkill_category(e.target.value)}
        value={skill_category}
        type="text" 
        placeholder='Skill category' 
      />

      <button type="submit">Create Skill</button>
    </form>
  );

}
