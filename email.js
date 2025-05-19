// email.js

/**
 * Skickar en bekräftelse:
 * - To: förälderns e-post
 * - CC: kollegorna i en enda utskickning
 */
async function skickaBekräftelse(parentName, parentEmail, youthName, summary, kommentar) {
  try {
    // Ett mejl, To=parent, CC=kollegor
    await emailjs.send("service_1n11tf8", "template_o3xaajo", {
      from_email:   "no-reply@stockholm.se",
      to_email:     parentEmail,
      cc_emails:    "karim.nawar@stockholm.se,tina.han.yeung@stockholm.se,marie.faniadis@stockholm.se",
      parent_name:  parentName,
      parent_email: parentEmail,
      child_name:   youthName,
      summary:      summary,
      kommentar:    kommentar
    });
    return true;
  } catch (err) {
    console.error("Fel vid e-postutskick:", err);
    return false;
  }
}

// Exportera om du använder ES-moduler, annars se till att den är global
// export { skickaBekräftelse };
