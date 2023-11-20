// import mysql from 'mysql2';

// const pool = mysql
//     .createPool({
//         host: 'db_portfolio',
//         user: 'root',
//         password: 'root',
//         database: 'portfolio',
//     })
//     .promise();

// async function PortfolioDb() {
//   const data = await pool.query(
//       `
//       SELECT * FROM Projects
//       `
//   );
//   return data[0];
// }
// export default PortfolioDb;