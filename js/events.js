$(document).ready(function () {
    // Triggers whenever a user inputs something into the search box
    $('#search-events').on('input', function() {
        // Retriever the user inputted value
        var input = $('#search-events').val();
        // The first line targest all the event cards in the "#future" div
        $("#future").children('.all-events').each(function() {
            // Retrieve the heading for the event card and match it with the user input
            // If true then show the card, else hide it
            if($(this).children("a").children("h3")[0].innerText.toLowerCase().includes(input.toLowerCase())) { 
                $(this).show();
            }
            else { 
                $(this).hide();
            }
        });

        // In case the animation hasn't loaded yet, trigger the show animation now
        $("#future").children('.all-events').each(function() {
            if (inView("#"+this.id)) { 
                $($(this).children("a")).addClass("show-element")
            }
         });
    });

    $(window).scroll(function () {
        // inView is a funtion in global.js
        // If the div "upcoming" comes into the viewport then show the elements 
        if (inView("#upcoming")) { 
            $("#event-one").addClass("show-element");
            // Timeout 
            setTimeout(function() {
                $("#event-two").addClass("show-element");
            }, 500);
            // Timeout 
            setTimeout(function() {
                $("#event-three").addClass("show-element");
            }, 1000);
        }

        // For each event card in the "future" div, if it is in the viewport, show
        $("#future").children('.all-events').each(function() {
            if (inView("#"+this.id)) { 
                $($(this).children("a")).addClass("show-element");
            }
        });
    });
});