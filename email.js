// email.js
async function skickaBekraftelse(parentName, parentEmail, youthName, summary) {
  // 1) Skicka först till föräldern
  try {
    await emailjs.send("service_1n11tf8", "template_o3xaajo", {
      from_email:   "no-reply@stockholm.se",
      to_email:     parentEmail,
      parent_name:  parentName,
      parent_email: parentEmail,
      child_name:   youthName,
      summary:      summary
    });
  } catch (err) {
    console.error("Fel vid föräldrabekräftelse:", err);
    return false;
  }

  // 2) Skicka ett mejl vardera till kollegorna
  const colleagues = [
    "karim.nawar@stockholm.se",
    "tina.han.yeung@stockholm.se",
    "marie.faniadis@stockholm.se"
  ];
  try {
    await Promise.all(colleagues.map(addr =>
      emailjs.send("service_1n11tf8", "template_su5ag0n", {
        from_email:   "no-reply@stockholm.se",
        to_email:     addr,
        parent_name:  parentName,
        parent_email: parentEmail,
        child_name:   youthName,
        summary:      summary
      })
    ));
    return true;
  } catch (err) {
    console.error("Fel vid intern notis:", err);
    return false;
  }
}
