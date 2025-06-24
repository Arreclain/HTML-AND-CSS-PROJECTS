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

        console.log("No number should appear here: " + movie);
        movie = "No movie selected";
    }

    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show();
}

function buyTickets() {
    displaySelectedMovieOptions();
}