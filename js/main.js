$(document).ready(function () {
  // Animate the texts when it comes into viewport using the inView function in global.js
  $(window).scroll(function () {
    if (inView("#about-indo")) {
      $('#about-indo').animate({opacity: 1}, 1000);
    }
    if (inView("#people")) {
      $('#people').animate({opacity: 1}, 2000);
    }
    if (inView("#places")) {
      $('#places').animate({opacity: 1}, 2000);
    }
  });


  $('#check-button').on('click', function() {
    // List of countries that require a visa for a short 30 days visit
    visaCountries = ["Afghanistan", "North Korea", "Pakistan", "Montenegro",
    "Slovenia", "Cameroon", "Central African Republic", "Comoros", "Democratic Republic of the Congo", 
    "Djibouti", "Eritrea", "Ethiopia", "Guinea", "Liberia", "Libyra", "Niger", 
    "Nigeria", "São Tomé and Príncipe", "Sierra Leone", "Somalia", "Sudan", "Republic of the Congo", 
    "Guinea-Bissau", "South Sudan", "Micronesia", "Iran", "Iraq", "Israel", "Syria", "Yemen"]
    //Retrieve the selected country 
    selectedCountry = $('#country option:selected').val();
    flag = 0;

    for (country of visaCountries) { 
      if (selectedCountry == country) {
        $('#visa-required').css('display', 'none');
        $('#visa-free').css('display', 'none');
        // Set a time delay before showing the result so users know that it has been changed
        setTimeout (function() {
          $('#visa-required').css('display', 'block');
        }, 200);
        flag = 1;
      }
    }

    // If the country is not listed, then visa is not required 
    if (flag == 0) {
      $('#visa-free').css('display', 'none');
      $('#visa-required').css('display', 'none');
      setTimeout(function() {
        $('#visa-free').css('display', 'block');
      }, 200);
    }
  });
});