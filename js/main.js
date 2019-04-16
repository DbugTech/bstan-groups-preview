$(function() {
    
    "use strict";
    
    //===== Prealoader
    
    $(window).on('load', function(){
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll',function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
        $(".navbar").removeClass("sticky");
        }else{
        $(".navbar").addClass("sticky");
        }
    });
    
    
    //===== Toggle search
    
    $("li.search").on('click', function(){
        $(".search-bar").fadeToggle();
    });

    
    //===== Canvas Menu
    
    //canvas open button
    $('#canvas-open').on('click', function() {
        $('.canvas-menu').addClass('open');
    });
    
    //canvas close button
    $('#canvas-close').on('click', function() {
        $('.canvas-menu').removeClass('open');
    });
    
    
    //===== Scroll It Smooth Scroll
    
    $.scrollIt({
        topOffset: -90,
        scrollTime: 1200,
    });
    
    
    //===== Mobile Icon active
    
    $('.navbar-toggler').on('click', function(event) {
        $(this).toggleClass("active");
    });
    
    
    //====== Magnific Popup
    
    $('.Video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Counter 
    
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    
    
    //===== Testimonial Slied
    
    $('.testimonial-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        autoplay:true,
        asNavFor: '.testimonial-image',
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: false,
          }
        }
      ]
    });
    
    $('.testimonial-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text',
        dots: false,
        arrows: false,
        autoplay: true,
        fade: true,
    });


    //===== Team Slied
    
    $('.team-slied').slick({
      dots: false,
      arrows: false,
      infinite: true,
//      autoplay: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    

    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    new WOW().init();
    
    
});