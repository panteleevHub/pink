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

  const TABLET_SIZE = 659;
  const TABLE_COLUMN_SIZE = 280;
  const INITIAL_SHIFT = 0;

  const sliderPrice = document.querySelector('.price__slider');
  const sliderPriceTable = sliderPrice.querySelector('.price-table');
  const sliderPriceButtonsList = sliderPrice.querySelector('.price__slider-buttons');
  const sliderPriceButtons = sliderPrice.querySelectorAll('.price__slider-button');

  const removeActiveClass = () => {
    const sliderPriceButtonActive = sliderPriceButtonsList.querySelector('.slider-buttons__item--active');
    sliderPriceButtonActive.classList.remove('slider-buttons__item--active');
  };

  sliderPriceButtonsList.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'BUTTON') {
      const id = parseInt(evt.target.id);

      removeActiveClass();
      sliderPriceButtons[id].classList.add('slider-buttons__item--active');
      sliderPriceTable.style.transform=`translateX(${TABLE_COLUMN_SIZE - TABLE_COLUMN_SIZE * id}px)`;
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > TABLET_SIZE) {
      sliderPriceTable.style.transform=`translateX(${INITIAL_SHIFT})`;
      removeActiveClass();
      sliderPriceButtons[1].classList.add('slider-buttons__item--active');
    }
  });

  /* Slider reviews*/

  /*const sliderReviews = document.querySelector('.reviews__slider');
  const sliderReviewsArrowPrev = sliderReviews.querySelector('.reviews__arrow-button--left');
  const sliderReviewsArrowNext = sliderReviews.querySelector('.reviews__arrow-button--right');
  const sliderReviewsItems = sliderReviews.querySelectorAll('.reviews__item');
  const sliderReviewsButtons = sliderReviews.querySelector('.reviews__slider-buttons');

  let activeSlideIndex = 0;

  const sliderReviewsArrowNextClickHandler = () => {
    activeSlideIndex++;
    if (activeSlideIndex >= sliderReviewsItems.length) {
      sliderReviewsItems[activeSlideIndex - 1].classList.remove('reviews__item--active');
      activeSlideIndex = 0;
      sliderReviewsItems[activeSlideIndex].classList.add('reviews__item--active');
    } else {
      sliderReviewsItems[activeSlideIndex - 1].classList.remove('reviews__item--active');
      sliderReviewsItems[activeSlideIndex].classList.add('reviews__item--active');
    }
  };

  sliderReviewsArrowNext.addEventListener('click', sliderReviewsArrowNextClickHandler);

  const sliderReviewsArrowPrevClickHandler = () => {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      sliderReviewsItems[activeSlideIndex + 1].classList.remove('reviews__item--active');
      activeSlideIndex = sliderReviewsItems.length - 1;
      sliderReviewsItems[activeSlideIndex].classList.add('reviews__item--active');
    } else {
      sliderReviewsItems[activeSlideIndex + 1].classList.remove('reviews__item--active');
      sliderReviewsItems[activeSlideIndex].classList.add('reviews__item--active');
    }
  };

  sliderReviewsArrowPrev.addEventListener('click', sliderReviewsArrowPrevClickHandler);

  const sliderReviewsButtonClickHandler = (evt) => {
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
  };

  sliderReviewsButtons.addEventListener('click', sliderReviewsButtonClickHandler);*/
}

if (body.classList.contains('page-body--form')) {

  /* Feedback popups */

  const feedbackForm = document.querySelector('.feedback');
  const userName = feedbackForm.querySelector('.feedback__initials-input--name');
  const userSurname = feedbackForm.querySelector('.feedback__initials-input--surname');
  const userEmail = feedbackForm.querySelector('.feedback__contacts-input--email');
  const successPopup = document.querySelector('.success-popup');
  const failurePopup = document.querySelector('.failure-popup');

  feedbackForm.addEventListener('submit', (evt) => {
    if (!userName.value || !userSurname.value || !userEmail.value) {
      evt.preventDefault();
      failurePopup.classList.add('popup--show');
      addError();
    } else {
      successPopup.classList.add('popup--show');
    }
  });

  const addError = () => {
    const requiredInputs = feedbackForm.querySelectorAll('.feedback__input-required');
    for (const requiredInput of requiredInputs) {
      if (!requiredInput.value) {
        requiredInput.classList.add('feedback__input-error');
      }
    }
  };

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.success-popup__close')) {
      successPopup.classList.remove('popup--show');
    }
    if (evt.target.closest('.failure-popup__close')) {
      failurePopup.classList.remove('popup--show');
    }
    if (!evt.target.closest('.popup')) {
      successPopup.classList.remove('popup--show');
      failurePopup.classList.remove('popup--show');
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      successPopup.classList.remove('popup--show');
      failurePopup.classList.remove('popup--show');
    }
  });
}
