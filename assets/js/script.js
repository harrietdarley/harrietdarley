//Text Animation https://tobiasahlin.com
// Get all the elements with the .ml2 class
let textWrapper = document.querySelectorAll('.ml2');
// Loop over the textWrapper array and apply the animation effect to each element in it
textWrapper.forEach(el => {
    el.innerHTML = el.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
    );
});

anime.timeline({ loop: true })
    .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 10000,
        delay: (el, i) => 150 * i
    }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 2000
    });


//VOLUME BUTTON ONE

initAudioPlayer = () => {
    const audio = new Audio();
    audio.src = "assets/audio/bensound-allthat.mp3";
    audio.loop = true;
    audio.play();
    //set object references
    const volumebutton = document.getElementById("volume-icon");
    //add event handling 
    volumebutton.addEventListener("click", mute);
    //functions
    function mute() {
        if (audio.muted) {
            audio.muted = false;
            audio.play();
            volumebutton.src = "assets/images/icons8-volume-96.png";
        } else {
            audio.muted = true;
            audio.pause();
            volumebutton.src = "assets/images/icons8-mute-96.png";
        }
    }
}
window.addEventListener("load", initAudioPlayer);

//VOLUME BUTTON 2 


//HOME BUTTON 

//TIMER
let timeLeft = 30;
const elem = document.getElementById('timerCountdown');
const timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);

    } else {
        elem.innerHTML = timeLeft + ':00';
        timeLeft--;
    }
}