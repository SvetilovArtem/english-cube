const swiper = new Swiper('.gallery-swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });

  const reviewsSwiper = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
  });