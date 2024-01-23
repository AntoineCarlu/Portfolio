import React, { useState, useEffect } from 'react';
import DeleteBtn from "./DeleteProject.component";

export default function SelectProjects() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/projects", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch projects.");
      }

      const data = await res.json();
      console.log("Data from API:", data);
      setOptions(data); // Set the received data as options
      console.log("Options state after setOptions:", options);
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue); // Update selected option
  };


  return (
    <div>
      <select onChange={handleOptionChange}>
        <option value={null}>Sélectionner un projet</option>
        {Array.isArray(options) && options.length > 0 ? (
          options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.project_descr}
            </option>
          ))
        ) : (
          <option value={null}>Loading...</option>
        )}
      </select>
      {selectedOption && <DeleteBtn id={selectedOption} />}
    </div>
  );
}
