// ==============Software Active Button js =========
const softwareAll = document.querySelectorAll(".software-item");

softwareAll.forEach((softwareSelect) => {
  softwareSelect.addEventListener("click", () => {
    softwareAll.forEach((newbtn) => newbtn.classList.remove("active"));
    softwareSelect.classList.add("active");
  });
});

// =============Software Active Button ========

// =============Filter Category Tag Check ========
const tagFilters = document.querySelectorAll(".tag-filter .post-tag");
const postLists = document.querySelectorAll(".post-container .post-listing");

tagFilters.forEach((tagFilter) => {
  tagFilter.onclick = function () {
    //active
    tagFilters.forEach((tagFilter) => {
      tagFilter.className = "post-tag";
    });
    tagFilter.className = "post-tag active";

    //Filter
    const value = tagFilter.textContent;
    postLists.forEach((postList) => {
      postList.style.display = "none";
      if (
        postList.getAttribute("data-filter") == value.toLowerCase() ||
        value == "All"
      ) {
        postList.style.display = "block";
      }
    });
  };
});

// ================ Filter Category Tag Check End ======
