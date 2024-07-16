document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.createElement("button");
  darkModeToggle.textContent = "Modo Oscuro";
  darkModeToggle.classList.add("btn", "btn-secondary", "ms-2");
  document.querySelector(".navbar").appendChild(darkModeToggle);

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  //Alerta formulario enviado
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulario enviado");
  });
});
