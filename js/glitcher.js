///////////////////////////
//////OLIVERENGEL.COM//////
///////////////////////////

//GLITCHER.JS - Javascript that glitches & transforms the page's CSS.

//----GLOBALS----//
var g_elems = new Array();
var g_paragraphs = new Array();
var g_isGlitching = false;

//----Random number generator----//
function randomNum(hi) {
  return Math.floor(Math.random() * hi);
}

//----Main glitch function----//
function beginGlitch() {

  if (g_isGlitching) {
    return;
  }

  g_isGlitching = true;

  //----Get all the elements on the page----//
  $('div,span,td').each(function() {
    if ($(this).is(':visible')
      var obj = {
        elem: $(this),
        rand: Math.random(),
        color: $(this).css("color"),
        left: $(this).css("left"),
        font_family: $(this).css("font-family")
      };

      //----Push all instatiated objects into array g_elems----//
      g_elems.push(obj);
    }
  });
  tick();
}

//----Chance function----//
function chance(a_val) {
  return Math.random() < a_val;
}

//----Do the transformations----//
function tick() {
  requestAnimationFrame(tick);

  var time = Date.now() * 0.001;
  var docWidthThreshold = $(document).width() * 0.8;

  for (var i = 0; i < (g_elems.length); i++) {
    var obj = g_elems[i];
    var elem = obj.elem;

    // elem.css("opacity", Math.sin(time*.15) );

    if (chance(0.005)) {
      elem.css("font-family", '"Courier New", Courier, monospace');
      elem.css("font-size", "25px");
    } else {
      elem.css("font-family", obj.font_family);
    }

    if (chance(0.007) && elem.width() < docWidthThreshold) {
      --skewer : randomNum(5);

      elem.css("transform", "skew(var(--skewer),0deg)");
      elem.css(
        "color", chance(0.5)
        ? "black"
        : "white");
      //elem.css("left", Math.random() < 0.5 ? -10 : 10);
    } else {
      // elem.css("transform", "skew(0deg,0deg)");
      // elem.css("background", obj.background );
      elem.css("color", obj.color);
    }
  }
}

//----Start the glitch----//
beginGlitch();
