document.addEventListener('DOMContentLoaded', () => {
  // слайдеры на мобилке
  let rotoSlider = null;
  let complaintsSlider = null;
  let advantagesProfilesSlider = null;
  let provedalSlider = null;
  let balconiesInfoSlider = null;
  window.addEventListener("resize", () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(initMobileSliders, 250);
  });

  function initMobileSliders() {
    initRotoSlider();
    initComplaintsSlider();
    initAdvantagesProfilesSlider();
    initProvedalSlider();
    initBalconiesInfoSlider();
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

  function initProvedalSlider() {
    if (provedalSlider && !(window.innerWidth < 768)) {
      provedalSlider.destroy(true, true);
      provedalSlider = null;
    }

    if (window.innerWidth < 768 && !provedalSlider) {
      provedalSlider = new Swiper(".provedal__slider .provedal__slider-swiper", {
        spaceBetween: 15,
        slidesPerView: 1.14,
        pagination: {
          el: ".provedal__slider .swiper-pagination",
          type: "bullets",
          dynamicBullets: true,
        },
      });
    }
  }

  function initBalconiesInfoSlider() {
    if (balconiesInfoSlider && !(window.innerWidth < 768)) {
      balconiesInfoSlider.destroy(true, true);
      balconiesInfoSlider = null;
    }
    if (window.innerWidth < 768 && !balconiesInfoSlider) {
      balconiesInfoSlider = new Swiper(".balconies-info__slider .balconies-info__slider-swiper", {
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: {
          el: ".balconies-info__slider .swiper-pagination",
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

  const sliderSertificate = new Swiper(".sertificate__slider .sertificate__slider-swiper", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".sertificate__slider .slider-nav--next",
      prevEl: ".sertificate__slider .slider-nav--prev",
    },
    pagination: {
      el: ".sertificate__slider .swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 320px
      200: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    },
  });

  const sliderHandles = new Swiper(".handles__content-slider .handles__content-slider-swiper", {
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
        nextEl: ".handles__content-slider .slider-nav--next",
        prevEl: ".handles__content-slider .slider-nav--prev",
      },
      pagination: {
        el: ".handles__content-slider .swiper-pagination",
        type: "bullets",
        dynamicBullets: true,
        clickable: true,
      },
    },
  );

  const designOknaSlider = new Swiper(".design-okna__item-swiper", {
    spaceBetween: 16,
    pagination: {
      el: ".design-okna__item-slider .swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      200: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });

  const reviewsSlider = new Swiper(".reviews__slider-swiper", {
    spaceBetween: 20,
    pagination: {
      el: ".reviews__slider .swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".reviews__slider .slider-nav--next",
      prevEl: ".reviews__slider .slider-nav--prev",
    },
    breakpoints: {
      // when window width is >= 320px
      200: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  const workSlider = new Swiper(".s-works__slider-swiper", {
    spaceBetween: 16,
    pagination: {
      el: ".s-works__slider .swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".s-works__slider .slider-nav--next",
      prevEl: ".s-works__slider .slider-nav--prev",
    },
    breakpoints: {
      // when window width is >= 320px
      200: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });



  function profilesTab() {
    const allProfileTabs = document.querySelectorAll(".profiles-tab__slider");
    allProfileTabs.forEach((slider, i) => {
      slider.classList.add(`profiles-tab__slider--${i}`);

      const profilesTabSlider = new Swiper(slider.querySelector(".profiles-tab__slider-swiper"), {
        spaceBetween: 60,
        threshold: 50,
        longSwipesRatio: 0.5,
        pagination: {
          el: `.profiles-tab__slider--${i} .swiper-pagination`,
          type: "bullets",
          dynamicBullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: `.profiles-tab__slider--${i} .slider-nav--next`,
          prevEl: `.profiles-tab__slider--${i} .slider-nav--prev`,
        },
        breakpoints: {
          // when window width is >= 320px
          200: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        },
      });
    });
  }
  profilesTab();

  function glassPortfolio() {
    const allSliders = document.querySelectorAll(".glass-works__slider");
    allSliders?.forEach((slider, i) => {
      slider.classList.add(`glass-works__slider--${i}`);
      const thumbs = slider.querySelector(".glass-works__thumbs");
      const sliderMain = slider.querySelector(".glass-works__slider-swiper");
      const glassSliderThumbs = new Swiper(thumbs, {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          // when window width is >= 320px
          200: {
            spaceBetween: 15,
          },
          768: {
            spaceBetween: 20,
          },
        },
      });
      const glassSlider = new Swiper(sliderMain, {
        spaceBetween: 0,
        pagination: {
          el: `.glass-works__slider--${i} .swiper-pagination`,
          type: "bullets",
          dynamicBullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: `.glass-works__slider--${i} .slider-nav--next`,
          prevEl: `.glass-works__slider--${i} .slider-nav--prev`,
        },
        thumbs: {
          swiper: glassSliderThumbs,
        },
      });
    });
  }
  glassPortfolio();

  const articlesSlider = new Swiper(".s-articles__slider-swiper", {
    spaceBetween: 20,
    pagination: {
      el: ".s-articles__slider .swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".s-articles__slider .slider-nav--next",
      prevEl: ".s-articles__slider .slider-nav--prev",
    },
    breakpoints: {
      // when window width is >= 320px
      200: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  function workSliders() {
    const allWork = document.querySelectorAll(".work__slider");
    allWork?.forEach((work, i) => {
      work.classList.add(`work__slider--${i}`);
      const workSlider = new Swiper(work.querySelector(".work__slider-swiper"), {
        spaceBetween: 0,
        pagination: {
          el: `.work__slider--${i} .swiper-pagination`,
          type: "bullets",
          dynamicBullets: true,
          clickable: true,
        },
      });
    });
  }
  workSliders();

  const sProfilesSlider = new Swiper(".s-profiles__slider-swiper", {
    spaceBetween: 30,
    pagination: {
      el: ".s-profiles__slider .swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".s-profiles__slider .slider-nav--next",
      prevEl: ".s-profiles__slider .slider-nav--prev",
    },
    breakpoints: {
      // when window width is >= 320px
      200: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1201: {
        slidesPerView: 3,
      },
    },
  });

  window.dispatchEvent(new Event("scroll"));
});