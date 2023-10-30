function validateForm() {
    const form = document.getElementById("launchEmail");    
    const errorMsg = document.querySelector(".errorMessage");
        console.log(errorMsg);

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let x = document.getElementById("email").value;
            let re = /\S+@\S+\.\S+/;

            if (x.match(re)) {
                form.submit();
            } else {
                errorMsg.textContent = "Please enter a valid email address."
                errorMsg.classList.add("appearError");
            }
        })
}

    /*
    else {
        document.getElementById("response").innerHTML = 
        "Please enter a valid email address."
        document.getElementById("response").style.color =
        "red";
        document.getElementById("email").style.
        borderColor = "red";
       return false;
    }*/
