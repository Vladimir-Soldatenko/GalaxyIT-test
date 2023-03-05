// Модальное окно
function bindModal(trigger, modal, close) {
  (trigger = document.querySelector(trigger)),
    (modal = document.querySelector(modal)),
    (close = document.querySelector(close));

  const body = document.body;

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.animation = "fade 0.5s forwards";
    modal.style.display = "flex";
    body.classList.add("locked");
  });
  close.addEventListener("click", () => {
    modal.style.animation = "fadeOut 0.5s forwards";
    body.classList.remove("locked");
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.animation = "fadeOut 0.5s forwards";
      body.classList.remove("locked");
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    }
  });
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal(".modal__btn", ".modal__wrapper", ".modal__close");
bindModal("#search", ".modal__wrapper__search", ".modal__close__search");
headerCatalog();

function headerCatalog() {
  const catalogBtnOpen = document.querySelector(".menu__item-link");
  const headerCatalog = document.querySelector(".header__catalog");
  const catalogBtnClose = document.querySelector(".header__catalog__close");
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");

  catalogBtnOpen.addEventListener("click", () => {
    if (!headerCatalog.classList.contains("active__catalog")) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");

      headerCatalog.style.animation = "fade 0.5s forwards";
      headerCatalog.classList.add("active__catalog");
    }
  });
  catalogBtnClose.addEventListener("click", () => {
    if (headerCatalog.classList.contains("active__catalog")) {
      headerCatalog.style.animation = "fadeOut 0.5s forwards";
      setTimeout(() => {
        headerCatalog.classList.remove("active__catalog");
      }, 500);
    }
  });
}
