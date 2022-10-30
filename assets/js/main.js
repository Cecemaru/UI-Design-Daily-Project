const wrapper = document.querySelector(".wrapper");
function menuOpen() {
  wrapper.classList.toggle("show");
}

// =============Software Active Button ========

const uiSearch = document.querySelector(".search-input");
uiSearch.addEventListener("keyup", filterUi);

function filterUi() {
  let filterValue = uiSearch.value.toLowerCase();
  const posts = document.querySelectorAll(".post-listing").forEach((post) => {
    post.innerText.toLowerCase().indexOf(filterValue) > -1
      ? (post.style.display = "")
      : (post.style.display = "none");
  });
}

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
    const tagValue = tagFilter.textContent;
    postLists.forEach((postList) => {
      postList.className = "";
      postList.style.display = "none";
      if (
        postList.getAttribute("data-tag-filter") == tagValue.toLowerCase() ||
        tagValue == "All"
      ) {
        postList.className = "post-listing select";
        postList.style.display = "block";
      }
    });
  };
});

// ================ Filter Category Tag Check End ======

// ==============Software Active Button js =========
const softwareAll = document.querySelectorAll(".software-item");
let postFilters = document.querySelectorAll(
  ".post-container .post-listing.select"
);
console.log(postFilters);
softwareAll.forEach((softwareSelect) => {
  softwareSelect.addEventListener("click", () => {
    softwareAll.forEach((newbtn) => newbtn.classList.remove("active"));
    softwareSelect.classList.add("active");

    //filter
    const softwareValue = softwareSelect.textContent;
    postFilters.forEach((postList) => {
      postList.className = "";
      postList.style.display = "none";
      if (
        postList.getAttribute("data-software-filter") ==
          softwareValue.toLowerCase() ||
        softwareValue == "All"
      ) {
        postList.className = "post-listing";
        postList.style.display = "block";
      }
    });
  });
});
