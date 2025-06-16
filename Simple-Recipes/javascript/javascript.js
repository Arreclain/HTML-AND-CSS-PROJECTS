// RECIPE POPUP MODAL SECTION

// Sets up the button tath will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe.
var modals = document.querySelectorAll(".recipe-modal");

//Get the <span> element that closes the modal.
var closeBtn = document.getElementsByClassName("close-btn");

//When the user clicks the recipe button, open the modal.
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function(event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
    }
}