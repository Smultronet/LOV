// email.js
async function skickaBekraftelse(parentName, parentEmail, youthName, summary, kommentar) {
  const data = {
    from_email:   "no-reply@stockholm.se",
    to_email:     parentEmail,
    cc_emails:    "karim.nawar@stockholm.se, tina.han.yeung@stockholm.se, marie.faniadis@stockholm.se",
    parent_name:  parentName,
    parent_email: parentEmail,
    child_name:   youthName,
    summary:      summary,
    kommentar:    kommentar
  };

  try {
    await emailjs.send("service_1n11tf8", "template_o3xaajo", data);
    return true;
  } catch (err) {
    console.error("Fel vid e-postutskick:", err);
    return false;
  }
}
