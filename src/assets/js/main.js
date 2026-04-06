document.addEventListener('DOMContentLoaded', () => {
  // мобильное меню
  function menuMobile() {
    const burger = document.querySelector(".header-fixed__burger");
    const menuBurger = document.querySelector(".header-mobile");
    burger.addEventListener('click', () => {
      openMenuMobile();
    });
    
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (
        (!target.closest(".header-mobile") && menuBurger.classList.contains("active") && !target.closest(".header-fixed__burger"))
        || (target.closest(".header-mobile__nav") && !target.closest('.menu__list-next') && !target.closest('button'))
        || target.closest(".header-mobile__close")
      ) {
        closeMenuMobile();
      }
    });
  
    function closeMenuMobile() {
      menuBurger.classList.remove('active');
    }
    function openMenuMobile() {
      menuBurger.classList.add("active");
    }
  }
  menuMobile();

  // мобильное меню раскрывашки
  const btnsCatalog = document.querySelectorAll(".menu__list-next");
  btnsCatalog.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector(".header-mobile__nav.menu").classList.toggle('next');
    });
  })

  const menuOpenDown = document.querySelector(".menu__list-sub button");
  const menuOpen = document.querySelector(".menu__list-sub");
  menuOpenDown.addEventListener('click', () => {
    menuOpen.classList.toggle('open');
  });


  function listdown() {
    const allListDowm = document.querySelectorAll(".listdown__title");
    allListDowm.forEach(item => {
      item.addEventListener('click', (e) => {
        e.target.closest(".listdown__item").classList.toggle('active');
      })
    });
  }

  listdown();



  
});