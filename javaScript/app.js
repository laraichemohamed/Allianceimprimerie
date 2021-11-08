let burger = document.querySelector(".burger");
let list = document.querySelector(".list");

burger.addEventListener("click", () => {
  list.classList.toggle("activeNav");
});

// Send EMAIL

let sendBtn = document.querySelector(".btn-submit");
const emailInput = document.querySelector("form");
sendBtn.addEventListener("click", () => {
  Email.send({
    Host: "smtp.mailtrap.io",
    UserName: "6baf9ae9e696f2",
    Password: "2b6c0258468531",
    To: "laraichemohamed@gmail.com",
    From: emailInput.elements["email"].value,
    Subject: "Demande Devis",
    body:
      emailInput.elements["msg"].value +
      "< br>" +
      emailInput.elements["nom"].value +
      "<br>" +
      emailInput.elements["prenom"].value +
      "<br>" +
      emailInput.elements["ste"].value +
      "<br>" +
      emailInput.elements["phone"].value,
  }).then((msg) => {
    alert("The Demande has been Send thank you we will replied you in 24h");
  });
});
