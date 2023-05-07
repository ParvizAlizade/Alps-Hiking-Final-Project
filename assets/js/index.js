$('.announce').slick({
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4500,
  center:false,
  dots:false,
  cssEase: 'linear',
  easing: 'easeOutElastic',
});

$('.allreviews').slick({
  infinite: true,
  autoplay:true,
  autoplaySpeed:3000,
  speed:2000,
  slidesToShow: 4,
  slidesToScroll: 2,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});