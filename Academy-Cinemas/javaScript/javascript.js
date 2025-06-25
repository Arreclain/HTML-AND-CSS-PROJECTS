//Initialize Popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {

    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

//Initialize Toast
//This code looks functionally *similar* to hers, but it is *not* identical.
//Minute 2:50 if I need to fix this.
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

//Function to display toast with selected options.
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;


    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;
    var toastBody = document.getElementById('toastBody');

    //This is my custom code.
    //It checks the value of movie versus the movie  titles, then uses the ID
    //attribute to apply a bootstrap based class name to the related paragraph text.
    if (movie == 'Ben-Hur') {
        document.getElementById('choseBen').classList.add('alert-info');
        console.log(movie);
    } else if (movie == 'The Day the Earth Stood Still') {
        document.getElementById('choseStood').classList.add('alert-info');
        console.log(movie);
    } else if (movie == 'Vertigo') {
        document.getElementById('choseVertigo').classList.add('alert-info');
        console.log(movie);
    } else {
        //This is for catching error, mostly.  It should never occur.
        console.log("No name should appear here: " + movie);
        movie = "No movie selected";
    }

    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show();
}

function buyTickets() {
    displaySelectedMovieOptions();
}

//JQUERY

//Shrinks header size when the document is scrolled down by 80px
$(document).on("scroll", function(){
    //When the web page has been scrolled down by 50px,
    //This effect triggers.  Did we want 80px or 50px?
    if ($(document).scrollTop() > 50) {
        //Once the 50px requirement has been met, add the 
        //nav-shrink class to the "nav" element, identified
        //via nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobile drop menu
        //to accommodate the new height decrease.
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //If the webpage has not been scrolled down or
        //is back at the top, the nav-shrink class selector
        //is removed from the HTML element labeled "nav"

        $("nav").removeClass("nav-shrink");
        //The margin for the drop down menu is now
        //returned to its original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

//Close mobile menu when a navigation link is clicked
$(document).ready(function () {
    //On click when an element contains just the nav-link class and not the drowpdown-toggle
    //also close when an element wit the class .dropdown-item (each movie link) has been clicked
    //The above comments provided for the code here scarely make sense.
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function(){
        //Collapse the navbar when a link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
});