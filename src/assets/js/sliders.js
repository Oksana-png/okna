document.addEventListener('DOMContentLoaded', () => {
  

  // слайдеры на мобилке
  let rotoSlider = null;
  let complaintsSlider = null;
  let advantagesProfilesSlider = null;
  window.addEventListener("resize", () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(initMobileSliders, 250);
  });

  function initMobileSliders() {
    initRotoSlider();
    initComplaintsSlider();
    initAdvantagesProfilesSlider();
  }

  initMobileSliders();

  function initRotoSlider() {
    if (rotoSlider && !(window.innerWidth < 768)) {
      rotoSlider.destroy(true, true);
      rotoSlider = null;
    }

    if (window.innerWidth < 768 && !rotoSlider) {
      rotoSlider = new Swiper(".roto__image-slider .roto__image-slider-swiper", {
      spaceBetween: 0,
      pagination: {
        el: ".roto__image-slider .swiper-pagination",
        type: "bullets",
        dynamicBullets: true
      },
    });
    }
  }

  function initComplaintsSlider() {
    if (complaintsSlider && !(window.innerWidth < 768)) {
      complaintsSlider.destroy(true, true);
      complaintsSlider = null;
    }

    if (window.innerWidth < 768 && !complaintsSlider) {
      complaintsSlider = new Swiper(".complaints__slider-swiper", {
        spaceBetween: 20,
        slidesPerView: 1.14,
        pagination: {
          el: ".complaints__slider .swiper-pagination",
          type: "bullets",
          dynamicBullets: true,
        },
      });
    }
  }

  function initAdvantagesProfilesSlider() {
    if (advantagesProfilesSlider && !(window.innerWidth < 768)) {
      advantagesProfilesSlider.destroy(true, true);
      advantagesProfilesSlider = null;
    }

    if (window.innerWidth < 768 && !advantagesProfilesSlider) {
      advantagesProfilesSlider = new Swiper(".advantages-profiles__slider-swiper", {
        spaceBetween: 15,
        slidesPerView: 1.41,
        pagination: {
          el: ".advantages-profiles__slider .swiper-pagination",
          type: "bullets",
          dynamicBullets: true,
        },
      });
    }
  }


  const sliderPortal = new Swiper(".paket-slider__slider .paket-slider__slider-swiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
      nextEl: ".paket-slider__slider .slider-nav--next",
      prevEl: ".paket-slider__slider .slider-nav--prev",
    },
    pagination: {
      el: ".paket-slider__slider .swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      clickable: true
    },
    
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      },
      580: {
        slidesPerView: 1.81,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    }
  });



  window.dispatchEvent(new Event("scroll"));
});