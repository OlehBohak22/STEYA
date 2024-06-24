const parent = document.querySelector(".faq-container");

parent.addEventListener("click", (event) => {
  const target = event.target;
  if (target.closest(".backdrop-heading-container")) {
    const backdropContainer = target.closest(".backdrop-container");
    const bgTitle = backdropContainer.querySelector(".backdrop-text");
    const arrowIcon = backdropContainer.querySelector(".backdrop-arrow-icon");
    bgTitle.classList.toggle("is-active");
    arrowIcon.classList.toggle("is-rotate");
  }
});
