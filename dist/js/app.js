/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);

/*==========================================================================
Accordion
============================================================================*/
function initBenefitsAccordion() {
   const benefitsAccordionBtn = document.querySelector('.main__benefits-dropdown-title');
   const benefitsAccordionBlock = document.querySelector('.main__benefits-dropdown');

   if (!benefitsAccordionBtn || !benefitsAccordionBlock) return;

   benefitsAccordionBtn.addEventListener('click', function () {
      benefitsAccordionBlock.classList.toggle('show');
   });
}

/*---------------------------------------------------------------------------
Маска телефона
---------------------------------------------------------------------------*/
function phoneMask() {
   document.querySelectorAll("input[data-phone-mask]").forEach((input) => {
      let keyCode;

      function mask(event) {
         event.keyCode && (keyCode = event.keyCode);

         let pos = this.selectionStart;
         if (pos < 3) event.preventDefault();

         let matrix = "+7 (___) ___ __ __",
            i = 0,
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, (a) =>
               i < val.length ? val.charAt(i++) : a
            );

         i = new_value.indexOf("_");

         if (i !== -1) {
            if (i < 5) i = 3;
            new_value = new_value.slice(0, i);
         }

         let reg = matrix
            .substr(0, this.value.length)
            .replace(/_+/g, (a) => `\\d{1,${a.length}}`)
            .replace(/[+()]/g, "\\$&");

         reg = new RegExp("^" + reg + "$");

         if (
            !reg.test(this.value) ||
            this.value.length < 5 ||
            (keyCode > 47 && keyCode < 58)
         ) {
            this.value = new_value;
         }

         if (event.type === "blur" && this.value.length < 5) {
            this.value = "";
         }
      }

      input.addEventListener("input", mask);
      input.addEventListener("focus", mask);
      input.addEventListener("blur", mask);
      input.addEventListener("keydown", mask);
   });
}


/*==========================================================================
Faq
============================================================================*/
function initFaqAccordion() {
   const items = document.querySelectorAll('.main__faq-item');

   if (!items.length) return;

   items.forEach(item => {
      const content = item.querySelector('.main__faq-content');
      const btnAccord = item.querySelector('.main__faq-accordion');

      if (!content || !btnAccord) return;

      content.style.maxHeight = '0';
      content.style.overflow = 'hidden';
      content.style.transition = 'max-height 0.3s ease';

      item.addEventListener('click', () => {
         const isOpen = item.classList.contains('active');

         items.forEach(i => {
            const iContent = i.querySelector('.main__faq-content');
            const iBtn = i.querySelector('.main__faq-accordion');

            i.classList.remove('active');
            iBtn?.classList.remove('active');

            if (iContent) {
               iContent.style.maxHeight = '0';
            }
         });

         if (!isOpen) {
            item.classList.add('active');
            btnAccord.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
         }
      });
   });
}



/*==========================================================================
Reviews Sliders
============================================================================*/
function initMainReviewsSliders() {
   const sliders = document.querySelectorAll('.main__reviews-swiper');

   if (!sliders.length || typeof Swiper === 'undefined') return;

   sliders.forEach((slider) => {
      const parent = slider.closest('.main__reviews');
      if (!parent) return;

      new Swiper(slider, {
         loop: false,
         speed: 800,
         slidesPerView: 4,
         spaceBetween: 30,
         navigation: {
            nextEl: parent.querySelector('.swiper-reviews-next'),
            prevEl: parent.querySelector('.swiper-reviews-prev'),
         },
      });
   });
}

/*==========================================================================
Team Slider
============================================================================*/
function initMainTeamSliders() {
   const sliders = document.querySelectorAll('.main__team-swiper');

   if (!sliders.length || typeof Swiper === 'undefined') return;

   sliders.forEach((slider) => {
      const parent = slider.closest('.main__team');
      if (!parent) return;

      new Swiper(slider, {
         loop: false,
         speed: 800,
         slidesPerView: 4,
         spaceBetween: 30,
         navigation: {
            nextEl: parent.querySelector('.swiper-main__team-next'),
            prevEl: parent.querySelector('.swiper-main__team-prev'),
         },
      });
   });
}


