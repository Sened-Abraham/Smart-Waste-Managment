function validate() {
    var username_value = $("#username").val();
    var username_feedback = "";

    if (username_value.length < 10) {
        username_feedback = "Username must be at least 10 characters long";
        $("#username")[0].setCustomValidity(username_feedback);
        $("#username-feedback").text(username_feedback);
    } else {
        $("#username")[0].setCustomValidity("");
    }

    var password_value = $("#password").val();
    var password_feedback = "";
    var has_lowercase = password_value.match(/[a-z]/g);
    var has_uppercase = password_value.match(/[A-Z]/g);
    var has_digits = password_value.match(/[0-9]/g);
    var has_symbols = password_value.match(/[\-\*\^&%\$#@]/g);
    var correct_length = password_value.length >= 6 && password_value.length <= 12;

    if (has_lowercase && has_uppercase && has_digits && has_symbols && correct_length) {
        $("#password")[0].setCustomValidity("");
    } else {
        password_feedback = "Password must contain lowercase, uppercase, and digits, and must be greater than 6";
        $("#password")[0].setCustomValidity(password_feedback);
        $("#password-feedback").text(password_feedback);
    }

    $("form").addClass("was-validated");
}
