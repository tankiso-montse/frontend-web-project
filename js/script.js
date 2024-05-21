const modal = document.getElementById("modal-form");
const openModal = document.getElementById("contact-btn");
const closeModal = document.getElementById("submit-btn");
var submissionMessage = document.getElementById("submission-message");
const form = document.getElementById("contact-form");

openModal.addEventListener("click", () => {
  modal.showModal();
  console.log("showing modal");
});

closeModal.addEventListener("click", (event) => {
  if (form.checkValidity()) {
    event.preventDefault()
    submissionMessage.style.display = "block"
    setTimeout(() => {
      console.log("its working")
      modal.close();
    }, 4000);
  }
  
  
});

document.getElementById('menu-icon').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('show-menu');
});