"use strict";

(function ($, window, document) {
  jQuery.validator.setDefaults({
    errorElement: "label",
    errorClass: "error",
    focusInvalid: false,
    errorPlacement: function errorPlacement(error, element) {
      $(element).closest(".form-group").append(error);
    },
    highlight: function highlight(element, errorClass, validClass) {
      var fieldWrap = $(element).closest(".form-group");
      fieldWrap.addClass("has-error");
      $(element).addClass("error");
    },
    unhighlight: function unhighlight(element, errorClass, validClass) {
      $(element).closest(".form-group").removeClass("has-error");
      $(element).removeClass("error");
    }
  });
  jQuery.validator.addMethod('emailCustom', function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
  }, 'Please enter a valid email address');

  function validationConfig(form) {
    form.validate({
      errorElement: 'label',
      errorClass: 'error',
      focusInvalid: false,
      errorPlacement: function errorPlacement(error, element) {
        $(element).closest('.form-group').append(error);
      },
      highlight: function highlight(element, errorClass, validClass) {
        var fieldWrap = $(element).closest('.form-group');
        fieldWrap.addClass('has-error');
        $(element).addClass('error');
      },
      unhighlight: function unhighlight(element, errorClass, validClass) {
        $(element).closest('.form-group').removeClass('has-error');
        $(element).removeClass('error');
      },
      rules: {
        Email: {
          required: true,
          emailCustom: true
        }
      }
    });
  }

  function sendForm() {
    $('.js_sign_form').on("submit", function (e) {
      e.preventDefault();
      var $this = $(this);
      validationConfig($this);
      var isValid = $this.valid();

      if (!isValid) {
        alert("not valid form");
        return;
      } else {
        alert("Valid form");
      }
    });
  }

  $(function () {
    sendForm();
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function goTohref() {
    $("body").on("click", ".js_scroll", function (event) {
      event.preventDefault();
      var id = $(this).attr("data-href"),
          top = $(id).offset().top;
      $("body,html").animate({
        scrollTop: top
      }, 500);
    });
  }

  $(function () {
    goTohref();
  });
})(window.jQuery, window, document);

$(document).ready(function () {
  if (document.querySelector('.js_main-page')) {
    var AnimationScene = function AnimationScene(section, tween, durationTime, offsetValue) {
      var scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.55,
        duration: durationTime,
        offset: offsetValue
      }).reverse(true).setTween(tween).addTo(controller);
    }; // header


    var controller = new ScrollMagic.Controller();

    if (document.querySelector('.js_header_bottom')) {
      var header = new TimelineMax();
      header.from('.js_header_bottom-anim--1', 0.3, {
        x: '-40%',
        opacity: 0
      });
      header.from('.js_header_bottom-anim--2', 0.3, {
        x: '-40%',
        opacity: 0
      });
      header.from('.js_header_bottom-anim--3', 0.3, {
        x: '-40%',
        opacity: 0
      });
      AnimationScene('.js_header_bottom', header);
    } // services


    if ($(window).width() > 640) {
      if (document.querySelector('.js_services_slider')) {
        var services = new TimelineMax();
        services.from('.js_services_slider-anim--1', 0.3, {
          y: '40%',
          opacity: 0
        });
        services.from('.js_services_slider-anim--2', 0.3, {
          y: '40%',
          opacity: 0
        });
        services.from('.js_services_slider-anim--3', 0.3, {
          y: '40%',
          opacity: 0
        });
        services.from('.js_services_slider-anim--4', 0.3, {
          y: '40%',
          opacity: 0
        });
        services.from('.js_services_slider-anim--5', 0.3, {
          y: '40%',
          opacity: 0
        });
        AnimationScene('.js_services_slider', services);
      }
    } else {
      if (document.querySelector('.js_services_slider')) {
        var _services = new TimelineMax();

        _services.from('.js_services_slider', 0.3, {
          x: '-40%',
          opacity: 0
        });

        AnimationScene('.js_services_slider', _services);
      }
    } // advantages


    if ($(window).width() > 640) {
      if (document.querySelector('.js_advantages_container')) {
        var advantages = new TimelineMax();
        advantages.from('.js_advantages_container-anim--1', 0.3, {
          x: '-40%',
          opacity: 0
        });
        advantages.from('.js_advantages_container-anim--3', 0.3, {
          y: '40%',
          opacity: 0
        });
        advantages.from('.js_advantages_container-anim--4', 0.3, {
          y: '40%',
          opacity: 0
        });
        advantages.from('.js_advantages_container-anim--5', 0.3, {
          y: '40%',
          opacity: 0
        });
        AnimationScene('.js_advantages_container', advantages);
      }
    } else {
      if (document.querySelector('.js_services_slider')) {
        var _advantages = new TimelineMax();

        _advantages.from('.js_advantages_container-anim--1', 0.3, {
          x: '-40%',
          opacity: 0
        });

        _advantages.from('.js_advantages_container-anim--2', 0.3, {
          x: '40%',
          opacity: 0
        });

        AnimationScene('.js_advantages_container', _advantages);
      }
    } // join


    if (document.querySelector('.js_join_container')) {
      var join = new TimelineMax();
      join.from('.js_join_container-anim--1', 0.3, {
        x: '-40%',
        opacity: 0
      });
      join.from('.js_join_container-anim--2', 0.3, {
        y: '40%',
        opacity: 0
      });
      AnimationScene('.js_join_container', join);
    } // reviews


    if ($(window).width() > 640) {
      if (document.querySelector('.js_reviews_container')) {
        var reviews = new TimelineMax();
        reviews.from('.js_reviews_container-anim--1', 0.3, {
          y: '-40%',
          opacity: 0
        });
        reviews.from('.js_reviews_container-anim--3', 0.3, {
          x: '-40%',
          opacity: 0
        });
        reviews.from('.js_reviews_container-anim--4', 0.3, {
          y: '40%',
          opacity: 0
        });
        reviews.from('.js_reviews_container-anim--5', 0.3, {
          x: '40%',
          opacity: 0
        });
        AnimationScene('.js_reviews_container', reviews);
      }
    } else {
      if (document.querySelector('.js_reviews_container')) {
        var _reviews = new TimelineMax();

        _reviews.from('.js_reviews_container-anim--1', 0.3, {
          x: '-40%',
          opacity: 0
        });

        _reviews.from('.js_reviews_container-anim--2', 0.3, {
          y: '40%',
          opacity: 0
        });

        AnimationScene('.js_reviews_container', _reviews);
      }
    } // sign


    if (document.querySelector('.js_sign_container')) {
      var sign = new TimelineMax();
      sign.from('.js_sign_container-anim--1', 0.3, {
        x: '-40%',
        opacity: 0
      });
      sign.from('.js_sign_container-anim--2', 0.3, {
        x: '40%',
        opacity: 0
      });
      AnimationScene('.js_sign_container', sign);
    }
  }
});

(function ($, window, document) {
  function servicesSlider() {
    $('.js_services_slider').owlCarousel({
      loop: true,
      lazyLoad: true,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        }
      }
    });
  }

  function advantagesSlider() {
    $('.js_advantages_slider').owlCarousel({
      loop: true,
      lazyLoad: true,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1
        }
      }
    });
  }

  function reviewsSlider() {
    $('.js_reviews_slider').owlCarousel({
      loop: true,
      lazyLoad: true,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1
        }
      }
    });
  }

  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1"); //Activate sliders if device < tablets

    if ($(window).width() < 960) {
      servicesSlider();
      advantagesSlider();
      reviewsSlider();
    }
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
