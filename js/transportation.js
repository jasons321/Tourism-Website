// Call the api to receive the token to access the api to retrieve flight journeys 
function getToken() {
  return new Promise(function(resolve, reject) {
    $.ajax({ 
      url: 'https://test.api.amadeus.com/v1/security/oauth2/token', 
      type: 'POST',
      data: "grant_type=client_credentials&client_id=VEf7bPJPyQSj0OFZtmBJE32BbwZBh4YM&client_secret=7kwR5isUUjXqGx2C",
      headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
      }, 
      success: function(response) {
        const date = new Date();
        // Store the current date into local storage
        localStorage.setItem("lastToken", date); 
        // Store the token itself into the storage so it doenst have to be retrieved again if the user closes the browser 
        localStorage.setItem("accessToken", response.access_token); 
        resolve(response);
      }, 
      error: function(xhr, status, error) { 
        reject(error);
      } 
    });
  });
}

$(document).ready( function () {
  var image = document.getElementById('big-image'); 
  var height = image.clientHeight;
  var lastScroll = 0; 

  // Determines the position of the plane icon on the side while scrolling
  $(window).scroll(function () {
    var vertical = $(this).scrollTop();
    // If the scrolling position is greater than the height of the main page image
    // Then, display the plane icon
    if (vertical >= height  *0.60) {
      $('#plane-icon').css("display", "block");
    } 
    else { 
      $('#plane-icon').css("display", "none");
    }

    if (vertical > lastScroll) { 
      $('#plane-icon').animate({top: vertical + 500}, 5);
    }
    else { 
      $('#plane-icon').animate({top: vertical + 500}, 5);
    }
    lastScroll = vertical;
  });

    var totalAdult = 1;
    var totalChildren = 0;
    var totalInfant = 0;
    var goingDate;
    var returnDate;
    var roundTrip = true;

    // Triggered when user selects round-trip or one-way 
    $('#return-oneway').on('change', function() {
      var type = $('#return-oneway').val();
      if (type == "One-Way") {
        $('#return').val("");
        // Remove the return date selector when one-way is selected
        $('#return-box').css("display", "none");
        roundTrip = false;
        returnDate = null;
      }
      else { 
        $('#return-box').css("display", "block");
        roundTrip = true;
      }
    });

    // Called when user selects a date
    $('#going').on('change', function() {
      goingDate = $('#going').val();
      goingDate = new Date(goingDate);
      currentDate = new Date();
      // Alert if the selected date is in the past
      if (goingDate.toDateString() != currentDate.toDateString() && goingDate < currentDate) { 
        alert("Unable to select past dates") 
        $('#going').val("");
      }
    });
    
    // Called when user selects a date
    $('#return').on('change', function() {
      returnDate = $('#return').val();
      returnDate = new Date(returnDate);
      currentDate = new Date();
      if (goingDate == null) {
        // User hasn't selected a departure date 
        alert("Select a going date first");
        $('#return').val("");
      }
      else {
        // The return date is before the departure date 
        if (returnDate < goingDate) {
          alert("Return date can't be before going date");
          $('#return').val("");
        }
      }
      if (returnDate.toDateString() != currentDate.toDateString() && returnDate < currentDate) { 
        alert("Unable to select past dates") 
        $('#going').val("");
      }
    });

    // The following are buttons to increment/select the number of adults/infants/children
    $('#increment-number-adult').on('click', function(){
      totalAdult = $('#adult-input').val();
      totalAdult++;
      $('#adult-input').val(totalAdult);
    });

    $('#decrement-number-adult').on('click', function(){
      totalAdult = $('#adult-input').val();
      totalAdult--;
      if (totalAdult < 0) { 
        totalAdult = 0;
      }
      $('#adult-input').val(totalAdult);
    });

    $('#increment-number-children').on('click', function(){
      totalChildren = $('#children-input').val();
      totalChildren++;
      $('#children-input').val(totalChildren);
    });

    $('#decrement-number-children').on('click', function(){
      totalChildren = $('#children-input').val();
      totalChildren--;
      if (totalChildren < 0) { 
        totalChildren = 0;
      }
      $('#children-input').val(totalChildren);
    });

    $('#increment-number-infant').on('click', function(){
      totalInfant = $('#infant-input').val();
      totalInfant++;
      // The number of infants can't be more than the number of adults
      if (totalInfant > totalAdult) { 
        totalInfant--;
        $('#infant-input').val(totalAdult);
      }
      else { 
        $('#infant-input').val(totalInfant);
      }
    });

    $('#decrement-number-infant').on('click', function(){
      totalInfant = $('#infant-input').val();
      totalInfant--;
      if (totalInfant < 0) { 
        totalInfant = 0;
      }
      if (totalInfant > totalAdult) { 
        totalInfant = totalAdult;
      }
      $('#infant-input').val(totalInfant);
    });

    $('.increment-button').on('click', function(){
      // Number of people exceeds 9
      if (totalAdult + totalChildren + totalInfant > 9) { 
        alert("Exceeded the maximum number of people");
        $('#adult-input').val(1);
        totalAdult = 1;
        $('#children-input').val(0);
        totalChildren = 0;
        $('#infant-input').val(0);
        totalInfant = 0;
      }
      
      // 0 person selected 
      if (totalAdult + totalChildren + totalInfant == 0) { 
        alert("Below the minimum number of people");
        $('#adult-input').val(1);
        totalAdult = 1;
        $('#children-input').val(0);
        totalChildren = 0;
        $('#infant-input').val(0);
        totalInfant = 0;
      }

      if (totalInfant > totalAdult) {
        $('#infant-input').val(totalAdult);
      }
    });

    // Open the select number of people window 
    $('#counter').on('click', function(){
      $('html, body').css({
        overflow: 'hidden',
      });
      $('#select-people').css("display", "block");
      $('.body').css("brigthness", "50%");
    });

    // Save the selected choice and display it in the designated box ("counter")
    $('#confirm-button').on('click',  function() {
      var displayText = "";
      var counter = 0;
      if (totalAdult >= 1) { 
        displayText += totalAdult + " Adult(s)"
        counter++;
      }
      if (totalChildren == 1) { 
        if (totalAdult == 0) {
          displayText += totalChildren + " Child"
        }
        else { 
          displayText += ", " + totalChildren + " Child"
        }
        counter++;
      }
      else if (totalChildren > 1) {
        displayText += ", " + totalChildren + " Children"
        counter++;
      }
      if (totalInfant >= 1) { 
        displayText += ", " + totalInfant + " Infant(s)"
        counter++;
      }

      $('#counter').text(displayText);
      if (counter >= 2) { 
        $('#counter').css("font-size", "10px");
      }

      $('html, body').css({
        overflow: 'visible',
      });

      $('#select-people').css("display", "none");
      $('.body').css("brigthness", "100%");
    });

    // User searches for tickets after selecting all the options 
    $('#search-button').on('click', async function() {
      // Empty the the tickets if there are elements in there
      $('#show-tickets').empty();
      $('#loading').css("display", "block");
      
      // The dates can't be left empty 
      if (goingDate == null || (returnDate == null && roundTrip == true)) { 
        alert("Select the dates")
        $('#loading').css("display", "none");

      }
      else {

        var baseUrl = "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode="
        
        baseUrl = baseUrl + $('#ori-airport').val() + "&destinationLocationCode=" + $('#arr-airport').val();
        // Round-trip ticket parameters
        if (returnDate != null) {
          baseUrl = baseUrl + "&departureDate=" + goingDate.toISOString().split('T')[0] + "&returnDate=" + returnDate.toISOString().split('T')[0];
        }
        // One-way ticket 
        else {
          baseUrl = baseUrl + "&departureDate=" + goingDate.toISOString().split('T')[0];
        }

        // If the category exceeds one then include it in the parameter
        if (totalAdult > 0) { 
          baseUrl = baseUrl + "&adults=" + totalAdult;
        }
        if (totalChildren > 0) { 
          baseUrl = baseUrl + "&children=" + totalChildren;
        }
        if (totalInfant > 0) { 
          baseUrl = baseUrl + "&infants=" + totalInfant;
        }

        baseUrl = baseUrl + "&currencyCode=USD" + "&travelClass=" + $('#ticket-class').val() + "&max=15";
        
        var access_token;

        //  Retrieve the token needed 
        try{
          const dateNow = new Date();
          const lastTokenTime = localStorage.getItem("lastToken"); 
          const tokenDate= new Date(lastTokenTime);
          // Check whether the token has expired
          if (lastTokenTime == null || ((dateNow - tokenDate)/1000) > 1799) { 
            // Get a new token since it has expired
            const result = await getToken();
            access_token = result.access_token;
          }
          else { 
            access_token = localStorage.getItem("accessToken"); 
          }
        } 
        catch(e){
          console.log(e);
        }

        // Create the api get request 
        $.ajax({ 
          url: baseUrl,
          headers: { 
              'authorization': 'Bearer ' + access_token

          }, 
          success: function(response) { 
            $('#loading').css("display", "none");
            $('#show-tickets').empty();
            if (response.data.length == 0) { 
              alert("no tickets found");
            }
            else { 
              var dictionary = response.dictionaries.carriers;
              // Loop from the amount tickets that were returned 
              for (let x = 0; x < response.data.length; x++) { 
                // Determine if the response is a round-trip
                if (response.data[x].itineraries.length == 2) { 
                  var departure = response.data[x].itineraries[0];
                  var returnP = response.data[x].itineraries[1];
                }
                // One-way ticket
                else { 
                  var departure = response.data[x].itineraries[0];
                  if (returnDate != null) {
                    var returnP = response.data[x].itineraries[response.data[x].itineraries.length()-1];
                  }
                }
  
                //Formatting the ticket cards, displaying prices, flight duration, carriercode
                $('#show-tickets').append('<div class= "ticket-bar" id = "ticket-'+ x +'"></div>');
                $('#ticket-'+ x ).append('<div class = "departure-flight-bar" id = "departure-bar-'+ x +'"></div>');
                $('#ticket-'+ x ).append('<div class = "return-flight-bar" id = "return-bar-'+ x +'"></div>');
                $('#ticket-'+ x ).append('<div class = "price-bar"> $'+ response.data[x].price.total+' </div>');
  
                $('#departure-bar-'+ x).append('<p class = "airline">'+dictionary[departure.segments[0].carrierCode]+'</p>');
                $('#departure-bar-'+ x).append('<div class = "time-location"><p>'+departure.segments[0].departure.at.substring(11,16)+'</p><p>'+departure.segments[0].departure.iataCode+'</p></div>');
                         
                var numStops;
                // More than 1 stop/segments then include a dot in the line element else exclude a dot
                if (departure.segments.length > 1) { 
                  numStops = departure.segments.length - 1
                  $('#departure-bar-'+ x).append('<div class = "line-circle"> <p class = "duration">'+departure.duration.substring(2,8)+'</p> <div class = circle> </div> <p class = "stops" >'+  numStops+' stop</p> </div>');
                }
                else { 
                  numStops = 0;
                  $('#departure-bar-'+ x).append('<div class = "line-circle"> <p class = "duration">'+departure.duration.substring(2,8)+'</p> <p <p class = "stops">'+  numStops+' stop</p> </div>');
                }
                $('#departure-bar-'+ x).append('<div class = "time-location"> <p>'+departure.segments[departure.segments.length-1].arrival.at.substring(11, 16)+'</p> <p>'+departure.segments[departure.segments.length-1].arrival.iataCode+'</p> </div>');
                
                // If it is a round-tip ticket then append the return information 
                if (returnDate != null) {
                  $('#return-bar-'+ x).append('<p class = "airline">'+dictionary[returnP.segments[0].carrierCode]+'</p>');
                  $('#return-bar-'+ x).append('<div class = "time-location"><p>'+returnP.segments[0].departure.at.substring(11,16) +'</p><p>'+returnP.segments[0].departure.iataCode+'</p></div>');
                  var numStops;
                  // Similarly, determine if there are more than 1 stops
                  if (returnP.segments.length > 1) { 
                    numStops = returnP.segments.length - 1
                    $('#return-bar-'+ x).append('<div class = "line-circle"> <p class = "duration">'+returnP.duration.substring(2,8)+'</p> <div class = circle> </div> <p class = "stops" >'+  numStops+' stop</p> </div>');
                  }
                  else { 
                    numStops = 0;
                    $('#return-bar-'+ x).append('<div class = "line-circle"> <p class = "duration">'+returnP.duration.substring(2,8)+'</p> <p <p class = "stops">'+  numStops+' stop</p> </div>');
    
                  }
                  $('#return-bar-'+ x).append('<div class = "time-location"> <p>'+returnP.segments[departure.segments.length-1].arrival.at.substring(11,16) +'</p> <p>'+returnP.segments[departure.segments.length-1].arrival.iataCode+'</p> </div>');
                }
                else { 
                  $('.departure-flight-bar').css("margin-top", "60px");
                }
              }  
            }
          }, 
          error: function(xhr, status, error) { 
            console.log(xhr);
          } 
        });
      }

    });
});