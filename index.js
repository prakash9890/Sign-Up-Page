function validate() {
    var pass = document.myform.password.value
    if (pass.length < 8) {
        alert("Please enter at least 8 digit password")
        return false
    }
    var mobile = document.myform.mobile.value
    if (isNaN(mobile)) {
        alert("Please enter numerical mobile number");
        return false
    }
    if (mobile.length < 10 || mobile.length > 10) {
        alert("Please enter 10 digit mobile number");
        return false
    }
    var email = document.myform.email.value
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 > email.length) {
        alert("Enter valid email address");
        return false
    }

    return true;
    
}