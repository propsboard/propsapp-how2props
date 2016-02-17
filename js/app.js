


var app = {
    AppLoad: function(data, app){



      var slidesToShow =[
        './img/cards/how_to_props_message.png',
        './img/cards/how_to_shoutout.png',
        './img/cards/how_to_props_image.png',
      ];

      for(var i =0; i<slidesToShow.length;i++){
        $('.sliderList')
          .append($('<li>')
            .css('background-image', 'url(' + slidesToShow[i] + ')'));
      }



      setTimeout(function(){
        $('.how2slider').unslider({
          autoplay: true,
          delay: 18000,
          nav: false,
          arrows: false
        });
      }, 100);
    }
  };
jQuery(document).load(function($) {






});