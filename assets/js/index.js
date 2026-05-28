
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  const headerTop = document.querySelector("header");
  if (window.scrollY > 0) {
    headerTop.classList.add("moved");
  } else {
    headerTop.classList.remove("moved");
  }
});


const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
document.documentElement.setAttribute("data-theme", currentTheme);
updateImages(currentTheme);

function updateImages(theme) {
  const images = document.querySelectorAll("img[data-light][data-dark]");
  images.forEach(img => {
    img.src = theme === "dark" ? img.dataset.dark : img.dataset.light;
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate-item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = [...items].indexOf(entry.target);
        entry.target.style.transitionDelay = `${0.15}s`;
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }),
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
});


document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".fade-left, .fade-right, .fade-top, .fade-bottom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
        
        }
      });
    },
    {
      threshold: 0.15, 
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
});



$(function () {
  let Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    let links = this.el.find(".link");
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    let $el = e.data.el;
    let $this = $(this),
      $next = $this.next();

    $next.slideToggle();

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp();
    }

    if (!$this.hasClass("open")) {
      $(".link").removeClass("open");
      $this.addClass("open");
    } else {
      $this.removeClass("open");
    }
  };
  let accordion = new Accordion($("#accordion"), false);

});


document.addEventListener('DOMContentLoaded', () => {
  const languageModalBlock = document.querySelector('.language-modal');
  const languageModalWrapper = document.querySelector('.language-modal-wrapper');
  const languageModalCloseButton = document.querySelector('.language-modal .icon-close');
  const languageOpenButtons = document.querySelectorAll('.language-select-wrapper');
  const languageItems = document.querySelectorAll('.language-sub-item');

  if (
    !languageModalBlock ||
    !languageModalWrapper ||
    !languageOpenButtons.length ||
    !languageItems.length
  ) {
    return;
  }

  const closeLanguageModal = () => {
    languageModalBlock.classList.remove('active');

    languageOpenButtons.forEach((languageOpenButton) => {
      languageOpenButton.classList.remove('active');
      document.body.style.overflow = 'unset'
    });
  };

  const openLanguageModal = (currentLanguageButton) => {
    languageModalBlock.classList.add('active');
    document.body.style.overflow = 'hidden'

    languageOpenButtons.forEach((languageOpenButton) => {
      languageOpenButton.classList.remove('active');
       document.body.style.overflow = 'unset'
    });

    if (currentLanguageButton) {
      currentLanguageButton.classList.add('active');
      document.body.style.overflow = 'hidden'
    }
  };

  const setActiveLanguageItem = (selectedLanguageItem) => {
    languageItems.forEach((languageItem) => {
      languageItem.classList.remove('active');
        document.body.style.overflow = 'unset'
    });

    selectedLanguageItem.classList.add('active');
     document.body.style.overflow = 'hidden'
  };

  const updateAllLanguageSelectors = (selectedLanguageItem) => {
    const selectedLanguageTextElement = selectedLanguageItem.querySelector('p');
    const selectedLanguageImageElement = selectedLanguageItem.querySelector('img');

    if (!selectedLanguageTextElement || !selectedLanguageImageElement) return;

    const selectedLanguageText = selectedLanguageTextElement.textContent.trim();
    const selectedLanguageImageSrc = selectedLanguageImageElement.getAttribute('src');
    const selectedLanguageImageAlt =
      selectedLanguageImageElement.getAttribute('alt') || selectedLanguageText;

    languageOpenButtons.forEach((languageOpenButton) => {
      const currentLanguageTextElement = languageOpenButton.querySelector('p');
      const currentLanguageImageElement = languageOpenButton.querySelector('img');

      if (currentLanguageTextElement) {
        currentLanguageTextElement.textContent = selectedLanguageText;
      }

      if (currentLanguageImageElement) {
        currentLanguageImageElement.setAttribute('src', selectedLanguageImageSrc);
        currentLanguageImageElement.setAttribute('alt', selectedLanguageImageAlt);
      }
    });
  };

  languageOpenButtons.forEach((languageOpenButton) => {
    languageOpenButton.addEventListener('click', () => {
      openLanguageModal(languageOpenButton);
    });
  });

  languageItems.forEach((languageItem) => {
    languageItem.addEventListener('click', () => {
      setActiveLanguageItem(languageItem);
      updateAllLanguageSelectors(languageItem);
      closeLanguageModal();
    });
  });

  if (languageModalCloseButton) {
    languageModalCloseButton.addEventListener('click', () => {
      closeLanguageModal();
    });
  }

  languageModalBlock.addEventListener('click', (event) => {
    if (!languageModalWrapper.contains(event.target)) {
      closeLanguageModal();
    }
  });
});



$('.open_modal').on('click', function () {
  let attr = $(this).attr('data-val');
  let modal = $('#' + attr);
  modal.removeClass('out');
  modal.fadeIn();
  $('body').addClass('body_fix');
});

$('.close').on('click', function () {

  $('body').removeClass('body_fix');
  let prt = $(this).parents('.modal');

  prt.addClass('out')
  setTimeout(function () {
    prt.fadeOut();
  }, 100);
});

$(window).on('click', function (event) {
  $('.modal').each(function () {
    let gtattr = $(this).attr('id');
    let new_mod = $('#' + gtattr);
    let md_cnt = $(new_mod).find('.modal-content');
    if (event.target === $(md_cnt)[0]) {
      setTimeout(function () {
        $(new_mod).addClass('out');
        $(new_mod).fadeOut()
      }, 100)
      $('body').removeClass('body_fix');
    }
    if (event.target === this) {
      setTimeout(function () {
        $(new_mod).addClass('out');
        $(new_mod).fadeOut()
      }, 100)
    }
  })
});



$('.language-sub-item').on('click', function () {
  $('.text-for-all').removeClass('text-for-all-block')
  $('.text-for-ru').removeClass('text-for-ru-none')
})


$('.language-sub-all').on('click', function () {
  $('.text-for-ru').addClass('text-for-ru-none')
  $('.text-for-all').addClass('text-for-all-block')
})



