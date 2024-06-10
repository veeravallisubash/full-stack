function validated() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var email_error = document.getElementById("email_error");
    var pass_error = document.getElementById("pass_error");

    if (email === "") {
        email_error.style.display = "block";
        return false;
    } else {
        email_error.style.display = "none";
    }

    if (password === "") {
        pass_error.style.display = "block";
        return false;
    } else {
        pass_error.style.display = "none";
    }

    return true;
}
