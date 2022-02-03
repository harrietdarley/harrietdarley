//GLOBAL VARIABLES 
const homeSection = document.getElementById('firstpagesection');
const gameSection = document.getElementById('secondpagesection');

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



//VOLUME FUNCTION
const mute = (audio, btn1, btn2) => {
    if (audio.muted) {
        audio.muted = false;
        audio.play();
        btn1.src = "assets/images/icons8-volume-96.png";
        btn2.src = "assets/images/icons8-volume-96.png";
    } else {
        audio.muted = true;
        audio.pause();
        btn1.src = "assets/images/icons8-mute-96.png";
        btn2.src = "assets/images/icons8-mute-96.png";
    }
}

//VOLUME BUTTONS
const initAudioPlayer = () => {
    const audio = new Audio();
    audio.src = "assets/audio/bensound-allthat.mp3";
    audio.loop = true;
    const volBtns = document.getElementsByClassName('vol-img');
    //add event handling 
    volBtns[0].addEventListener('click', () => mute(audio, volBtns[0], volBtns[1]));
    volBtns[1].addEventListener('click', () => mute(audio, volBtns[0], volBtns[1]));
}

window.addEventListener('load', initAudioPlayer);

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

//HIDING HOME PAGE WHEN CLICKING PLAY
const startGame = () => {
    homeSection.classList.add('hidden');
    gameSection.classList.remove('hidden');

}

const playEasyButton = document.getElementById('playeasy-button');
const playHardButton = document.getElementById('playhard-button');

playEasyButton.addEventListener('click', startGame);
playHardButton.addEventListener('click', startGame);

//ADDING HOME BUTTON FUNCTIONALITY
const goHome = () => {
    homeSection.classList.remove('hidden');
    gameSection.classList.add('hidden');
}

const goHomeButton = document.getElementById('homebtn');

goHomeButton.addEventListener('click', goHome);