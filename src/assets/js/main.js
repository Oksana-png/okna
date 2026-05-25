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

  // фиксирование меню при прокрутке
  function fixedMenu(scrollTop) {
    const menu = document.querySelector(".header-fixed");
    const menuMobile = document.querySelector(".header-mobile");
    const header = document.querySelector(".header");
    if (scrollTop > 500) {
      menu.classList.add("fixed");
      menuMobile.classList.add("fixed");
      header.classList.add("fixed");
    } else {
      menu.classList.remove("fixed");
      menuMobile.classList.remove("fixed");
      header.classList.remove("fixed");
    }
  }

  // Лупа в ширину меню
  let widthSearch = 0;
  function updateSearchWidth() {
    const wrap = document.querySelector(".header-fixed__wrapper").offsetWidth;
    const widthNav = document.querySelector(".header-nav").offsetWidth;
    const gap =
      2 /
      (wrap -
        document.querySelector(".header-fixed__btns").offsetWidth -
        185 -
        widthNav);
    widthSearch = widthNav + gap + 48 + 40;
    const styleHeaderSearch = `
    .search__input:focus {
      width: ${widthSearch}px;
    }
    @media (min-width: 768px) {
      .search:hover .search__input {
        width: ${widthSearch}px;
      }
    }`;
    document.querySelector("#header-search-style").innerHTML =
      styleHeaderSearch;
  }
  updateSearchWidth();

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
  // открытие модалки Выполненной работы
  function openWork(btn) {
    const title = btn.dataset.title;
    const text = btn.dataset.text;
    const slider = document.querySelector(".modal__work .swiper-wrapper");
    let imgs = btn.dataset.img?.split(",");
    document.querySelector(".modal__work h3").textContent = title;
    document.querySelector(".modal__work p").textContent = text;
    slider.innerHTML = "";
    imgs.forEach((img) => {
      const elem = document.createElement("div");
      elem.className = "swiper-slide hover-img";
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

  // таблица раскрывающая на мобилке
  const allSell = document.querySelectorAll(".profile-table__item");
  allSell?.forEach((sell) => {
    sell.addEventListener("click", (e) => {
      if (e.target.tagName !== "P") {
        e.target.closest(".profile-table__item").classList.toggle("active");
      }
    });
  });

  // Сравнение выделение ячеек
  const comparisonTable = document.querySelector(".comparison__table");
  if (comparisonTable) comparisonInit();
  function comparisonInit() {
    const allCell = document.querySelectorAll(
      ".comparison__body-item span:not(:first-child)",
    );
    const allBodyHead = document.querySelectorAll(
      ".comparison__body-item span:first-child",
    );
    const allHeadItem = document.querySelectorAll(".comparison__head-info");
    allCell.forEach((cell) => {
      cell.addEventListener("mouseover", () => {
        let col = cell.dataset.col;
        let row = cell.dataset.row;
        allCell.forEach((itemCell, ind) => {
          if (cell === itemCell) return;

          if (itemCell.dataset.col == col) {
            itemCell.classList.add("col-active");
          }
          if (itemCell.dataset.row == row) {
            itemCell.classList.add("row-active");
          }
        });
        allBodyHead.forEach((itemHead) => {
          if (itemHead.dataset.col == col) itemHead.classList.add("active");
        });
        allHeadItem[row - 1].classList.add("active");
      });

      cell.addEventListener("mouseout", () => {
        allCell.forEach((item) => {
          item.classList.remove("col-active", "row-active");
        });
        allBodyHead.forEach((itemHead) => itemHead.classList.remove("active"));
        allHeadItem.forEach((item) => item.classList.remove("active"));
      });
    });

    allHeadItem.forEach((item, ind) => {
      if (item.clientHeight > 45) {
        const rowAll = document.querySelectorAll(`[data-row='${ind + 1}']`);
        rowAll.forEach((rowi) => {
          rowi.style.height = `${item.clientHeight}px`;
        });
      }
    });
  }

  // кнопка ВВЕРХ
  window.addEventListener("scroll", () => {
    scrollTop(window.scrollY);
    fixedMenu(window.scrollY);
  });

  const allBtnReviews = document.querySelectorAll(".reviews__item-link");
  allBtnReviews?.forEach((btn, ind) => {
    const modalContainer = document.querySelector(".modal__reviews-container");
    const parentReview = btn.closest(".reviews__item");
    const headReview = parentReview.querySelector(".reviews__item-wrap");
    const contentReview = parentReview.querySelector(".reviews__item-content");
    const head2Review = parentReview.querySelector(".reviews__item-wrap:nth-child(2)");


    setTimeout(() => {
      if (contentReview.clientHeight < 160) {
        btn.style.display = 'none';
      }
    }, 1);


    btn.addEventListener("click", () => {
      document.querySelector('.modal__reviews').classList.add('active');

      modalContainer.innerHTML = '';
      modalContainer.appendChild(headReview.cloneNode(true));
      modalContainer.appendChild(head2Review.cloneNode(true));
      modalContainer.appendChild(contentReview.cloneNode(true));
    });
  })

  
  // function initArticleNav() {
  //   const allTitle = document.querySelectorAll('.p-article__content h3');
  //   if (!allTitle) return;
  //   const containerNav = document.querySelector(".p-article__nav");

  //   allTitle.forEach((title, index) => {
  //     title.id = `title${index}`;
  //     let link = document.createElement('a');
  //     link.textContent = title.textContent;
  //     link.classList.add('scroll-link');
  //     link.href = `#title${index}`;

  //     containerNav.appendChild(link);
  //   });
  // }
  // initArticleNav();

  // Якорные ссылки
  function initScrollLink() {
    document.querySelectorAll('.scroll-link').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const u = new URL(anchor.getAttribute("href"), location.href);
        if (u.hash && u.pathname === location.pathname) {
          e.preventDefault();
          const blockID = anchor.getAttribute("href").substr(1);
          const elem = document.getElementById(blockID);
          const scroll = getOffsetTop(elem) - window.scrollY - 150;
          window.scrollBy({
            top: scroll,
            behavior: "smooth",
          });
        }
        
      })
    })

    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      const scroll = getOffsetTop(elem)  - 150;
      
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1);
      setTimeout(() => {
        window.scrollTo({
          top: scroll,
          behavior: "smooth",
        });
      }, 50);
    }

    function getOffsetTop(element) {
      let offsetTop = 0;
      while (element) {
        offsetTop += element.offsetTop;
        element = element.offsetParent;
      }
      return offsetTop;
    }
  }
  initScrollLink();

  // Теги в статьях
  const allbtnsTag = document.querySelectorAll('.p-articles__tags span[data-filter]');
  if (allbtnsTag.length) {
    let params = new URLSearchParams(document.location.search);
    let valueArr = params.get('tag')?.split('||'); // 'tag' – это имя целевого параметра
    if (valueArr) {
      valueArr.forEach((text) => {
        document.querySelector(`[data-filter='${text}']`).classList.add('active');
      })
    }
    
    allbtnsTag.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        const queryText = target.getAttribute('data-filter');
        const url = new URL(window.location);
        const params = url.searchParams;
        const separator = '||';
        // Получаем текущее значение tag или пустую строку
        let currentTag = params.get('tag') || '';
        
        if (target.classList.contains('active')) {
          target.classList.remove('active');
          let tagArray = currentTag ? currentTag.split(separator) : [];
          const tagIndex = tagArray.indexOf(queryText);
          
          if (tagIndex > -1) {
            tagArray.splice(tagIndex, 1); // Удаляем тег
          }
          
          const newQuery = tagArray.length ? tagArray.join(separator) : '';
          if (newQuery) {
            params.set('tag', newQuery);
          } else {
            params.delete('tag'); // Удаляем параметр полностью если пусто
          }
          
        } else {
          target.classList.add('active');
          // Добавляем новое значение
          const newQuery = currentTag ? `${currentTag}${separator}${queryText}` : queryText;
          // Устанавливаем обновлённый параметр
          params.set('tag', newQuery);
        }
        
        // Обновляем URL в адресной строке
        window.history.pushState({}, '', url);
        location.reload();
      });
    });
  }

  // Слушаем событие успешной отправки формы SendIt
  document.addEventListener("si:send:success", function (e) {
    const { action, target, result, headers, Sending } = e.detail;
    const form = e.detail.target;
    const formName = form.getAttribute("data-si-form");
    const succesModal = document.querySelector('.modal__success');
    if (formName === "engineerBig" || formName === "engineer" || formName === 'aluminium') {
      succesModal.classList.add("active");
    }
  });
});