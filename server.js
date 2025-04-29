const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

app.post('/submit', async (req, res) => {
  const { parentName, parentEmail, summary } = req.body;
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: parentEmail,
      subject: 'Bekräftelse Sommarledighet 2025',
      text: `Hej ${parentName},\n\nHär är din sammanfattning:\n${summary}`
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'Ny anmälan: Sommarledighet 2025',
      text: `Förälder: ${parentName} <${parentEmail}>\n\nSammanfattning:\n${summary}`
    });
    res.json({ message: 'Tack! Din anmälan är inskickad och bekräftelse mejl är skickade.' });
  } catch (err) {
    console.error('Mailfel:', err);
    res.status(500).json({ message: 'Fel vid skicka mejl. Försök igen senare.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server körs på port ${PORT}`));