/*==========================================================================
Geography Slider
============================================================================*/
function initMainGeographySliders() {
   const sliders = document.querySelectorAll('.main__geography-swiper');

   if (!sliders.length || typeof Swiper === 'undefined') return;

   sliders.forEach((slider) => {
      const parent = slider.closest('.main__geography');
      if (!parent) return;

      new Swiper(slider, {
         loop: false,
         speed: 800,
         slidesPerView: 5,
         spaceBetween: 12,
         navigation: {
            nextEl: parent.querySelector('.swiper-main__geography-next'),
            prevEl: parent.querySelector('.swiper-main__geography-prev'),
         },
      });
   });
}


/*==========================================================================
Study Slider
============================================================================*/
function initMainStudySliders() {
   const sliders = document.querySelectorAll('.main__study-swiper');

   if (!sliders.length || typeof Swiper === 'undefined') return;

   sliders.forEach((slider) => {
      const parent = slider.closest('.main__study');
      if (!parent) return;

      new Swiper(slider, {
         loop: false,
         speed: 800,
         slidesPerView: 5,
         spaceBetween: 12,
         navigation: {
            nextEl: parent.querySelector('.swiper-main__study-next'),
            prevEl: parent.querySelector('.swiper-main__study-prev'),
         },
      });
   });
}


/*==========================================================================
History slider
============================================================================*/
function initMainHistorySliders() {
   const sliders = document.querySelectorAll('.main__history-swiper');

   if (!sliders.length || typeof Swiper === 'undefined') return;

   sliders.forEach((slider) => {
      const parent = slider.closest('.main__history');

      new Swiper(slider, {
         loop: false,
         speed: 800,
         slidesPerView: 2,
         spaceBetween: 20,
         navigation: {
            nextEl: parent.querySelector('.swiper-main__history-next'),
            prevEl: parent.querySelector('.swiper-main__history-prev'),
         },
      });
   });
}


/*==========================================================================
Roadmap Sliders
============================================================================*/
function initRoadmapSliders() {
   const sliders = document.querySelectorAll('.roadmap__slider');

   if (!sliders.length || typeof Swiper === 'undefined') return;

   sliders.forEach((slider) => {
      const parent = slider.closest('.roadmap');
      if (!parent) return;

      new Swiper(slider, {
         loop: false,
         speed: 800,
         slidesPerView: 'auto',
         spaceBetween: 15,
         navigation: {
            nextEl: parent.querySelector('.roadmap__next'),
            prevEl: parent.querySelector('.roadmap__prev'),
         },
      });
   });
}


/*==========================================================================
Dropdown
============================================================================*/
function initDropdowns() {
   const dropdowns = document.querySelectorAll('.dropdown');
   if (!dropdowns.length) return;

   dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.dropdown__button');
      const buttonText = dropdown.querySelector('.dropdown__button-text');
      const list = dropdown.querySelector('.dropdown__list');
      const inputs = dropdown.querySelectorAll('input[type="radio"]');

      if (!button || !buttonText || !list) return;

      const defaultText = buttonText.textContent;

      function setValue(input) {
         const itemText = input.closest('.dropdown__item')
            ?.querySelector('.dropdown__item-text')?.textContent;

         if (itemText) {
            buttonText.textContent = itemText;
            dropdown.classList.add('has-value');
         }
      }

      function checkInitialState() {
         const checked = dropdown.querySelector('input[type="radio"]:checked');
         if (checked) {
            setValue(checked);
         } else {
            dropdown.classList.remove('has-value');
            buttonText.textContent = defaultText;
         }
      }

      checkInitialState();

      button.addEventListener('click', (e) => {
         e.stopPropagation();

         dropdowns.forEach(d => {
            if (d !== dropdown) d.classList.remove('active');
         });

         dropdown.classList.toggle('active');
      });

      inputs.forEach(input => {
         input.addEventListener('change', () => {
            if (!input.checked) return;
            setValue(input);
            dropdown.classList.remove('active');
         });
      });
   });

   document.addEventListener('click', () => {
      dropdowns.forEach(dropdown => {
         dropdown.classList.remove('active');
      });
   });
}



/*==========================================================================
Init
============================================================================*/
document.addEventListener('DOMContentLoaded', () => {
   initBenefitsAccordion();
   initFaqAccordion();
   initMainReviewsSliders();
   initMainTeamSliders();
   initMainGeographySliders();
   initMainStudySliders();
   initMainHistorySliders();
   initRoadmapSliders();
   phoneMask();
   initDropdowns();
});



const lightbox = GLightbox({});
/******/ })()
;