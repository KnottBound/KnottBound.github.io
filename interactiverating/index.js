function showThankYouState() {
    //Hide One and Show Other
    document.getElementById("ratingState").style.display = "none";
    document.getElementById("thankYouState").style.display = "block";
}

document.getElementById("myBtn").addEventListener("click", function(event) {
    event.preventDefault();

    showThankYouState();
});


function ratingSelect(value) {
    //Stores the selected value
    const selectedRating = value;

    //Now we display rating for Thank You.
    const selectedRatingValue = document.getElementById("selectedRatingValue");
    selectedRatingValue.textContent = selectedRating;

}