// email.js
async function skickaBekraftelse(namn, email, summary) {
  const baseData = {
    parent_name:  namn,
    parent_email: email,
    summary:      summary,
    from_email:   "no-reply@stockholm.se",
    cc_emails:    "admin@exempel.se, karim.nawar.stockholm@gmail.com"
  };

  try {
    // 1) Till förälder
    await emailjs.send("service_1n11tf8", "template_o3xaajo", {
      ...baseData,
      to_email: email
    });
    // 2) Till admin
    await emailjs.send("service_1n11tf8", "template_su5ag0n", {
      ...baseData,
      to_email: "karim.nawar.stockholm@gmail.com"
    });
    return true;
  } catch (error) {
    console.error("Fel vid e‑postutskick:", error);
    return false;
  }
}
