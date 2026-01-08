import nodemailer from "nodemailer";

export default async function handler(req, res){
  if(req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const data = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",  // eller smtp.gmail.com om Gmail
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMULTRONET_EMAIL,
      pass: process.env.SMULTRONET_PASS
    }
  });

  const mailOptions = {
    from: `"Smultronet Enkät" <${process.env.SMULTRONET_EMAIL}>`,
    to: process.env.SMULTRONET_EMAIL,
    subject: "Ny enkät – Smultronet",
    html: `<h3>Ny enkät inskickad</h3>
           ${Object.entries(data).map(([k,v])=>`<p><strong>${k}:</strong> ${v}</p>`).join("")}`
  };

  try{
    await transporter.sendMail(mailOptions);
    res.status(200).json({message:"Email sent"});
  }catch(err){
    console.error(err);
    res.status(500).json({message:"Error sending email"});
  }
}
