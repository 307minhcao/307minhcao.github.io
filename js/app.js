$(function() {
    // NAV MENU
    var lastScrollTop = 0;
    var isHover = false;
    $(window).on('scroll', function() {
        currentScroll = $(this).scrollTop();
        if(currentScroll < lastScrollTop) {
            // console.log('up');
        }
        else {
            // console.log('down');
        }
        lastScrollTop = currentScroll;
        if(currentScroll > 96){
          $(".header").addClass('scroll');
          $(".navbar-wrapper-desktop .masthead").addClass("scroll")
        } else {
          $(".header").removeClass('scroll');
          $(".navbar-wrapper-desktop .masthead").removeClass("scroll")
        }
    });
    // SHOW HIDE SUB-MENU
    $('.navbar-menu li > .sub-menu').parent().hover(function() {
      var submenu = $(this).children('.sub-menu');
      $(submenu).addClass('sub-menu-active');
    });
    $('.navbar-menu li > .sub-menu').parent().mouseleave(function() {
      var submenu = $(this).children('.sub-menu');
      $(submenu).removeClass('sub-menu-active');
    });
    $('.navbar-menu li > .nav-link').parent().hover(function() {
      var navlink = $(this).children('.nav-link');
      $(navlink).addClass('chevron-active');
    });
    $('.navbar-menu li > .nav-link').parent().mouseleave(function() {
      var navlink = $(this).children('.nav-link');
      $(navlink).removeClass('chevron-active');
    });
    // PRODUCT DETAIL
    $('.product-elem').hover(onHoverIn, onHoverOut);
    function onHoverIn () {
        var productDetail = $(this).children('.product-view-detail-wrapper');
        $(productDetail).addClass('active');
    }
    function onHoverOut () {
        var productDetail = $(this).children('.product-view-detail-wrapper');
        $(productDetail).removeClass('active');
    };
    // BUTTON MENU COLLAPSE
    $('#btnMenuCollapse').click(function() {
      if ($('.navbar-collapse').hasClass("show")) {
        $('.header').removeClass("show");
        $('.body-overflow').fadeOut(200);
        $('body').css("overflow-y","visible");
        $('.body-wrapper').css("filter","none");
      } else {
        $('.header').addClass("show");
        $('.body-overflow').fadeIn(200);
        $('body').css("overflow-y","hidden");
        $('.body-wrapper').css("filter","blur(5px)");
      }
    });
    $('#appleLink').click(function() {
      $('.apple-sub-menu-mobile').fadeIn(200);
    });
    $('#tableLinkApple').click(function() {
      $('#table-apple').fadeIn(200);
      $('#table-samsung').fadeOut(200);
    });
    $('#tableLinkSamsung').click(function() {
      $('#table-samsung').fadeIn(200);
      $('#table-apple').fadeOut(200);
    });
    $( ".brand-option" ).click(function() {
      var htmlString = $( this ).text();
      $('#brandName').text(htmlString)
    });
    $( "#contactUs" ).click(function() {
      alert("Our Website Has Been Completing Soon, Sorry For This Inconvenience!\nPlease Contact Us Via:\n - Email: sales@osirisparts.com\n - Phone: +1 778 953 1682");
    });
    $( ".contact-us" ).click(function() {
      alert("Our Website Has Been Completing Soon, Sorry For This Inconvenience!\nPlease Contact Us Via:\n - Email: sales@osirisparts.com\n - Phone: +1 778 953 1682");
    });
});



