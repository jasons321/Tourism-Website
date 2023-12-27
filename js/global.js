// Detects if the passed in div element is in the viewport
function inView(element) {
  // Number of pixels above the element 
  var topElement = $(element).offset().top;
  // Number of pixels above the bottom of the element
  var bottomElement = $(element).offset().top + $(element).outerHeight();
  // Position of the bottom of the viewport
  var bottomScreen = $(window).scrollTop() + $(window).innerHeight();
    // Position of the top of the viewport
  var topScreen = $(window).scrollTop();
  // If the bottom of the screen interacts with the top of the element then it is in the viewport
  // If the top of the screen interacts with the bottom of the element then it is in the viewport
  if ((bottomScreen > topElement) && (topScreen < bottomElement)){
      return true;
  } else {
      return false;
  }
}

$(document).ready(function () {
  var lastScroll = 0;
  $(window).scroll(function () {
    // If the user has scroled over the main-image of the page, then set the color of the navbar so that
    // it is visible
    if ($(window).scrollTop() >= $('.main-image').offset().top + $('.main-image').outerHeight()) {
        $(".navigation").css("background-color", "#222");
    }
    else {
        $(".navigation").css("background-color", "transparent");
    }
    var vertical = $(this).scrollTop();

    // Move the page title horizontally, move it left or top according to how much has been scrolled
    if (vertical > lastScroll) { 
      $('.main-title').animate({left: vertical*3}, 10);
      $('#big-image').animate({top: vertical*0.5}, 0);
    }
    else { 
      $('.main-title').animate({left: vertical*3}, 10);
      $('#big-image').animate({top: vertical*0.5}, 0);
    }
    lastScroll = vertical;
  });
});