"use strict";
const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

const removeClass = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const addClass = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
showModal.forEach((ele) => {
  // show the modal
  ele.addEventListener("click", removeClass);
});
// close the modal
closeModal.addEventListener("click", addClass);

// close the modal by clicking Escape button
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") addClass();
});

// close the modal by clicking the overlay
overlay.addEventListener("click", function () {
  if (!modal.classList.contains("hidden")) addClass();
});
