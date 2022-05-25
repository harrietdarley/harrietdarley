//GLOBAL VARIABLES 
const homeSection = document.getElementById('first-page-section');
const gameSection = document.getElementById('second-page-section');
const scoreSection = document.getElementById('third-page-section');
const textWrapper = document.querySelectorAll('.ml2');
const timerCountdown = document.getElementById('timer-countdown');
const playEasyButton = document.getElementById('playeasy-button');
const playHardButton = document.getElementById('playhard-button');
const volBtns = document.getElementsByClassName('vol-img');
const goHomeButton = document.getElementById('home-btn');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.querySelector('#answers-div .row');
const buttonsAnswer = document.getElementsByClassName('answers-div');
const nextButton = document.getElementById('next-button');
const scoreText = document.getElementById('score-text');
const homeButtonTwo = document.getElementById('second-home-btn');
const confirmHomeBtn = document.getElementById('confirm-button');
const cancelHomeBtn = document.getElementById('cancel-home-btn');
const confirmationModal = document.getElementById('confirm-close-modal');
const questionModal = document.getElementById('header-question')
const cancelQuestionModal = document.getElementById('close-question-button');
const pauseButton = document.getElementById('header-pause-btn');
const cancelPauseButton = document.getElementById('header-play-btn');

let answerSelected = false;
let overallScore = 0;

//Text Animation https://tobiasahlin.com
// Get all the elements with the .ml2 class
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
    audio.muted = true;
    //add event handling 
    volBtns[0].addEventListener('click', () => mute(audio, volBtns[0], volBtns[1]));
    volBtns[1].addEventListener('click', () => mute(audio, volBtns[0], volBtns[1]));
}

window.addEventListener('load', initAudioPlayer);

//TIMER
let initialTimer = 30;
let timeLeft = 30;
let timerId = null;

const countdown = () => {
    if (timeLeft == 0) {
        clearInterval(timerId);
        //change background colour of buttons and stop hover 
        //automatically go onto next question
        answerSelected = true;
        triggerNext();
        //only triggernext when delay of 2 seconds
    } else {
        timeLeft--;
        timerCountdown.innerHTML = timeLeft;
    }
}

const startTimer = () => {
    clearInterval(timerId);
    timerId = setInterval(countdown, 1000);
    timerCountdown.innerHTML = timeLeft;
}

const pauseTimer = () => {
    clearInterval(timerId)
    timerCountdown.innerHTML = timeLeft;
}

const continueTimer = () => {
    clearInterval(timerId);
    timerId = setInterval(countdown, 1000);
    timerCountdown.innerHTML = timeLeft;
}

//ADDING HOME BUTTON FUNCTIONALITY
const goHome = () => {
    confirmationModal.classList.add('hidden');
    homeSection.classList.remove('hidden');
    gameSection.classList.add('hidden');
}

goHomeButton.addEventListener('click', pauseTimer);
confirmHomeBtn.addEventListener('click', goHome);
cancelHomeBtn.addEventListener('click', continueTimer);
questionModal.addEventListener('click', pauseTimer);
cancelQuestionModal.addEventListener('click', continueTimer);


//START GAME 
const startGame = (_initialTimer) => {
    initialTimer = _initialTimer;
    shuffledQuestions = gameData.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion();
    homeSection.classList.add('hidden');
    gameSection.classList.remove('hidden');
}


playEasyButton.addEventListener('click', () => startGame(60));
playHardButton.addEventListener('click', () => startGame(30));


//GAME DATA 
let shuffledQuestions, currentQuestionIndex;

const triggerNext = () => {
    if (answerSelected) {
        currentQuestionIndex++;
        if (currentQuestionIndex >= shuffledQuestions.length) {
            showScoreScreen();
        }
        else {
            setNextQuestion();
        }
        answerSelected = false;
    }
};


//NEXT BUTTON
nextButton.addEventListener('click', () => triggerNext());

const setNextQuestion = () => {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    timeLeft = initialTimer;
    startTimer();
}


