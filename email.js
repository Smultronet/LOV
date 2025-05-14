// email.js
async function skickaBekraftelse(parentName, parentEmail, youthName, summary) {
  try {
    // Ett mejl: till föräldern, med kollegor i CC
    await emailjs.send("service_1n11tf8", "template_o3xaajo", {
      from_email:   "no-reply@stockholm.se",
      to_email:     parentEmail,
      cc_emails:    "karim.nawar@stockholm.se, tina.han.yeung@stockholm.se, marie.faniadis@stockholm.se",
      parent_name:  parentName,
      parent_email: parentEmail,
      child_name:   youthName,
      summary:      summary
    });
    return true;
  } catch (err) {
    console.error("Fel vid e-postutskick:", err);
    return false;
  }
}
