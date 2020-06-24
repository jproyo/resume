jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    $(".details").hide();

    $(".details-more").click(function(e) {
      e.preventDefault();
      $(this).hide();
      $(this).siblings(".details").show();
    });

    $(".details-less").click(function(e){
      e.preventDefault();
      $(this).parent().siblings(".details-more").show();
      $(this).parent().hide();
    });


    $(".exp-old").hide();
    $(".exp-less").hide();

    $(".exp-more").click(function(e) {
      e.preventDefault();
      $(this).hide();
      $(".exp-old").show();
      $(".exp-less").show();
    });

    $(".exp-less").click(function(e){
      e.preventDefault();
      $(".exp-more").show();
      $(".exp-old").hide();
      $(this).hide();
    });


});
