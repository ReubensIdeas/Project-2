const questionContainer = document.getElementById('questionContainer');
const questionElement = document.getElementById('question');
const startButton = document.getElementById('startBtn');
const nextButton = document.getElementById('nextBtn');
const answerButton = document.getElementById('answerButtons');
const endScore = document.getElementById('score');
const contactForm = document.getElementById('contactForm');
const contactLink = document.getElementById('contactLink');
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const aboutContainer = document.getElementById('aboutContainer');
const checkScore = document.getElementById('checkScore');
const checkBtn = document.getElementById('checkBtn');
const myLinks = document.getElementById("myLinks");
const levelCheck = document.getElementById('levelCheck');
const currentLevel = document.getElementById('currentLevel');
const homeSection = document.getElementById('home');

let level = 1;
let score = -10;

let shuffledQuestions, currentQuestionIndex;

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    level++;
    setNextQuestion();  
});

homeLink.addEventListener('click', home);

function home() {
    questionContainer.classList.add('hide');
    contactForm.classList.add('hide');
    aboutContainer.classList.add('hide');
    levelCheck.classList.add('hide');
    homeSection.classList.remove('hide');
    startButton.classList.remove('hide');
}
contactLink.addEventListener('click', contact);

function contact() {
    questionContainer.classList.add('hide');
    homeSection.classList.add('hide');
    startButton.classList.add('hide');
    aboutContainer.classList.add('hide');
    levelCheck.classList.add('hide');
    contactForm.classList.remove('hide');
}

aboutLink.addEventListener('click', about);

function about() {
    questionContainer.classList.add('hide');
    homeSection.classList.add('hide');
    startButton.classList.add('hide');
    contactForm.classList.add('hide');
    levelCheck.classList.add('hide');
    aboutContainer.classList.remove('hide');
}

function mobileNavBar() {
    if (myLinks.style.display === "flex") {
      myLinks.style.display = "none";
    } else {
      myLinks.style.display = "flex";
    }
}

startButton.addEventListener('click', startGame); 

function startGame() {
    startButton.classList.add('hide');
    homeSection.classList.add('hide');
    endScore.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextButton.classList.remove('hide');
    levelCheck.classList.remove('hide');
    currentQuestionIndex = 0;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    currentLevel.innerHTML = "Level " + level + "/10";
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButton.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButton.firstChild) {
        answerButton.removeChild
        (answerButton.firstChild);
    }
}

function selectAnswer(event) {
    let selectedButton = event.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        checkScore.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
        score++;
        console.log(score);
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function endPopup() {
    questionContainer.classList.add('hide');
    if (!startButton) {
        questionContainer.classList.remove('hide');
    }
}

checkBtn.addEventListener('click', endScreen);

function endScreen() {
    checkScore.classList.add('hide');
    questionContainer.classList.add('hide');
    startButton.innerHTML = 'Restart';
    startButton.classList.remove('hide');
    endScore.classList.remove('hide');
    endScore.innerHTML = "WELL DONE!<br><br>" + "You scored " + score + "/" + shuffledQuestions.length;
    score = -10;
    level = 1;
}