// functions.js (Firebase Functions: functions/index.js)
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const adminEmail = "karim.nawar@stockholm.se";
const smtpUser = "dinmejl@exempel.se";
const smtpPass = "dittlösenord";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: smtpUser, pass: smtpPass }
});

exports.skickaBekraftelse = functions.https.onCall(async (data, context) => {
  const { namn, email, svar } = data;
  const sammanfattning = svar.map(d => `${d.date}: ${d.kommer ? "Kommer" : "Kommer ej"}${d.tid ? " kl " + d.tid : ""}`).join("\n");

  const mail = {
    from: smtpUser,
    to: [email, adminEmail],
    subject: "Bekräftelse: Sommarledighet 2025",
    text: `Hej ${namn},\n\nHär är din anmälan:\n${sammanfattning}`
  };

  await transporter.sendMail(mail);
  return { success: true };
});
