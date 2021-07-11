AOS.init();

//Get the PopUp
const popUp = document.querySelector('.popUp');
//Get the Close Button
const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', function () {
    function closeAd(e) {
        e.classList.remove('active');
    }
    closeAd(popUp);
})

//Allow the popUp ad to appear after 2 secs on page load
setTimeout(function () {
    function displayAd(e) {
        e.classList.toggle('active');
    }
    displayAd(popUp);
}, 4000);

setTimeout(function () {
    document.querySelector('#logo').classList.remove('hide');
}, 200);



//Countdown

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let launchDate = "July 26, 2021 00:00:00",
        countDown = new Date(launchDate).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "NEW DROP NOW AVAILABLE!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());

//GALLERY

// document.addEventListener('DOMContentLoaded', function () {
//     var stream = document.querySelector('.gallery__stream');
//     var items = document.querySelectorAll('.gallery__item');

//     var prev = document.querySelector('.gallery__prev');
//     prev.addEventListener('click', function () {
//         stream.insertBefore(items[items.length - 1], items[0]);
//         items = document.querySelectorAll('.gallery__item');
//     });

//     var next = document.querySelector('.gallery__next');
//     next.addEventListener('click', function () {
//         stream.appendChild(items[0]);
//         items = document.querySelectorAll('.gallery__item');
//     });
// });

