// email.js
async function skickaBekraftelse(namn, email, youth, summary) {
  const data = {
    parent_name:  namn,
    parent_email: email,
    child_name:   youth,               // NY RAD: ungdomens namn
    summary:      summary,
    from_email:   "no-reply@stockholm.se",
    cc_emails:    "admin@exempel.se, karim.nawar.stockholm@gmail.com"
  };

  try {
    // Till föräldern
    await emailjs.send("service_1n11tf8", "template_o3xaajo", {
      ...data,
      to_email: email
    });
    // Till admin
    await emailjs.send("service_1n11tf8", "template_su5ag0n", {
      ...data,
      to_email: "karim.nawar.stockholm@gmail.com"
    });
    return true;
  } catch (error) {
    console.error("Fel vid e‑postutskick:", error);
    return false;
  }
}
