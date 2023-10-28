function validateForm() {
    let x = document.getElementById("email").value;
    let re = /\S+@\S+\.\S+/;
    if (x.match(re)) {
        return true;
    }
    else {
        document.getElementById("response").innerHTML = 
        "Please enter a valid email address."
        document.getElementById("response").style.color =
        "red";
        document.getElementById("email").style.
        borderColor = "red";
       return false;
    }
}