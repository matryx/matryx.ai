(function($) {
  "use strict";
  $(function(){




  /*------------------------------------------------------------------
  [Table of contents]

  1. General Function
  2. AutoHeight
  3. preloader
  4.gallery-isotop
  5. Magnific popup
  6. google map
  7. scroll top
  8. scroll-y
  9. particles js
  10. Contact Form
  11. Newsletter Subscription
  -------------------------------------------------------------------*/

    /*--------------------------------------------------------------
      1. General Function
    -------------------------------------------------------------*/

    jQuery.fn.exists = function(){return this.length>0;}

   function autoHeight() {
      var comming_contact_form = $('.comming-soon-contact-form'),
          comming_soon_map = $('#map');

          comming_soon_map.css('height', comming_contact_form.outerHeight());
    }

    function validateEmail(email) {
        var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
        return re.test(email);
    }

    autoHeight();

    $(window).on('resize',function(){
      /*--------------------------------------------------------------
        2. AutoHeight
      -------------------------------------------------------------*/
        autoHeight();
    });

    $('#nav-link__tokensale').on("click" ,function(){
      console.log('click')

      /*--------------------------------------------------------------
        3. preloader
      -------------------------------------------------------------*/
      if($('#preloader').exists()) {
        $("#preloader").fadeOut(500);
      } // End if exist

      autoHeight();

      /*--------------------------------------------------------------
        4.gallery-isotop
      --------------------------------------------------------------*/
      if($('#portfolio-items').exists()) {
        var $container = $('#portfolio-items'),
            colWidth = function () {
              var w = $container.width(),
                columnNum = 1,
                columnWidth = 0;
              if (w > 1200) {
                columnNum  = 4;
              } else if (w > 900) {
                columnNum  = 4;
              } else if (w > 600) {
                columnNum  = 2;
              } else if (w > 450) {
                columnNum  = 2;
              } else if (w > 385) {
                columnNum  = 1;
              }
              columnWidth = Math.floor(w/columnNum);
              $container.find('.single-comming-soon-gallery-bottom').each(function() {
                var $item = $(this),
                  multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
                  multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
                  width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
                  height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
                $item.css({
                  width: width,
                  //height: height
                });
              });
              return columnWidth;
            },
            isotope = function () {
              $container.isotope({
                resizable: false,
                itemSelector: '.single-comming-soon-gallery-bottom',
                masonry: {
                  columnWidth: colWidth(),
                  gutterWidth: 0
                }
              });
            };
          isotope();
          $(window).resize(isotope);
          var $optionSets = $('.watch-gallery-nav .option-set'),
              $optionLinks = $optionSets.find('li');
          $optionLinks.click(function(){
          var $this = $(this);
            var $optionSet = $this.parents('.option-set');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');

            // make option object dynamically, i.e. { filter: '.my-filter-class' }
            var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
            // parse 'false' as false boolean
            value = value === 'false' ? false : value;
            options[ key ] = value;
            if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
              // changes in layout modes need extra logic
              changeLayoutMode( $this, options )
            } else {
              // creativewise, apply new options
              $container.isotope( options );
            }
            return false;
          });
      } // End if exist

    });



    /*--------------------------------------------------------------
      5. Magnific popup
    --------------------------------------------------------------*/
    if($('.single-comming-soon-gallery-bottom').exists()) {
      $('.single-comming-soon-gallery-bottom').magnificPopup({
          delegate: 'a',
          type: 'image',
          closeOnContentClick: false,
          closeBtnInside: false,
          mainClass: 'mfp-with-zoom mfp-img-mobile',
          image: {
              verticalFit: true
          },
          gallery: {
              enabled: true
          },
          zoom: {
              enabled: true,
              duration: 500, // don't foget to change the duration also in CSS
              opener: function(element) {
                  return element.find('img');
              }
          }

      });
    } // End if Exist


    /*--------------------------------------------------------------
      6. google map
    --------------------------------------------------------------*/
    if($('#map').exists()) {
      google.maps.event.addDomListener(window, 'load', init);

      function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,
            disableDefaultUI: true,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
          };


        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.6700, -73.9400),
          map: map,
          icon: 'images/map-icon.png',
          // title: 'Larsia'
        });
        var contentString = '<div id="content">' +
            '<div id="myDiv">' +
            '</div>' +
            '<p>25 East middleton' +
            '<p> 25 southpoint Streat Luxemburg</p>' +
            '<p>US, 1154</p>'+
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 280
        });

        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker.setAnimation(null); }, 750);  //time it takes for one bounce

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

      }
    } //End if exist

    /*--------------------------------------------------------------
      7. scroll top
    --------------------------------------------------------------*/

     var moreBtn = document.getElementById("know-more-button");
     var moreBtnTop = document.getElementById("know-more-top-button");
     var moreCls = document.getElementById("more-close");
     var moreClsTop = document.getElementById("more-close-top");

     $(moreBtn).on("click", function( event) {
      event.preventDefault();
      $(overlay).addClass("on");
      $(more).addClass("open");
     });

      $(moreBtnTop).on("click", function(event) {
        event.preventDefault();
      $(overlay).addClass("on");
      $(moretop).addClass("open");
     });

     $(moreCls).on("click", function() {
      $(more).removeClass("open");
      $(overlay).removeClass("on");
     });

     $(moreClsTop).on("click", function() {
      $(moretop).removeClass("open");
      $(overlay).removeClass("on");
     });

     $(overlay).on("click", function() {
      if($(more).hasClass("open")) {
       $(more).removeClass("open");
       $(overlay).removeClass("on");
      }
     })

    $(overlay).on("click", function() {
      if($(moretop).hasClass("open")) {
       $(moretop).removeClass("open");
       $(overlay).removeClass("on");
      }
     })

     $(more).mCustomScrollbar({
        scrollInertia: 50
      });
     $(moretop).mCustomScrollbar({
        scrollInertia: 50
      });

    /*--------------------------------------------------------------
      8. scroll-y
    --------------------------------------------------------------*/

      $.mCustomScrollbar.defaults.theme="light-2"; //set "light-2" as the default theme

      if($('.demo-y').exists()) {
        $(".demo-y").mCustomScrollbar();
      }

      if($('.demo-x').exists()) {
        $(".demo-x").mCustomScrollbar({
          axis:"x",
          advanced:{autoExpandHorizontalScroll:true}
        });
      }

      if($('.demo-yx').exists()) {
        $(".demo-yx").mCustomScrollbar({
          axis:"yx"
        });
      }

      if($('.scrollTo a').exists()) {
        $(".scrollTo a").click(function(e){
          e.preventDefault();
          var $this=$(this),
            rel=$this.attr("rel"),
            el=rel==="content-y" ? ".demo-y" : rel==="content-x" ? ".demo-x" : ".demo-yx",
            data=$this.data("scroll-to"),
            href=$this.attr("href").split(/#(.+)/)[1],
            to=data ? $(el).find(".mCSB_container").find(data) : el===".demo-yx" ? eval("("+href+")") : href,
            output=$("#info > p code"),
            outputTXTdata=el===".demo-yx" ? data : "'"+data+"'",
            outputTXThref=el===".demo-yx" ? href : "'"+href+"'",
            outputTXT=data ? "$('"+el+"').find('.mCSB_container').find("+outputTXTdata+")" : outputTXThref;
          $(el).mCustomScrollbar("scrollTo",to);
          output.text("$('"+el+"').mCustomScrollbar('scrollTo',"+outputTXT+");");
        });
      }



    /*--------------------------------------------------------------
      9. particles js
    --------------------------------------------------------------*/
    if($('#wrapper').exists()) {
      $('#wrapper').tubular({videoId: 'Fk9EBOOAYiU'});
    }

    /*--------------------------------------------------------------
      10. Contact Form
    --------------------------------------------------------------*/
    var launch_contact_btn = $('#launch-input-send'),
        launch_form = $('#launch-form');

    launch_form.on('submit', function(e){
      e.preventDefault();

      $('.launch_error, .launch-success-message, .launch-loader').remove();
      $('.form-group input').removeClass('launch_input_error');

      var launch_input_name     = $('#launch-input-name'),
          launch_input_email    = $('#launch-input-email'),
          launch_input_message  = $('#launch-input-message'),
          launch_error          = false,
          self                  = $(this);

      if(launch_input_email.val() === ''){
        launch_input_email.before('<div class="launch_error">Email Address Should not be emtpy.</div>').hide().fadeIn();
        launch_input_email.addClass('launch_input_error');
        launch_error = true;
      } else if(!validateEmail(launch_input_email.val().toLowerCase())){
        launch_input_email.before('<div class="launch_error">Email Address Should be valid.</div>').hide().fadeIn();
        launch_input_email.addClass('launch_input_error');
        launch_error = true;
      }

      if(launch_error === false){
        launch_contact_btn.before('<span class="launch-loader launch-loader1"></span>').hide().fadeIn();
        $.ajax({
          type: "POST",
          url: "php/contact-form.php",
          data: {
            'launch_input_name' : launch_input_name.val(),
            'launch_input_email' : launch_input_email.val(),
            'launch_input_message' : launch_input_message.val()
          },
          success: function(result){
             launch_contact_btn.after('<div class="launch-success-message">' + result + '</div>').hide().fadeIn();

             $(".launch-loader").fadeOut("normal", function() {
                $(this).remove();
            });
          }
        });
      }
    });


    /*--------------------------------------------------------------
     11. Newsletter Subscription
    --------------------------------------------------------------*/
    if($('#mc-form').exists()) {
      $('#mc-form').ajaxChimp({
          url: '//pixiefy.us13.list-manage.com/subscribe/post?u=1c19cb3fd3c3c6c56177c50ea&amp;id=967a07b6cc'
      });
    } //End if exist

  }); // end of document ready

  })(jQuery);
