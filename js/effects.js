// PRELOADER SCREEN
 $(window).load(function() {
        $(".preloadercon").fadeIn("slow");;
        $(".preloader").delay(300).fadeOut("slow");;
    });
  

// Changing Text
  var text = ["Curious", "Adaptable", "Crazy", "Experimental", "Unique", "Open-Minded"];
    var counter = 0;
    var elem = document.getElementById("changeText");
    setInterval(change, 1000);
    function change() {
     elem.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    }


// Toggle Menu on Click
$('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});


// Resize
var autoSizeText;
autoSizeText = function() {
  var el, elements, _i, _len, _results;
  elements = $('.resize');
  console.log(elements);
  if (elements.length < 0) {
    return;
  }
  _results = [];
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    el = elements[_i];
    _results.push((function(el) {
      var resizeText, _results1;
      resizeText = function() {
        var elNewFontSize;
        elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
        return $(el).css('font-size', elNewFontSize);
      };
      _results1 = [];
      while (el.scrollHeight > el.offsetHeight) {
        _results1.push(resizeText());
      }
      return _results1;
    })(el));
  }
  return _results;
};

//Navbar Shrinks

 $(document).ready(navshrink);

 $(window).resize(navshrink);

function navshrink(){
if ($(window).width() > 500) {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
            $('.navbar-nav li a').css('color', '#000000');
            $('#logobrand').attr('src', 'img/logoblack.svg');
        } else {
            $('nav').removeClass('shrink');
            $('.navbar-nav li a').css('color', '#FFFFFF');
            $('#logobrand').attr('src', 'img/logo.svg');
        }    
    });
    
} else {
    $('#logobrand').attr('src', 'img/logoblack.svg');
    $('.navbar-nav li a').css('color', '#000000');
};
};
