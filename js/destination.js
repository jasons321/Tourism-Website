$(document).ready(function () {
    $('#jakarta-one').css('display', 'block');

    var jogjaTextOne = "Known to be the graden for the Sultan of Yogyakarta, the site was rumored to be a place to rest, meditate, and work. Now the buildings remain to be a popular touris attraction in Yogyakarta."
    var jogjaTextTwo = "Mount Merapi is an active volcano that stands over 2,900 meters tall. If you are looking for a thrilling adventure, you can climb the mountain with proper guidance and assistance. "
    var jogjaTextThree = "One of the largest temple in Indonesia that was built during the 10th century, it is one of the oldest structure that can be found in the country. The temple itself is a complex that consists of many temples."
    var jogjaTextFour = "A stunning natural cave system located in Gunung Kidul, the site features an amazing sight where sunlight enters the cave creating a breathtaking illusion. This place is a must-vist if you are a nature lover."
    var jogjaTextFive = "One of the most iconic landmarks of Indonesia. An ancient temple that dates back to the 8th/9th century, the destination is known to be one of the best Buddhist monuments in the world."

    var jakartaTextOne = "Built in 1975, Monas is a popular tourist destination in jakarta that symbolizes Indonesia's independence. The gold flame at the top of the monument is the representation of the struggle of the Indonesian people that is continously burning."
    var jakartaTextTwo = "Located in East Jakarta, Taman Mini is a scultural park that displays the diverse culture that Indonesia has. The park inclueds theatres, museums, flora/fauna parks, and various other family activites while learning Indonesia's rich history and culture."
    var jakartaTextThree = "Opened in 1978 by President Soekarno, Istiqlal Mosque is a beautiful architecural landmark located at the heart of Jakarta. The prayer hall has a 45 meter diameter dome supported by 12 round columns."
    var jakartaTextFour = "If you are looking for an authentic Indonesian experience, look no further than Jakarta's chinatown. You get to explore the various fusion of Indonesian and Chinese cuisine. There are currently two chinatowns (old and new), both offering a unique experience."
    var jakartaTextFive = "In Jakarta's old town, your will find remants of buildings and marks from the Dutch colonisation. Inside the museum, you will find items such as paintings, paintings, ceramics and archaeological artificats left behind during the colonization period."

    var baliTextOne = "A beautiful and small island located southeast of Bali. This hidden gem is packed with amazing sceneries where you can take lovely pictures and fun underwater activities for an unforgettable experience. "
    var baliTextTwo = "Tanah Lot used to be featured on Indonesia's 50,000 Rupiah banknote. If you ever visit Bali, this stop is a must!"
    var baliTextThree = "What beats a beach that overlooks the Indian Ocean and is surrounded by enormous limestone cliffs that makes a spectacular view. There are also activties such as surfing and rowing for you to enjoy."
    var baliTextFour =  "Standing at 1220 meters tall, Garuda Wisnu Kencana is a grand, yet, intricately built statue overlooking the entire island of Bali. The park also offers theatrical performances, as well as various other infamous statues to be viewed. "
    var baliTextFive = "Seeing uluwatu during sunset is a magical moment that everyone has to experience once in their lifetime. The destination, standing on top of a cliff, features a view of the ocean where you can take pictures and embrace the view. "

    $('#jakarta-info').append("<p class = "+"landmark-text"+">"+jakartaTextOne+"</p>");
    $('#bali-info').append("<p class = "+"landmark-text"+">"+baliTextOne+"</p>");
    $('#jogja-info').append("<p class = "+"landmark-text"+">"+jogjaTextOne+"</p>");

    jakartaImage = 1; 
    baliImage = 1;
    jogjaImage = 1;
    
    // Activated when the user clicks the next button
    // Displays the image one after the current value of jakartaImage
    // if jakartaImage is 1, then the second section will be displayed
    $('#nextJakarta').on('click', function() {
        if (jakartaImage == 1) {
            $('#jakarta-two').css('display', 'block');
            $('#jakarta-five').css('display', 'none');
            $('#jakarta-one').css('display', 'none');
            // Empty the information displayed currently
            $('#jakarta-info').empty();
            // Add in the the new information text
            $('#jakarta-info').append("<p class = "+"landmark-text"+">"+jakartaTextTwo+"</p>");
        }
        else if (jakartaImage == 2) {
            $('#jakarta-one').css('display', 'none');
            $('#jakarta-two').css('display', 'none');
            $('#jakarta-three').css('display', 'block');
            $('#jakarta-info').empty();
            $('#jakarta-info').append("<p class = "+"landmark-text"+">"+jakartaTextThree+"</p>");
        }
        else if (jakartaImage == 3) {
            $('#jakarta-two').css('display', 'none');
            $('#jakarta-three').css('display', 'none');
            $('#jakarta-four').css('display', 'block');
            $('#jakarta-info').empty();
            $('#jakarta-info').append("<p class = "+"landmark-text"+">"+jakartaTextFour+"</p>");
        }
        else if (jakartaImage == 4) {
            $('#jakarta-three').css('display', 'none');
            $('#jakarta-four').css('display', 'none');
            $('#jakarta-five').css('display', 'block');
            $('#jakarta-info').empty();
            $('#jakarta-info').append("<p class = "+"landmark-text"+">"+jakartaTextFive+"</p>");
        }
        else if (jakartaImage == 5) {
            $('#jakarta-four').css('display', 'none');
            $('#jakarta-five').css('display', 'none');
            $('#jakarta-one').css('display', 'block');
            $('#jakarta-info').empty();
            $('#jakarta-info').append("<p class = "+"landmark-text"+">"+jakartaTextOne+"</p>");
            jakartaImage = 0;
        }
        jakartaImage++;
    });

    // Similar to the previous function, except that it displays the previous section
    // Display the previous image based on the current value
    // If jakartaImage is 1, then the fifth (last slide) will be displayed 
    $('#prevJakarta').on('click', function(){
        if (jakartaImage == 1) {
            $('#jakarta-one').css('display', 'none');
            $('#jakarta-five').css('display', 'block');
            $('#jakarta-two').css('display', 'none');
            // Empty the information displayed currently
            $('#jakarta-info').empty();
            // Add in the the new information text
            $('#jakarta-info').append("<p class = "+"landmark-text"+">"+jakartaTextFive+"</p>");
            jakartaImage = 6;
        }
        else if (jakartaImage == 2) {
            $('#jakarta-three').css('display', 'none');
            $('#jakarta-two').css('display', 'none');
            $('#jakarta-one').css('display', 'block');
            $('#jakarta-info').empty();
            $('#jakarta-info').append("<p class = "+"landmark-text"+">"+jakartaTextOne+"</p>");
        }
        else if (jakartaImage == 3) {
            $('#jakarta-four').css('display', 'none');
            $('#jakarta-two').css('display', 'block');
            $('#jakarta-three').css('display', 'none');
            $('#jakarta-info').empty();
            $('#jakarta-info').append("<p class = "+"landmark-text"+">"+jakartaTextTwo+"</p>");

        }
        else if (jakartaImage == 4) {
            $('#jakarta-five').css('display', 'none');
            $('#jakarta-four').css('display', 'none');
            $('#jakarta-three').css('display', 'block');
            $('#jakarta-info').empty();
            $('#jakarta-info').append("<p class = "+"landmark-text"+">"+jakartaTextThree+"</p>");
        }
        else if (jakartaImage == 5) {
            $('#jakarta-one').css('display', 'none');
            $('#jakarta-five').css('display', 'none');
            $('#jakarta-four').css('display', 'block');
            $('#jakarta-info').empty();
            $('#jakarta-info').append("<p class = "+"landmark-text"+">"+jakartaTextFour+"</p>");

        }
        jakartaImage--;
    });

    // Similar to the previous functions.
    $('#nextBali').on('click', function(){
        if (baliImage == 1) {
            $('#bali-two').css('display', 'block');
            $('#bali-five').css('display', 'none');
            $('#bali-one').css('display', 'none');
            $('#bali-info').empty();
            $('#bali-info').append("<p class = "+"landmark-text"+">"+baliTextTwo+"</p>");
        }
        else if (baliImage == 2) {
            $('#bali-one').css('display', 'none');
            $('#bali-two').css('display', 'none');
            $('#bali-three').css('display', 'block');
            $('#bali-info').empty();
            $('#bali-info').append("<p class = "+"landmark-text"+">"+baliTextThree+"</p>");
        }
        else if (baliImage == 3) {
            $('#bali-two').css('display', 'none');
            $('#bali-three').css('display', 'none');
            $('#bali-four').css('display', 'block');
            $('#bali-info').empty();
            $('#bali-info').append("<p class = "+"landmark-text"+">"+baliTextFour+"</p>");
        }
        else if (baliImage == 4) {
            $('#bali-three').css('display', 'none');
            $('#bali-four').css('display', 'none');
            $('#bali-five').css('display', 'block');
            $('#bali-info').empty();
            $('#bali-info').append("<p class = "+"landmark-text"+">"+baliTextFive+"</p>");
        }
        else if (baliImage == 5) {
            $('#bali-four').css('display', 'none');
            $('#bali-five').css('display', 'none');
            $('#bali-one').css('display', 'block');
            $('#bali-info').empty();
            $('#bali-info').append("<p class = "+"landmark-text"+">"+baliTextOne+"</p>");
            baliImage = 0;
        }
        baliImage++;
    });

    // Similar to the previous functions.
    $('#prevBali').on('click', function(){
        if (baliImage == 1) {
            $('#bali-one').css('display', 'none');
            $('#bali-five').css('display', 'block');
            $('#bali-two').css('display', 'none');
            $('#bali-info').empty();
            $('#bali-info').append("<p class = "+"landmark-text"+">"+baliTextFive+"</p>");
            baliImage = 6;
        }
        else if (baliImage == 2) {
            $('#bali-three').css('display', 'none');
            $('#bali-two').css('display', 'none');
            $('#bali-one').css('display', 'block');
            $('#bali-info').empty();
            $('#bali-info').append("<p class = "+"landmark-text"+">"+baliTextOne+"</p>");

        }
        else if (baliImage == 3) {
            $('#bali-four').css('display', 'none');
            $('#bali-two').css('display', 'block');
            $('#bali-three').css('display', 'none');
            $('#bali-info').empty();
            $('#bali-info').append("<p class = "+"landmark-text"+">"+baliTextTwo+"</p>");
        }
        else if (baliImage == 4) {
            $('#bali-five').css('display', 'none');
            $('#bali-four').css('display', 'none');
            $('#bali-three').css('display', 'block');
            $('#bali-info').empty();
            $('#bali-info').append("<p class = "+"landmark-text"+">"+baliTextThree+"</p>");
        }
        else if (baliImage == 5) {
            $('#bali-one').css('display', 'none');
            $('#bali-five').css('display', 'none');
            $('#bali-four').css('display', 'block');
            $('#bali-info').empty();
            $('#bali-info').append("<p class = "+"landmark-text"+">"+baliTextFour+"</p>");
        }
        baliImage--;
    });

    // Similar to the previous functions. 
    $('#nextJogja').on('click', function(){
        if (jogjaImage == 1) {
            $('#jogja-two').css('display', 'block');
            $('#jogja-five').css('display', 'none');
            $('#jogja-one').css('display', 'none');
            $('#jogja-info').empty();
            $('#jogja-info').append("<p class = "+"landmark-text"+">"+jogjaTextTwo+"</p>");
        }
        else if (jogjaImage == 2) {
            $('#jogja-one').css('display', 'none');
            $('#jogja-two').css('display', 'none');
            $('#jogja-three').css('display', 'block');
            $('#jogja-info').empty();
            $('#jogja-info').append("<p class = "+"landmark-text"+">"+jogjaTextThree+"</p>");

        }
        else if (jogjaImage == 3) {
            $('#jogja-two').css('display', 'none');
            $('#jogja-three').css('display', 'none');
            $('#jogja-four').css('display', 'block');
            $('#jogja-info').empty();
            $('#jogja-info').append("<p class = "+"landmark-text"+">"+jogjaTextFour+"</p>");
        }
        else if (jogjaImage == 4) {
            $('#jogja-three').css('display', 'none');
            $('#jogja-four').css('display', 'none');
            $('#jogja-five').css('display', 'block');
            $('#jogja-info').empty();
            $('#jogja-info').append("<p class = "+"landmark-text"+">"+jogjaTextFive+"</p>");
        }
        else if (jogjaImage == 5) {
            $('#jogja-four').css('display', 'none');
            $('#jogja-five').css('display', 'none');
            $('#jogja-one').css('display', 'block');
            $('#jogja-info').empty();
            $('#jogja-info').append("<p class = "+"landmark-text"+">"+jogjaTextOne+"</p>");
            jogjaImage = 0;
        }
        jogjaImage++;
    });

    // Similar to the previous functions.
    $('#prevJogja').on('click', function(){
        if (jogjaImage == 1) {
            $('#jogja-one').css('display', 'none');
            $('#jogja-five').css('display', 'block');
            $('#jogja-two').css('display', 'none');
            jogjaImage = 6;
            $('#jogja-info').empty();
            $('#jogja-info').append("<p class = "+"landmark-text"+">"+jogjaTextFive+"</p>");
        }
        else if (jogjaImage == 2) {
            $('#jogja-three').css('display', 'none');
            $('#jogja-two').css('display', 'none');
            $('#jogja-one').css('display', 'block');
            $('#jogja-info').empty();
            $('#jogja-info').append("<p class = "+"landmark-text"+">"+jogjaTextOne+"</p>");
        }
        else if (jogjaImage == 3) {
            $('#jogja-four').css('display', 'none');
            $('#jogja-two').css('display', 'block');
            $('#jogja-three').css('display', 'none');
            $('#jogja-info').empty();
            $('#jogja-info').append("<p class = "+"landmark-text"+">"+jogjaTextTwo+"</p>");
        }
        else if (jogjaImage == 4) {
            $('#jogja-five').css('display', 'none');
            $('#jogja-four').css('display', 'none');
            $('#jogja-three').css('display', 'block');
            $('#jogja-info').empty();
            $('#jogja-info').append("<p class = "+"landmark-text"+">"+jogjaTextThree+"</p>");
        }
        else if (jogjaImage == 5) {
            $('#jogja-one').css('display', 'none');
            $('#jogja-five').css('display', 'none');
            $('#jogja-four').css('display', 'block');
            $('#jogja-info').empty();
            $('#jogja-info').append("<p class = "+"landmark-text"+">"+jogjaTextFour+"</p>");
        }
        jogjaImage--;
    });

    // Image hover for landmark information on Jakarata 
    $('#jakarta-grid').on('mouseenter', function() {
        $( "#jakarta-info" ).slideDown( 500, function() {
        });
    }).on('mouseup mouseleave', function() {
        $( "#jakarta-info" ).slideUp( 500, function() {
        });
    });

    // Image hover for landmark information on Bali 
    $('#bali-grid').on('mouseenter', function() {
        $( "#bali-info" ).slideDown( 500, function() {
        });
    }).on('mouseup mouseleave', function() {
        $( "#bali-info" ).slideUp( 500, function() {
        });
    });

    // Image hover for landmark information on Yogyakarta 
    $('#jogja-grid').on('mouseenter', function() {
        $( "#jogja-info" ).slideDown( 500, function() {
        });
    }).on('mouseup mouseleave', function() {
        $( "#jogja-info" ).slideUp( 500, function() {
        });
    });
});