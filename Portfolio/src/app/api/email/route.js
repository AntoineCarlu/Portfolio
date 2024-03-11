import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, number, email, subject, message } = await request.json();
    const myEmail = process.env.EMAIL_USER;
  
    //configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    //email content
    const mailOptions = {
      from: email,
      to: myEmail,
      subject: subject,
      text: `Nom : ${name}\nNuméro : ${number}\nEmail : ${email}\n\n${message}`,
    };

    //send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email envoyé avec succès !" }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email 3:", error);
    return NextResponse.json({ message: "Erreur lors de l'envoi de l'email 3" }, { status: 500 });
  }
}








// const handler = async (req, res) => {
//   // if (req.method === 'POST') {
//     try {
//       const { name, number, email, subject, message } = req.body;
//       const myEmail = process.env.EMAIL_USER;

//       //configure nodemailer
//       const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS,
//         },
//       });

//       //email content
//       const mailOptions = {
//         from: email,
//         to: myEmail,
//         subject: subject,
//         text: `Nom : ${name}\nNuméro : ${number}\nEmail : ${email}\n\n${message}`,
//       };

//       //send the email
//       await transporter.sendMail(mailOptions);

//       res.status(200).send('Email envoyé avec succès !');
//     } catch (error) {
//       console.error("Erreur lors de l'envoi de l'email :", error);
//       res.status(500).send("Erreur lors de l'envoi de l'email");
//     }
//   // } else {
//   //   res.status(405).send('Méthode non autorisée');
//   // }
// }

// export default handler;
