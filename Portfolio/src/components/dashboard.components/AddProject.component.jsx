// "use client";

// import { useState } from "react";

// export default function AddProject() {

//   const [project_link, setProject_link] = useState('');
//   const [project_img, setProject_img] = useState('');
//   const [project_descr, setProject_descr] = useState('');
//   const [project_langu, setProject_langu] = useState('');

//   // Function to add news "Projects" with form element
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!project_link || !project_img || !project_descr || !project_langu) {
//       alert('Renseignez tous les champs.');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:3000/api/projects', {
//         method: 'POST',
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ project_link, project_img, project_descr, project_langu }),
//       });

//       if (res.ok) {
//         alert('Projet créé !');
//         setProject_link('');
//         setProject_img('');
//         setProject_descr('');
//         setProject_langu('');
//       } else {
//         throw new Error('Failed to create a new project.');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         onChange={(e) => setProject_link(e.target.value)}
//         value={project_link}
//         type="text" 
//         placeholder='Project link' 
//       />

//       <input
//         onChange={(e) => setProject_img(e.target.value)}
//         value={project_img}
//         type="text" 
//         placeholder='Project image link' 
//       />

//       <input
//         onChange={(e) => setProject_descr(e.target.value)}
//         value={project_descr}
//         type="text" 
//         placeholder='Project description' 
//       />

//       <input
//         onChange={(e) => setProject_langu(e.target.value)}
//         value={project_langu}
//         type="text"
//         placeholder='Project languages'
//       />

//       <button type="submit">Create Project</button>
//     </form>
//   );

// }
