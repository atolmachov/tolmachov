;(function($){
    $(function() {
        $('.humburger').on('click', function(){
         $(this).closest('nav').find('ul').toggle();
        })
    });
})(jQuery);