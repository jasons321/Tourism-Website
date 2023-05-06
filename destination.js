$(document).ready(function () {
    $('#jakarta-one').css('display', 'block');
    setInterval(function(){   
                if (jakartaImage == 1) {
                    $('#jakarta-two').css('display', 'block');
                    $('#jakarta-five').css('display', 'none');
                    $('#jakarta-one').css('display', 'none');
                }
                else if (jakartaImage == 2) {
                    $('#jakarta-one').css('display', 'none');
                    $('#jakarta-two').css('display', 'none');
                    $('#jakarta-three').css('display', 'block');
        
                }
                else if (jakartaImage == 3) {
                    $('#jakarta-two').css('display', 'none');
                    $('#jakarta-three').css('display', 'none');
                    $('#jakarta-four').css('display', 'block');
        
                }
                else if (jakartaImage == 4) {
                    $('#jakarta-three').css('display', 'none');
                    $('#jakarta-four').css('display', 'none');
                    $('#jakarta-five').css('display', 'block');
        
                }
                else if (jakartaImage == 5) {
                    $('#jakarta-four').css('display', 'none');
                    $('#jakarta-five').css('display', 'none');
                    $('#jakarta-one').css('display', 'block');
        
                    jakartaImage = 0;
                }
                jakartaImage++;
        },
        4000  /* 10000 ms = 10 sec */
   );
    jakartaImage = 1; 
    baliImage = 1;
    jogjaImage = 1;
    $('#nextJakarta').on('click', function(){
        if (jakartaImage == 1) {
            $('#jakarta-two').css('display', 'block');
            $('#jakarta-five').css('display', 'none');
            $('#jakarta-one').css('display', 'none');
        }
        else if (jakartaImage == 2) {
            $('#jakarta-one').css('display', 'none');
            $('#jakarta-two').css('display', 'none');
            $('#jakarta-three').css('display', 'block');

        }
        else if (jakartaImage == 3) {
            $('#jakarta-two').css('display', 'none');
            $('#jakarta-three').css('display', 'none');
            $('#jakarta-four').css('display', 'block');

        }
        else if (jakartaImage == 4) {
            $('#jakarta-three').css('display', 'none');
            $('#jakarta-four').css('display', 'none');
            $('#jakarta-five').css('display', 'block');

        }
        else if (jakartaImage == 5) {
            $('#jakarta-four').css('display', 'none');
            $('#jakarta-five').css('display', 'none');
            $('#jakarta-one').css('display', 'block');

            jakartaImage = 0;
        }
        jakartaImage++;
    });
    $('#prevJakarta').on('click', function(){
        if (jakartaImage == 1) {
            $('#jakarta-one').css('display', 'none');
            $('#jakarta-five').css('display', 'block');
            $('#jakarta-two').css('display', 'none');
            jakartaImage = 6;
        }
        else if (jakartaImage == 2) {
            $('#jakarta-three').css('display', 'none');
            $('#jakarta-two').css('display', 'none');
            $('#jakarta-one').css('display', 'block');
        }
        else if (jakartaImage == 3) {
            $('#jakarta-four').css('display', 'none');
            $('#jakarta-two').css('display', 'block');
            $('#jakarta-three').css('display', 'none');
        }
        else if (jakartaImage == 4) {
            $('#jakarta-five').css('display', 'none');
            $('#jakarta-four').css('display', 'none');
            $('#jakarta-three').css('display', 'block');
        }
        else if (jakartaImage == 5) {
            $('#jakarta-one').css('display', 'none');
            $('#jakarta-five').css('display', 'none');
            $('#jakarta-four').css('display', 'block');
        }
        jakartaImage--;
    });
    $('#nextBali').on('click', function(){
        if (baliImage == 1) {
            $('#bali-two').css('display', 'block');
            $('#bali-five').css('display', 'none');
            $('#bali-one').css('display', 'none');
        }
        else if (baliImage == 2) {
            $('#bali-one').css('display', 'none');
            $('#bali-two').css('display', 'none');
            $('#bali-three').css('display', 'block');

        }
        else if (baliImage == 3) {
            $('#bali-two').css('display', 'none');
            $('#bali-three').css('display', 'none');
            $('#bali-four').css('display', 'block');

        }
        else if (baliImage == 4) {
            $('#bali-three').css('display', 'none');
            $('#bali-four').css('display', 'none');
            $('#bali-five').css('display', 'block');

        }
        else if (baliImage == 5) {
            $('#bali-four').css('display', 'none');
            $('#bali-five').css('display', 'none');
            $('#bali-one').css('display', 'block');

            baliImage = 0;
        }
        baliImage++;
    });
    $('#prevBali').on('click', function(){
        if (baliImage == 1) {
            $('#bali-one').css('display', 'none');
            $('#bali-five').css('display', 'block');
            $('#bali-two').css('display', 'none');
            baliImage = 6;
        }
        else if (baliImage == 2) {
            $('#bali-three').css('display', 'none');
            $('#bali-two').css('display', 'none');
            $('#bali-one').css('display', 'block');
        }
        else if (baliImage == 3) {
            $('#bali-four').css('display', 'none');
            $('#bali-two').css('display', 'block');
            $('#bali-three').css('display', 'none');
        }
        else if (baliImage == 4) {
            $('#bali-five').css('display', 'none');
            $('#bali-four').css('display', 'none');
            $('#bali-three').css('display', 'block');
        }
        else if (baliImage == 5) {
            $('#bali-one').css('display', 'none');
            $('#bali-five').css('display', 'none');
            $('#bali-four').css('display', 'block');
        }
        baliImage--;
    });
    $('#nextJogja').on('click', function(){
        if (jogjaImage == 1) {
            $('#jogja-two').css('display', 'block');
            $('#jogja-five').css('display', 'none');
            $('#jogja-one').css('display', 'none');
        }
        else if (jogjaImage == 2) {
            $('#jogja-one').css('display', 'none');
            $('#jogja-two').css('display', 'none');
            $('#jogja-three').css('display', 'block');

        }
        else if (jogjaImage == 3) {
            $('#jogja-two').css('display', 'none');
            $('#jogja-three').css('display', 'none');
            $('#jogja-four').css('display', 'block');

        }
        else if (jogjaImage == 4) {
            $('#jogja-three').css('display', 'none');
            $('#jogja-four').css('display', 'none');
            $('#jogja-five').css('display', 'block');

        }
        else if (jogjaImage == 5) {
            $('#jogja-four').css('display', 'none');
            $('#jogja-five').css('display', 'none');
            $('#jogja-one').css('display', 'block');

            jogjaImage = 0;
        }
        jogjaImage++;
    });
    $('#prevJogja').on('click', function(){
        if (jogjaImage == 1) {
            $('#jogja-one').css('display', 'none');
            $('#jogja-five').css('display', 'block');
            $('#jogja-two').css('display', 'none');
            jogjaImage = 6;
        }
        else if (jogjaImage == 2) {
            $('#jogja-three').css('display', 'none');
            $('#jogja-two').css('display', 'none');
            $('#jogja-one').css('display', 'block');
        }
        else if (jogjaImage == 3) {
            $('#jogja-four').css('display', 'none');
            $('#jogja-two').css('display', 'block');
            $('#jogja-three').css('display', 'none');
        }
        else if (jogjaImage == 4) {
            $('#jogja-five').css('display', 'none');
            $('#jogja-four').css('display', 'none');
            $('#jogja-three').css('display', 'block');
        }
        else if (jogjaImage == 5) {
            $('#jogja-one').css('display', 'none');
            $('#jogja-five').css('display', 'none');
            $('#jogja-four').css('display', 'block');
        }
        jogjaImage--;
    });
});