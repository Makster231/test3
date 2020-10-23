
(function ($, window, document) {

    function goTohref(){
        $("body").on("click",".js_scroll", function(event) {
            event.preventDefault();
            var id = $(this).attr("data-href"),
                top = $(id).offset().top;
        
            $("body,html").animate({ scrollTop: top }, 500);
            });
    }
    $(() => {
      goTohref();
    });
})(window.jQuery, window, document);
