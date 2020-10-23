(function ($, window, document) {

  function servicesSlider(){
    $('.js_services_slider').owlCarousel({
      loop:true,
    lazyLoad:true,
      nav:false,
      dots: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          }
      }
  })
  }

  function advantagesSlider(){
    $('.js_advantages_slider').owlCarousel({
      loop:true,
    lazyLoad:true,
      nav:false,
      dots: true,
      responsive:{
          0:{
              items: 1
          }
      }
  })
  }

  function reviewsSlider(){
    $('.js_reviews_slider').owlCarousel({
      loop:true,
    lazyLoad:true,
      nav:false,
      dots: true,
      responsive:{
          0:{
              items: 1
          }
      }
  })
  }


  $(() => {
    //show content after loaded page
    $("body").css("opacity", "1");
    //Activate sliders if device < tablets
    if($(window).width() < 960){
      servicesSlider();
      advantagesSlider();
      reviewsSlider();
    }
  });
})(window.jQuery, window, document);
