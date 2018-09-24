 $(document).ready(function () {
     // sticky navigate
     $('.js--sticky-start-point').waypoint(function (direction) {
         if (direction == "down") {
             $('nav').addClass('sticky-nav');
             $('nav').addClass('animated fadeIn')
         } else {
             $('nav').removeClass('sticky-nav');
         }
     }, {
         offset: '10px'
     })



     //burger menu
     $('.ion-navicon-round').click(function(){
         var icon = $('#mob-icon');
         if(icon.hasClass('ion-navicon-round')){
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
            $( ".main-nav" ).slideToggle(200);
         }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            $( ".main-nav" ).slideToggle(200);
         }
      

     });

     // animted css
     $('.js--wp-animate-fade1').waypoint(function (direction) {
         $('.js--wp-animate-fade1').addClass('animated fadeIn')
     }, {
         offset: '50%'
     })


     $('.js--wp-animate-fade2').waypoint(function (direction) {
         $('.js--wp-animate-fade2').addClass('animated fadeIn')
     }, {
         offset: '50%'
     })

     $('.js--wp-animate-fadeUp').waypoint(function (direction) {
         $('.js--wp-animate-fadeUp').addClass('animated fadeInUp')
     }, {
         offset: '50%'
     })


     $('.js--wp-animate-shake').waypoint(function (direction) {
         $('.js--wp-animate-shake').addClass('animated bounce')
     }, {
         offset: '50%'
     })


     
     //scroll down
     // Select all links with hashes
     $('a[href*="#"]')
         // Remove links that don't actually link to anything
         .not('[href="#"]')
         .not('[href="#0"]')
         .click(function (event) {
             // On-page links
             if (
                 location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                 location.hostname == this.hostname
             ) {
                 // Figure out element to scroll to
                 var target = $(this.hash);
                 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                 // Does a scroll target exist?
                 if (target.length) {
                     // Only prevent default if animation is actually gonna happen
                     event.preventDefault();
                     $('html, body').animate({
                         scrollTop: target.offset().top
                     }, 1000, function () {
                         // Callback after animation
                         // Must change focus!
                         var $target = $(target);
                         //$target.focus();  this will couse outline border
                         if ($target.is(":focus")) { // Checking if the target was focused
                             return false;
                         } else {
                             $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                             //$target.focus(); // Set focus again   this will couse outline border
                         };
                     });
                 }
             }
         });




 });