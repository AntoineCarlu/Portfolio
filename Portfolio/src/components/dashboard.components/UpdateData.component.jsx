"use client";

import { useState } from "react";

export default function UpdateData({ type, id, field1, field2, field3, field4 }) {

  const [value1, setValue1] = useState(field1);
  const [value2, setValue2] = useState(field2);
  const [value3, setValue3] = useState(field3);
  const [value4, setValue4] = useState(field4);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!value1 || !value2 || !value3 || (type !== "skill" && !value4)) {
      alert("Renseignez tous les champs.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/${type}s/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ value1, value2, value3, value4 }),
      });

      if (res.ok) {
        alert(`${type} modifié !`);
        setValue1("");
        setValue2("");
        setValue3("");
        setValue4("");
      } else {
        throw new Error(`Failed to update ${type}.`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Page content
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setValue1(e.target.value)}
        value={value1}
        type="text"
        placeholder={`${field1}`}
      />

      <input
        onChange={(e) => setValue2(e.target.value)}
        value={value2}
        type="text"
        placeholder={`${field2}`}
      />

      <input
        onChange={(e) => setValue3(e.target.value)}
        value={value3}
        type="text"
        placeholder={`${field3}`}
      />

      {type !== "skill" && (
        <input
          onChange={(e) => setValue4(e.target.value)}
          value={value4}
          type="text"
          placeholder={`${field4}`}
        />
      )}

      <button type="submit">Update {type}</button>
    </form>
  );
}
