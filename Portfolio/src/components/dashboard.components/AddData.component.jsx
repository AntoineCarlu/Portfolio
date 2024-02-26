"use client";

import { useState } from "react";

export default function AddData({ fields }) {
  const inputFields = fields.filter(field => field !== fields[0]);
  const initialState = Object.fromEntries(inputFields.map(field => [field, '']));
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const missingFields = inputFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      alert('Renseignez tous les champs.');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/${fields[0]}s`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(`${fields[0]} created successfully !`);
        setFormData(initialState);
      } else {
        throw new Error(`Failed to create a new ${fields[0]}.`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map(field => (
        <input
          key={field}
          onChange={(e) => handleChange(e, field)}
          value={formData[field]}
          type="text"
          placeholder={`${field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')}`}
        />
      ))}
      <button type="submit">Create</button>
    </form>
  );
}
