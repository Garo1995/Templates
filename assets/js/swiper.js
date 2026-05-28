
let sampleSmSwiper = new Swiper(".sample-sm-slid", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".sample-pagination",
    clickable: true,
  },
  breakpoints: {
    '767': {
      spaceBetween: 10,
      slidesPerView: 4,
    },
    '570': {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true
    },
    '320': {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true
    },
  },
});
let sampleBigSwiper = new Swiper(".sample-big-slid", {
  loop: true,
  spaceBetween: 10,

  thumbs: {
    swiper: sampleSmSwiper,
  },
});


const technicalSwiper = new Swiper(".technical-slider", {
  spaceBetween: 10,
  slidesPerView:2,
  pagination: {
    el: ".technical-pagination",
    clickable: true,
  },

  breakpoints: {
    '767': {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '570': {

      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '320': {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

const previewSwiper = new Swiper(".preview-swiper", {
  spaceBetween: 9,
  slidesPerView:4,
  pagination: {
    el: ".preview-pagination",
    clickable: true,
  },

  breakpoints: {
    '1020': {
      slidesPerView: 4,
      spaceBetween: 9,
      enabled: false,

    },
    '768': {
      slidesPerView: 2,
      spaceBetween: 9,
      enabled: false,

    },
    '767': {
      slidesPerView: 2,
      spaceBetween: 9,
      enabled: true,

    },
    '570': {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 10,
      enabled: true,

    },
    '320': {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      enabled: true,

    },
  },
});

const simiSwiper = new Swiper(".similar-templates-slider", {
  spaceBetween: 10,
  slidesPerView:3,
  pagination: {
    el: ".similar-pagination",
    clickable: true,
  },

  breakpoints: {
    '1020': {
      spaceBetween: 10,
      slidesPerView:3,
    },
    '767': {
      spaceBetween: 10,
      slidesPerView:2,
    },
    '640': {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '320': {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});
