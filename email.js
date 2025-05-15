// email.js
async function skickaBekraftelse(parentName, parentEmail, youthName, summary, kommentar) {
  const common = {
    from_email:   "no-reply@stockholm.se",
    cc_emails:    "karim.nawar@stockholm.se, tina.han.yeung@stockholm.se, marie.faniadis@stockholm.se",
    parent_name:  parentName,
    parent_email: parentEmail,
    child_name:   youthName,
    summary,
    kommentar     // skickar med kommentaren
  };

  try {
    // Till förälder + CC
    await emailjs.send("service_1n11tf8", "template_o3xaajo", {
      ...common,
      to_email: parentEmail
    });
    return true;
  } catch (err) {
    console.error("Fel vid e-postutskick:", err);
    return false;
  }
}
