// "use client";

// import { useState } from "react";

// export default function AddEducation() {

//   const [education_title, setEducation_title] = useState('');
//   const [education_infos, setEducation_infos] = useState('');
//   const [education_descr, setEducation_descr] = useState('');
//   const [education_date, setEducation_date] = useState('');

//   // Function to add news "Educations" with form element
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!education_title || !education_infos || !education_descr || !education_date) {
//       alert('Renseignez tous les champs.');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:3000/api/educations', {
//         method: 'POST',
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ education_title, education_infos, education_descr, education_date }),
//       });

//       if (res.ok) {
//         alert('Education créée !');
//         setEducation_title('');
//         setEducation_infos('');
//         setEducation_descr('');
//         setEducation_date('');
//       } else {
//         throw new Error('Failed to create a new education.');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         onChange={(e) => setEducation_title(e.target.value)}
//         value={education_title}
//         type="text" 
//         placeholder='Education title' 
//       />

//       <input
//         onChange={(e) => setEducation_infos(e.target.value)}
//         value={education_infos}
//         type="text" 
//         placeholder='Education informations' 
//       />

//       <input
//         onChange={(e) => setEducation_descr(e.target.value)}
//         value={education_descr}
//         type="text" 
//         placeholder='Education description' 
//       />

//       <input
//         onChange={(e) => setEducation_date(e.target.value)}
//         value={education_date}
//         type="text"
//         placeholder='Education date'
//       />

//       <button type="submit">Create Education</button>
//     </form>
//   );

// }
