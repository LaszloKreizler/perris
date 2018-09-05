// BXSLIDER

$(document).ready(function(){
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        randomStart: true
    });
    
    /*$('#inicio').on('click', function() {
        $('.main').load('index.html');
        return false;
    });*/

  
// MENU 
    $('#quienes-somos').on('click', function() {
        $('.main').load('quienes-somos.html#h2');
        return false;
    });

    $('#servicios').on('click', function() {
        $('.main').load('servicios.html');
        return false;
    });

    $('#contactenos').on('click', function() {
        $('.main').load('contactenos.html');
        return false;
    });

  });

  //FancyBox Galería

  $(".img-galeria").fancybox({
    openEffect : 'elastic',   //'fade', 'elastic'
    closeEffect	: 'elastic',
    openSpeed:'normal', //ms, slow, normal, fast (default 250ms)
    closeSpeed:'normal',
    helpers : {
      title : {
         type : 'inside' //'float', 'inside', 'outside' or 'over'
      },
      overlay : {
        closeClick : true  // if true, se cierra al hacer click fuera de la imagen
      }
  },
  padding:11
});