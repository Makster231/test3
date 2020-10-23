$(document).ready(() => {
  if (document.querySelector('.js_main-page')) {
      const controller = new ScrollMagic.Controller();

      function AnimationScene(section, tween, durationTime, offsetValue) {
          const scene = new ScrollMagic.Scene({
                  triggerElement: section,
                  triggerHook: 0.55,
                  duration: durationTime,
                  offset: offsetValue,
              })
              .reverse(true)
              .setTween(tween)
              .addTo(controller);
      }

      // header

        if (document.querySelector('.js_header_bottom')) {
          const header = new TimelineMax();
          header.from('.js_header_bottom-anim--1', 0.3, {
              x: '-40%',
              opacity: 0,
          });
          header.from('.js_header_bottom-anim--2', 0.3, {
              x: '-40%',
              opacity: 0,
          });
          header.from('.js_header_bottom-anim--3', 0.3, {
              x: '-40%',
              opacity: 0,
          });
          AnimationScene('.js_header_bottom', header);
      }


      

      // services
      if ($(window).width() > 640) {
          if (document.querySelector('.js_services_slider')) {
              const services = new TimelineMax();
              services.from('.js_services_slider-anim--1', 0.3, {
                  y: '40%',
                  opacity: 0,
              });
              services.from('.js_services_slider-anim--2', 0.3, {
                  y: '40%',
                  opacity: 0,
              });
              services.from('.js_services_slider-anim--3', 0.3, {
                  y: '40%',
                  opacity: 0,
              });
              services.from('.js_services_slider-anim--4', 0.3, {
                  y: '40%',
                  opacity: 0,
              });
              services.from('.js_services_slider-anim--5', 0.3, {
                  y: '40%',
                  opacity: 0,
              });
              AnimationScene('.js_services_slider', services);
          }
      } else {
        if (document.querySelector('.js_services_slider')) {
          const services = new TimelineMax();
          services.from('.js_services_slider', 0.3, {
              x: '-40%',
              opacity: 0,
          });
          AnimationScene('.js_services_slider', services);
      }
      }


      
      // advantages
      if ($(window).width() > 640) {
        if (document.querySelector('.js_advantages_container')) {
            const advantages = new TimelineMax();
            advantages.from('.js_advantages_container-anim--1', 0.3, {
                x: '-40%',
                opacity: 0,
            });
            advantages.from('.js_advantages_container-anim--3', 0.3, {
                y: '40%',
                opacity: 0,
            });
            advantages.from('.js_advantages_container-anim--4', 0.3, {
                y: '40%',
                opacity: 0,
            });
            advantages.from('.js_advantages_container-anim--5', 0.3, {
                y: '40%',
                opacity: 0,
            });
            AnimationScene('.js_advantages_container', advantages);
        }
    } else {
      if (document.querySelector('.js_services_slider')) {
        const advantages = new TimelineMax();
            advantages.from('.js_advantages_container-anim--1', 0.3, {
                x: '-40%',
                opacity: 0,
            });
            advantages.from('.js_advantages_container-anim--2', 0.3, {
                x: '40%',
                opacity: 0,
            });
            AnimationScene('.js_advantages_container', advantages);
    }
    }

      
      // join
        if (document.querySelector('.js_join_container')) {
            const join = new TimelineMax();
            join.from('.js_join_container-anim--1', 0.3, {
                x: '-40%',
                opacity: 0,
            });
            join.from('.js_join_container-anim--2', 0.3, {
                y: '40%',
                opacity: 0,
            });
            AnimationScene('.js_join_container', join);
        }

      
        // reviews
        if ($(window).width() > 640) {
          if (document.querySelector('.js_reviews_container')) {
              const reviews = new TimelineMax();
              reviews.from('.js_reviews_container-anim--1', 0.3, {
                  y: '-40%',
                  opacity: 0,
              });
              reviews.from('.js_reviews_container-anim--3', 0.3, {
                  x: '-40%',
                  opacity: 0,
              });
              reviews.from('.js_reviews_container-anim--4', 0.3, {
                  y: '40%',
                  opacity: 0,
              });
              reviews.from('.js_reviews_container-anim--5', 0.3, {
                  x: '40%',
                  opacity: 0,
              });
              AnimationScene('.js_reviews_container', reviews);
          }
      } else {
        if (document.querySelector('.js_reviews_container')) {
          const reviews = new TimelineMax();
          reviews.from('.js_reviews_container-anim--1', 0.3, {
                  x: '-40%',
                  opacity: 0,
              });
              reviews.from('.js_reviews_container-anim--2', 0.3, {
                  y: '40%',
                  opacity: 0,
              });
              AnimationScene('.js_reviews_container', reviews);
      }
      }
      
      // sign
        if (document.querySelector('.js_sign_container')) {
            const sign = new TimelineMax();
            sign.from('.js_sign_container-anim--1', 0.3, {
                x: '-40%',
                opacity: 0,
            });
            sign.from('.js_sign_container-anim--2', 0.3, {
                x: '40%',
                opacity: 0,
            });
            AnimationScene('.js_sign_container', sign);
        }
  



  }
});