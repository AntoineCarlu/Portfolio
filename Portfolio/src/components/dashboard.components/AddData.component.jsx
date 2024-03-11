"use client";

import { useState } from "react";

export default function AddData({ fields }) {
  //remove the first element from the inputs form
  const inputFields = fields.filter(field => field !== fields[0]);
  //initialize the inputs as empty
  const initialState = Object.fromEntries(inputFields.map(field => [field, '']));
  const [formData, setFormData] = useState(initialState);

  //update the values of the inputs directly
  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  //handle the submission of the form with some conditions and events
  const handleSubmit = async (e) => {
    e.preventDefault();

    //prevent the creation of the data if some inputs are empty
    const missingFields = inputFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      alert('Renseignez tous les champs.');
      return;
    }

    //create the data if everything is ok
    try {
      const res = await fetch(`/api/${fields[0]}s`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(`${fields[0]} créé avec succès !`);
        setFormData(initialState);
      } else {
        throw new Error(`Echec lors de la création d'un nouveau ${fields[0]}.`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //page content
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
