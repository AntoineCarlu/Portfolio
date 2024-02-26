// import Link from 'next/link';
// import React, { useState, useEffect } from "react";
// import styles from './FetchList.module.css';
// import DeleteDataBtn from "./DeleteData.component";

// // Function to GET datas list from the database
// const getData = async (type) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/${type}s`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch ${type}s.`);
//     }

//     return res.json();
//   } catch (error) {
//     console.log(`Error loading ${type}s: `, error);
//     return [];
//   }
// }

// export default function DataList({ type, field }) {
//   const [data, setData] = useState([]);

//   //this useEffect uses the "getData" async function to fetch the data into a "use-client" component
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const fetchedData = await getData(type);
//         console.log("Fetched data:", fetchedData);
//         setData(fetchedData);
//       } catch (error) {
//         console.error(`Error fetching ${type}s: `, error);
//         setData([]);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       {data.map((item) => (
//         <div key={item._id}>
//           <div className={styles.dashboard_list}>
//             <p>{item[field]}</p>
//             <div>
//               <Link href={`/dashboard/${item._id}`}>Update</Link>
//               <DeleteDataBtn id={item._id} type={type}/>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
