const parent = document.querySelector(".faq-container");

parent.addEventListener("click", (event) => {
  const target = event.target;
  // Перевіряємо, чи натиснуто на елемент з класом "backdrop-heading-container" або його дочірній елемент
  if (target.closest(".backdrop-heading-container")) {
    // Знаходимо батьківський елемент ".backdrop-container"
    const backdropContainer = target.closest(".backdrop-container");
    // Знаходимо відповідні елементи всередині цього контейнера
    const bgTitle = backdropContainer.querySelector(".backdrop-text");
    const arrowIcon = backdropContainer.querySelector(".backdrop-arrow-icon");
    // Перемикаємо класи
    bgTitle.classList.toggle("is-active");
    arrowIcon.classList.toggle("is-rotate");
  }
});
