// var form = document.getElementById('contact-form');
// function showForm() {
//   if (form.style.display === 'none') {
//     form.style.display = 'block';
//   } else {
//     form.style.display = 'none';
//   }
// }

// document.getElementById('contact-btn').addEventListener('click', showForm);
const modal = document.getElementById("modal-form");
const openModal = document.getElementById("contact-btn");
const closeModal = document.getElementById("submit-btn");

openModal.addEventListener("click", () => {
  modal.showModal();
  console.log("showing modal");
});

closeModal.addEventListener("click", () => {
  modal.close();
});
