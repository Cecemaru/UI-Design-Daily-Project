// ==============Software Active Button js =========
const softwareAll = document.querySelectorAll(".software-item");

softwareAll.forEach((softwareSelect) => {
  softwareSelect.addEventListener("click", () => {
    softwareAll.forEach((newbtn) => newbtn.classList.remove("active"));
    softwareSelect.classList.add("active");
  });
});

// =============Software Active Button ========
