// email.js - Hanterar e-post med EmailJS
(function(){
  emailjs.init("f7lLnWl2EadQdRwwt");
})();

async function skickaBekraftelse(namn, email, sammanfattning) {
  const data = {
    parent_name:  namn,
    parent_email: email,
    summary:      sammanfattning
  };

  try {
    await emailjs.send("service_1n11tf8", "template_o3xaajo", data);
    await emailjs.send("service_1n11tf8", "template_su5ag0n", data);
    return true;
  } catch (error) {
    console.error("Fel vid e-postutskick:", error);
    return false;
  }
}
