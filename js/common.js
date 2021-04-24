$(function() {

	// BUTTON TOGGLE (Сэндвич)
  $(".toggle_mnu").click(function() {
    $(".sandwich").toggleClass("active");
  });
  $(".toggle_mnu").on('click', function(e) {
    e.preventDefault();
    $(".h-head__bottom, .h-head__content, .nav_small").slideToggle();
  });
  $(window).resize(function() {
    var wid = $(window).width();
    if(wid > 767 && $(".h-head__bottom, .h-head__content, .nav_small").is(':hidden')) {
      $(".h-head__bottom, .h-head__content, .nav_small").removeAttr('style');
    }
  });

  //CHOOSE COLOR
  $(".item__theme > span").click(function() {
    $(this).parent().find('span').removeClass('item__theme_active');
    $(this).addClass('item__theme_active');
  });

  //ITEM SORT
  $(".item-sort__item").click(function() {
    $('.item-sort__item').removeClass('item-sort__item_active');
    $(this).addClass('item-sort__item_active');
  });

  //SLIDER
  $('.header__slider').slick({
    dots: true,
    arrows: false,
    infinity: true,
  });
  $('.adv__slider').slick({
    dots: false,
    infinity: true,
    arrows: false,
    slidesToScroll: 6,
    slidesToShow: 6,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      }
    },
    ]
  });
  $('.katalog__slider').slick({
    dots: true,
    arrows: false,
    infinity: true,
  });
  //START
  // Slider | Product 
  $('.one-product__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.one-product__slider_navigation',
    arrows: false,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    fade: true,
    cssEase: 'linear'
  });
  // Slider | one-product-slider
  $('.one-product__slider_navigation').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    asNavFor: '.one-product__slider',
    focusOnSelect: true,
    centerMode: false,
    responsive: [
    {
      breakpoint: 500,
      settings: {
        arrows: false,
      }
    }
    ]
  });

  // POPUP'S (Всплывающее окно)
  $('.adv-slider__item').magnificPopup({
    mainClass: 'mfp-fade',
    type: 'image',
    gallery:{
      enabled:true
    }
  });
  $('.forgot-pass, .btn-order, .callback-link, .send-mess, .atomiz-link').magnificPopup({
    mainClass: 'mfp-fade',
  });
  $('.btn-ok-close').click(function() {
    $.magnificPopup.close();
  });
  //POPUP close btn
  $('.adv__slide').click(function() {
    $('.mfp-close').addClass('mfp-close-gallery');
  });
  $('.btn-order').click(function() {
    $('.mfp-close').addClass('mfp-close-order');
  });

  //СЧЕТЧИК
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // Аккордеон
  $(".dd-i-nav").prev().click(function() {
    $(this).parents(".i-navigation").find("ul").not(this).slideUp().prev().removeClass("i-active");
    $(this).next().not(":visible").slideDown().prev().addClass("i-active");
  });

  // SCROLL TO
  $('a[href^="#to"]').on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  // Селект
  $('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
    
    $this.addClass('sel-hidden'); 
    $this.wrap('<div class="sel"></div>');
    $this.after('<div class="sel-styled"></div>');

    var $styledsel = $this.next('div.sel-styled');
    $styledsel.text($this.children('option').eq(0).text());
    
    var $list = $('<ul />', {
      'class': 'sel-options'
    }).insertAfter($styledsel);
    
    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }
    
    var $listItems = $list.children('li');
    
    $styledsel.click(function(e) {
      e.stopPropagation();
      $('div.sel-styled.active').not(this).each(function(){
        $(this).removeClass('active').next('ul.sel-options').hide();
      });
      $(this).toggleClass('active').next('ul.sel-options').toggle();
    });
    
    $listItems.click(function(e) {
      e.stopPropagation();
      $styledsel.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
            //console.log($this.val());
          });
    
    $(document).click(function() {
      $styledsel.removeClass('active');
      $list.hide();
    });

  });


});
// LOADER (Загрущик)
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});