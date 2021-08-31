$(function () {

    var Page = (function () {

        var $navArrows = $('#nav-arrows').hide(),
            $shadow = $('#shadow').hide(),
            slicebox = $('#sb-slider').slicebox({
                onReady: function () {

                    $navArrows.show();
                    $shadow.show();

                },
                orientation: 'r',
                cuboidsRandom: true
            }),

            init = function () {

                initEvents();

            },
            initEvents = function () {

                // add navigation events
                $navArrows.children(':first').on('click', function () {

                    slicebox.next();
                    return false;

                });

                $navArrows.children(':last').on('click', function () {

                    slicebox.previous();
                    return false;

                });

            };

        return {
            init: init
        };

    })();

    Page.init();

});

function validate() {

    var firstname_value = $("#firstname").val();
    var firstname_feedback = "";
    if (firstname_value.length < 12) {
        firstname_feedback = "firstname must be at least 12 characters long";
        $("#firstname")[0].setCustomValidity(firstname_feedback);
        $("#firstname-feedback").text(firstname_feedback);
    } else {
        $("#firstname")[0].setCustomValidity("");
    }


    var message_value = $("#message").val();
    var message_feedback = "";
    if (message_value.length < 20) {
        message_feedback = " message must contain at least 20 characters";
        $("#message")[0].setCustomValidity(message_feedback);
        $("#message-feedback").text(message_feedback);
    } else {
        $("#message")[0].setCustomValidity("");
    }



    var email_value = $("#email").val();
    var email_feedback = "";
    var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email_value.match(mailformat)) {
        $("#email")[0].setCustomValidity("");
    } else {
        email_feedback = " The email must conatain a proper top domain name";
        $("#email")[0].setCustomValidity(email_feedback);
        $("#email-feedback").text(email_feedback);
    }

    $("form").addClass("was-validated");
}



function weightConverter(valNum) {
    document.getElementById("outputAED").innerHTML = 5 * valNum / 10;
}
//
//
