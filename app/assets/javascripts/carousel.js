$(document).on('turbolinks:load', function () {
  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    autoplay: true,
    nav:false,
    responsive:{
        0:{
            items:1,
            autoplay: false
        },
        600:{
            items:1,
            autoplay: false
        },
        1000:{
            items:1
        }
    }
  })
});

