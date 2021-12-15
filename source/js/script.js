/* Mobile menu */

const body = document.querySelector('.page-body');
const menu = body.querySelector('.main-nav');
const menuButton = menu.querySelector('.main-nav__button');

body.classList.remove('no-js');

menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('main-nav__button--open')) {
    menu.classList.remove('main-nav--closed');
    menuButton.classList.remove('main-nav__button--open');
    menuButton.classList.add('main-nav__button--close');
  } else {
    menuButton.classList.remove('main-nav__button--close');
    menuButton.classList.add('main-nav__button--open');
    menu.classList.add('main-nav--closed');
  }
});

if (body.classList.contains('page-body--main')) {

  /* Slider price */

  const sliderPrice = document.querySelector('.price__slider');
  const sliderPriceTable = sliderPrice.querySelector('.price-table');
  const sliderPriceButtons = sliderPrice.querySelectorAll('.price__slider-button');

  const removeActiveClass = (() => {
    for (let i = 0; i < sliderPriceButtons.length; i++) {
      sliderPriceButtons[i].classList.remove('slider-buttons__item--active');
    }
  });

  sliderPriceButtons[0].addEventListener('click', () => {
    sliderPriceTable.style.transform='translateX(280px)';
    removeActiveClass();
    sliderPriceButtons[0].classList.add('slider-buttons__item--active');
  });

  sliderPriceButtons[1].addEventListener('click', () => {
    sliderPriceTable.style.transform='translateX(0)';
    removeActiveClass();
    sliderPriceButtons[1].classList.add('slider-buttons__item--active');
  });

  sliderPriceButtons[2].addEventListener('click', () => {
    sliderPriceTable.style.transform='translateX(-280px)';
    removeActiveClass();
    sliderPriceButtons[2].classList.add('slider-buttons__item--active');
  });

  const checkMediaQuery = (() => {
    if (window.innerWidth > 659) {
      sliderPriceTable.style.transform='translateX(0)';
      removeActiveClass();
      sliderPriceButtons[1].classList.add('slider-buttons__item--active');
    }
  });
  window.addEventListener('resize', checkMediaQuery);

  /* Slider reviews*/

  /*const sliderReviews = document.querySelector('.reviews__slider');
  const sliderReviewsArrowPrev = sliderReviews.querySelector('.reviews__arrow-button--left');
  const sliderReviewsArrowNext = sliderReviews.querySelector('.reviews__arrow-button--right');
  const sliderReviewsItems = sliderReviews.querySelectorAll('.reviews__item');
  const sliderReviewsButtons = sliderReviews.querySelector('.reviews__slider-buttons');

  let activeSlideIndex = 0;

  const sliderReviewsArrowNextClickHandler = (() => {
    activeSlideIndex++;
    if (activeSlideIndex >= sliderReviewsItems.length) {
      sliderReviewsItems[activeSlideIndex - 1].classList.remove('reviews__item--active');
      activeSlideIndex = 0;
      sliderReviewsItems[activeSlideIndex].classList.add('reviews__item--active');
    } else {
      sliderReviewsItems[activeSlideIndex - 1].classList.remove('reviews__item--active');
      sliderReviewsItems[activeSlideIndex].classList.add('reviews__item--active');
    }
  });
  sliderReviewsArrowNext.addEventListener('click', sliderReviewsArrowNextClickHandler);

  const sliderReviewsArrowPrevClickHandler = (() => {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      sliderReviewsItems[activeSlideIndex + 1].classList.remove('reviews__item--active');
      activeSlideIndex = sliderReviewsItems.length - 1;
      sliderReviewsItems[activeSlideIndex].classList.add('reviews__item--active');
    } else {
      sliderReviewsItems[activeSlideIndex + 1].classList.remove('reviews__item--active');
      sliderReviewsItems[activeSlideIndex].classList.add('reviews__item--active');
    }
  });
  sliderReviewsArrowPrev.addEventListener('click', sliderReviewsArrowPrevClickHandler);

  const sliderReviewsButtonClickHandler = ((evt) => {
    evt.preventDefault();
    const {target} = evt;
    if (target.tagName !== 'BUTTON') {
      return;
    }
    if (target.classList.contains('slider-buttons__item--active')) {
      target.blur();
      return;
    }

    const reviewsActiveButton = sliderReviewsButtons.querySelector('.slider-buttons__item--active');
    reviewsActiveButton.classList.remove('slider-buttons__item--active');
    const reviewsActiveSlide = sliderReviews.querySelector('.reviews__item--active');
    reviewsActiveSlide.classList.remove('reviews__item--active');

    sliderReviewsItems.forEach((item) => {
      if (item.className.includes(target.id)) {
        item.classList.add('reviews__item--active');
        target.classList.add('slider-buttons__item--active');
        target.blur();
      }
    });
  });
  sliderReviewsButtons.addEventListener('click', sliderReviewsButtonClickHandler);*/
}

if (body.classList.contains('page-body--form')) {

  /* Feedback popups */

  const feedbackForm = document.querySelector('.feedback');
  const userName = feedbackForm.querySelector('.feedback__initials-input--name');
  const userSurname = feedbackForm.querySelector('.feedback__initials-input--surname');
  const userEmail = feedbackForm.querySelector('.feedback__contacts-input--email');
  const successPopup = document.querySelector('.success-popup');
  const successPopupClose = successPopup.querySelector('.success-popup__close');
  const failurePopup = document.querySelector('.failure-popup');
  const failurePopupClose = failurePopup.querySelector('.failure-popup__close');

  feedbackForm.addEventListener('submit', (evt) => {
    if (!userName.value || !userSurname.value || !userEmail.value) {
      evt.preventDefault();
      failurePopup.classList.add('popup--show');
    } else {
      successPopup.classList.add('popup--show');
    }
  });

  successPopupClose.addEventListener('click', () => {
    successPopup.classList.remove('popup--show');
  });

  failurePopupClose.addEventListener('click', () => {
    failurePopup.classList.remove('popup--show');
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successPopup.classList.remove('popup--show');
      failurePopup.classList.remove('popup--show');
    }
  });
}