const showQuestion = (gameData) => {
    questionElement.innerText = gameData.question;
    let answersBlock = '';
    gameData.answer.forEach((answer, index) => {
        const answerButton = `
            <div class="answers-wrapper col-lg-6 col-sm-6 col-lg-3">
                <button class="btn answer-button" id="answersbutton-${index + 1}" onclick="selectAnswer(event)">${answer.text}</button>
            </div>
        `;
        answersBlock += answerButton;
    });
    answerButtonsElement.innerHTML = answersBlock;
}


const selectAnswer = (event) => {
    if (answerSelected || timeLeft <= 0)
        return;
    answerSelected = true;
    const selectedButton = event.target;
    const selectedAnswer = event.target.textContent;
    const answers = shuffledQuestions[currentQuestionIndex].answer;
    const answerToValidate = answers.find(answer => answer.text === selectedAnswer);
    if (answerToValidate.correct) {
        selectedButton.style.background = "green";
        overallScore++;
        pauseTimer()
    } else {
        selectedButton.style.background = "red";
        pauseTimer()
    }
    document.getElementById('answersbutton-1').setAttribute('disabled', 'disabled');
    document.getElementById('answersbutton-2').setAttribute('disabled', 'disabled');
    document.getElementById('answersbutton-3').setAttribute('disabled', 'disabled');
    document.getElementById('answersbutton-4').setAttribute('disabled', 'disabled');
}


const showScoreScreen = () => {
    homeSection.classList.add('hidden');
    gameSection.classList.add('hidden');
    scoreSection.classList.remove('hidden');
    scoreText.innerText = `You scored: ${overallScore} / ${shuffledQuestions.length} !`;
}

const returnHomePage = () => {
    homeSection.classList.remove('hidden');
    gameSection.classList.add('hidden');
    scoreSection.classList.add('hidden');
}

homeButtonTwo.addEventListener('click', returnHomePage);


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
    {
        question: 'How many keys are there on a piano?',
        answer: [
            { text: '52', correct: false },
            { text: '88', correct: true },
            { text: '91', correct: false },
            { text: '75', correct: false }
        ]
    },
    {
        question: 'Who authored The Hunger Games book series?',
        answer: [
            { text: 'James Dashner', correct: false },
            { text: 'Suzanne Collins', correct: true },
            { text: 'Veronica Roth', correct: false },
            { text: 'M A Bennett', correct: false }
        ]
    },
    {
        question: 'How many hearts does an octopus have?',
        answer: [
            { text: '1', correct: false },
            { text: '3', correct: true },
            { text: '8', correct: false },
            { text: '2', correct: false }
        ]
    },
    {
        question: 'Who sang 2003 hit Stacy’s Mom?',
        answer: [
            { text: 'The Strokes', correct: false },
            { text: 'Fountains of Wayne', correct: true },
            { text: 'Weezer', correct: false },
            { text: 'Teenage Fanclub', correct: false }
        ]
    },
    {
        question: 'Name the eldest Weasley sibling in Harry Potter',
        answer: [
            { text: 'Bill', correct: true },
            { text: 'George', correct: false },
            { text: 'Ron', correct: false },
            { text: 'Fred', correct: false }
        ]
    },
    {
        question: 'Who played 007 in film, Goldfinger?',
        answer: [
            { text: 'Sean Connery', correct: true },
            { text: 'Daniel Craig', correct: false },
            { text: 'Roger Moore', correct: false },
            { text: 'Timothy Dalton', correct: false }
        ]
    },
    {
        question: 'Who discovered Penicillin?',
        answer: [
            { text: 'Alexander Fleming', correct: true },
            { text: 'Selman Waksman', correct: false },
            { text: 'Marie Curie', correct: false },
            { text: 'Abelardo Aguilar', correct: false }
        ]
    },
    {
        question: 'Where is the original Starry Night by Vincent Van Gogh housed?',
        answer: [
            { text: 'New York', correct: false },
            { text: 'Rome', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Amsterdam', correct: false }
        ]
    },
    {
        question: 'What is the intense fear of spiders called?',
        answer: [
            { text: 'Agoraphobia', correct: false },
            { text: 'Acrophobia', correct: false },
            { text: 'Arachnophobia', correct: true },
            { text: 'Achluophobia', correct: false }
        ]
    },
]

