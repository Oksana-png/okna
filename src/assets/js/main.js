document.addEventListener('DOMContentLoaded', () => {
  // мобильное меню
  function menuMobile() {
    const burger = document.querySelector(".header-fixed__burger");
    const menuBurger = document.querySelector(".header-mobile");
    burger.addEventListener("click", () => {
      openMenuMobile();
    });

    document.addEventListener("click", (e) => {
      const target = e.target;
      if (
        (!target.closest(".header-mobile") &&
          menuBurger.classList.contains("active") &&
          !target.closest(".header-fixed__burger")) ||
        (target.closest(".header-mobile__nav") &&
          !target.closest(".menu__list-next") &&
          !target.closest("button")) ||
        target.closest(".header-mobile__close")
      ) {
        closeMenuMobile();
      }
    });

    function closeMenuMobile() {
      menuBurger.classList.remove("active");
    }
    function openMenuMobile() {
      menuBurger.classList.add("active");
    }
  }
  menuMobile();

  // мобильное меню раскрывашки
  const btnsCatalog = document.querySelectorAll(".menu__list-next");
  btnsCatalog.forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelector(".header-mobile__nav.menu")
        .classList.toggle("next");
    });
  });

  const menuOpenDown = document.querySelector(".menu__list-sub button");
  const menuOpen = document.querySelector(".menu__list-sub");
  menuOpenDown.addEventListener("click", () => {
    menuOpen.classList.toggle("open");
  });

  // раскрытие пунктов faq и других вопросов
  function listdown() {
    const allListDowm = document.querySelectorAll(".listdown__title");
    allListDowm.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.target.closest(".listdown__item").classList.toggle("active");
      });
    });
  }

  listdown();

  // табы на всем сайте
  function tabs() {
    const allTabs = document.querySelectorAll(".tabs");
    if (!allTabs.length) return;

    allTabs.forEach((tab) => {
      const btnsTab = tab.querySelectorAll(".tabs-head__btn");
      const blocks = tab.querySelectorAll(".tabs-body__item");
      btnsTab.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          if (btn.classList.contains("active")) return;
          btnsTab.forEach((b, ind) => {
            b.classList.remove("active");
            blocks[ind].classList.remove("active");
          });
          btn.classList.add("active");
          blocks[index].classList.add("active");
        });
      });
    });
  }
  tabs();

  // маска на телефон
  function phoneMask() {
    const eventCalllback = (e) => {
      var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+_ (___) ___ __ __",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
      if (clearVal !== "false" && e.type === "blur") {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = "";
          return;
        }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
            ? ""
            : a;
      });
    };

    var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
    for (let elem of phone_inputs) {
      for (let ev of ["input", "blur", "focus"]) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  }
  phoneMask();

  // запуск галлереи фанси
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  // открытие модалок
  function openModalBtn() {
    document.addEventListener("click", (e) => {
      const btnOpenModal = e.target.closest("button[data-open-modal]");
      if (!btnOpenModal) return;
      if (btnOpenModal.dataset.openModal === "modal__work") {
        openWork(btnOpenModal);
      }
      
      e.preventDefault();
      const selectorModal = btnOpenModal.dataset.openModal;
      const modal = document.querySelector(`.${selectorModal}`);
      modal.classList.add("active");
    });
  }
  openModalBtn();

  // закрытие модалок
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.closest(".modal__body") || target.closest(".modal__close")) {
        target.closest(".modal").classList.remove("active");
      }
    });
  });

  function openWork(btn) {
    const title = btn.dataset.title;
    const text = btn.dataset.text;
    const slider = document.querySelector(".modal__work .swiper-wrapper");
    let imgs = btn.dataset.img?.split(',');
    document.querySelector(".modal__work h3").textContent = title;
    document.querySelector(".modal__work p").textContent = text;
    slider.innerHTML = "";
    imgs.forEach((img) => {
      const elem = document.createElement('div');
      elem.className = 'swiper-slide hover-img';
      elem.innerHTML = `<a href="${img}" data-fancybox="work"></a><img src="${img}" alt="${title}">`;
      slider.appendChild(elem);
    });
    workModalSlider.update();
    workModalSlider.slideTo(0, 0);
  }

  // слайдер модалка Выполненные работы
  const workModalSlider = new Swiper(".modal__work-slider-swiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      el: ".modal__work-slider .swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      clickable: true,
    },
  });

  // кнопка прокрутки вверх
  const btnScroll = document.querySelector(".btn-top");
  btnScroll?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  function scrollTop(scrollTop) {
    if (scrollTop > 500 && !btnScroll.classList.contains("active")) {
      btnScroll.classList.add("active");
    } else if (scrollTop <= 500 && btnScroll.classList.contains("active")) {
      btnScroll.classList.remove("active");
    }
  }

  // кнопка ВВЕРХ
  window.addEventListener("scroll", () => {
    scrollTop(window.scrollY);
  });

});