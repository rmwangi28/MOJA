//Logic for the modal
document.addEventListener("DOMContentLoaded", function () {
  const textButton = document.querySelector(".gallery-item .text");
  const modal = document.querySelector(".gallery-item .model-content");
  const closeBtn = document.querySelector(".gallery-item .close-button");

  textButton.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});