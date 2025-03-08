

$(function () {
  $('.gallery__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.gallery-list-left',
    nextArrow: '.gallery-list-right',
  });
});


$(function () {
  $('.reviews-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.reviews-list-left',
    nextArrow: '.reviews-list-right',
  });
});







