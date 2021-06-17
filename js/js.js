/* 
 * Ku Yu Kai
 * 45387850
 */

$(document).ready(function () {
    new fullpage('#fullpage', {
//        loopBottom: false,
//        continuousHorizontal:false,
//        scrollHorizontally: false,
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#A59FCF', '#A7C5DF', '#D2E0E1'] /*https://www.schemecolor.com/project-18.php*/
    });
    /*---------------------------Page 2 Function--------------------------------*/
    $('#HTML').circleProgress({
        value: 0.7
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html('70<i>%</i>');
    });
    $('#CSS').circleProgress({
        value: 0.7
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html('70<i>%</i>');
    });
    $('#JS').circleProgress({
        value: 0.9
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html('90<i>%</i>');
    });
    $('#PHP').circleProgress({
        value: 1.0
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html('100<i>%</i>');
    });

    /*---------------------------Page 3 Function--------------------------------*/
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow');
    }, 3000);

    $("#slideshow2 > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow2 > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow2');
    }, 3000);

    $("#slideshow3 > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow3 > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow3');
    }, 3000);

    $("#slideshow4 > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow4 > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow4');
    }, 3000);
    /*Slide Show 5*/
    var elements = $();
    for (x = 1; x <= 9; x++) {
        if (x == 6) {
            elements = elements.add('<div><img src="images/qrCodeScanner.png" alt="" class="popup-images"/></div>');
        } else if (x == 5) {
            elements = elements.add('<div><img src="images/preventingDirectEntryToPage.png" alt="" class="popup-images"/></div>');
        } else if (x == 7) {
            elements = elements.add('<div><img src="images/quizRandomizer.png" alt="" class="popup-images"/></div>');
        }
        elements = elements.add('<div><img src="images/section3-2-4-' + x + '.png" alt="" class="popup-images"/></div>');
        if (x == 9) {
            $('#slideshow5').append(elements);
            $("#slideshow5 > div:gt(0)").hide();

            setInterval(function () {
                $('#slideshow5 > div:first')
                        .fadeOut(1000)
                        .next()
                        .fadeIn(1000)
                        .end()
                        .appendTo('#slideshow5');
            }, 3000);
        }
    }
    var elements2 = $();
    for (x = 1; x <= 7; x++) {
        elements2 = elements2.add('<div><img src="images/section3-3-1-' + x + '.png" alt="" class="popup-images"/></div>');
        if (x == 7) {
            $('#slideshow6').append(elements2);
            $("#slideshow6 > div:gt(0)").hide();

            setInterval(function () {
                $('#slideshow6 > div:first')
                        .fadeOut(1000)
                        .next()
                        .fadeIn(1000)
                        .end()
                        .appendTo('#slideshow6');
            }, 3000);
        }
    }

    $("#slideshow7 > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow7 > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow7');
    }, 3000);
    
    $("#slideshow8 > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow8 > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow8');
    }, 3000);
    $('#section3-1').mouseenter(function () {
        $('#popup').show();
        $("#popup").children().hide();
        $("#section3-1-1").show();
    });
    $('#section3-2').mouseenter(function () {
        $('#popup').show();
        $("#popup").children().hide();
        $("#section3-1-2").show();
    });
    $('#section3-3').mouseenter(function () {
        $('#popup').show();
        $("#popup").children().hide();
        $("#section3-1-3").show();
    });
    $('#popup').mouseleave(function () {
        $('#popup').hide();
    });

    $('#moveUpButton').click(function () {
        document.getElementById("work-in-progress-container").scrollTop += -350;
    });
    $('#moveDownButton').click(function () {
        document.getElementById("work-in-progress-container").scrollTop += 350;
    });

    /*Tabs JS*/
    $('#tab1').click(function () {
        openCity(event, 'tab1content');
    });
    $('#tab2').click(function () {
        openCity(event, 'tab2content');
    });
    $('#tab3').click(function () {
        openCity(event, 'tab3content');
    });
    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    document.getElementById("tab1").click();
});