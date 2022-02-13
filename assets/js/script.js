//GLOBAL VARIABLES 
const homeSection = document.getElementById('firstpagesection');
const gameSection = document.getElementById('secondpagesection');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.querySelector('#answersdiv .row');

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

//ADDING HOME BUTTON FUNCTIONALITY
const goHome = () => {
    homeSection.classList.remove('hidden');
    gameSection.classList.add('hidden');
}

const goHomeButton = document.getElementById('homebtn');

goHomeButton.addEventListener('click', goHome);


//START GAME 
const startGame = () => {
    homeSection.classList.add('hidden');
    gameSection.classList.remove('hidden');
    shuffledQuestions = gameData.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

const playEasyButton = document.getElementById('playeasy-button');
const playHardButton = document.getElementById('playhard-button');

playEasyButton.addEventListener('click', startGame);
playHardButton.addEventListener('click', startGame);


//GAME DATA 
let shuffledQuestions, currentQuestionIndex;

const setNextQuestion = () => {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

const showQuestion = (gameData) => {
    questionElement.innerText = gameData.question;
    let answersBlock = '';
    gameData.answer.forEach((answer, index) => {
        const answerButton = `
            <div class="answers-wrapper col-lg-6 col-md-6 col-lg-3">
                <button class="btn answer-button" id="answersbutton-${index + 1}" onclick="selectAnswer()">
                    ${answer.text}
                </button>
            </div>
        `;
        answersBlock += answerButton;
    });
    answerButtonsElement.innerHTML = answersBlock;
}

const selectAnswer = (e) => {


}

const answerCorrect = () => {
    document.getElementById('answersbutton').style.backgroundColor = "green";
}

const answerWrong = () => {
    document.getElementById('answersbutton').style.backgroundColor = "red";
}

const gameData = [
    {
        question: 'What is the smallest country in the world?',
        answer: [
            { text: 'Vatican City', correct: true },
            { text: 'Malta', correct: false },
            { text: 'Italy', correct: false },
            { text: 'Monaco', correct: false }
        ]
    },
    {
        question: 'Which city is Banksy from?',
        answer: [
            { text: 'Bristol', correct: true },
            { text: 'London', correct: false },
            { text: 'Manchester', correct: false },
            { text: 'Paris', correct: false }
        ]
    },
    {
        question: 'What was the most popular girls name in the UK in 2019?',
        answer: [
            { text: 'Olivia', correct: true },
            { text: 'Poppy', correct: false },
            { text: 'Sophia', correct: false },
            { text: 'Isabella', correct: false }
        ]
    },
    {
        question: 'What is the currency of Denmark?',
        answer: [
            { text: 'Francs', correct: false },
            { text: 'Euro', correct: false },
            { text: 'Krone', correct: true },
            { text: 'Forint', correct: false }
        ]
    },
    {
        question: 'In what year did Tony Blair become British Prime Minister?',
        answer: [
            { text: '2007', correct: false },
            { text: '1953', correct: false },
            { text: '1995', correct: false },
            { text: '1997', correct: true }
        ]
    },
    {
        question: 'Which country in the world is believed to have the most miles of motorway?',
        answer: [
            { text: 'America', correct: false },
            { text: 'Russia', correct: false },
            { text: 'Canada', correct: false },
            { text: 'China', correct: true }
        ]
    },
    {
        question: 'In what year did the Beatles split up?',
        answer: [
            { text: '1991', correct: false },
            { text: '1952', correct: false },
            { text: '1965', correct: false },
            { text: '1970', correct: true }
        ]
    },
    {
        question: 'How many goals did England score (excluding penalty shoot-outs) at the Mens’ 2018 FIFA World Cup?',
        answer: [
            { text: '15', correct: false },
            { text: '8', correct: false },
            { text: '12', correct: true },
            { text: '4', correct: false }
        ]
    },
    {
        question: 'Who was the first presenter of the X Factor in the UK?',
        answer: [
            { text: 'Simon Cowell', correct: false },
            { text: 'Ant McPartlin', correct: false },
            { text: 'Kate Thornton', correct: true },
            { text: 'Dermot OLeory', correct: false }
        ]
    },
    {
        question: 'Gouda is a popular cheese originating from which country?',
        answer: [
            { text: 'France', correct: false },
            { text: 'Switzerland', correct: false },
            { text: 'Netherlands', correct: true },
            { text: 'Italy', correct: false }
        ]
    },
    {
        question: 'Which US state was Donald Trump born in?',
        answer: [
            { text: 'California', correct: false },
            { text: 'New Jersey', correct: false },
            { text: 'New York', correct: true },
            { text: 'Connecticut', correct: false }
        ]
    },
]
