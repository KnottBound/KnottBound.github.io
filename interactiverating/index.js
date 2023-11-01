function showThankYouState() {
    const thankYouState = document.getElementById("thankYouState");
    if (thankYouState) {
      document.getElementById("ratingState").style.display = "none";
      thankYouState.style.display = "flex"; // Show the element
      thankYouState.classList.add("submitted"); // Apply the styles
    }
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