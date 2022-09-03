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
const controls = document.getElementById('controls');
const aboutContainer = document.getElementById('aboutContainer');
const checkScore = document.getElementById('checkScore');
const checkBtn = document.getElementById('checkBtn');
let score = -10;

let shuffledQuestions, currentQuestionIndex;

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    setNextQuestion();
    
});

homeLink.addEventListener('click', home);

function home() {
    questionContainer.classList.add('hide');
    contactForm.classList.add('hide');
    aboutContainer.classList.add('hide');
    startButton.classList.remove('hide');
}
contactLink.addEventListener('click', contact);

function contact() {
    questionContainer.classList.add('hide');
    startButton.classList.add('hide');
    aboutContainer.classList.add('hide');
    contactForm.classList.remove('hide');
}

aboutLink.addEventListener('click', about);

function about() {
    questionContainer.classList.add('hide');
    startButton.classList.add('hide');
    contactForm.classList.add('hide');
    aboutContainer.classList.remove('hide');
}

function mobileNavBar() {
    var myLinks = document.getElementById("myLinks");
    if (myLinks.style.display === "flex") {
      myLinks.style.display = "none";
    } else {
      myLinks.style.display = "flex";
    }
}

startButton.addEventListener('click', startGame); 

function startGame() {
    startButton.classList.add('hide');
    endScore.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    nextButton.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
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

function selectAnswer(e) {
    let selectedButton = e.target;
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
    endPopup();
}

let questions = [
    {
        question: 'How long is an elephant pregnant before she gives birth?',
        answers: [
            {text: '22 months', correct: true},
            {text: '7 months', correct: false},
            {text: '9 months', correct: false},
            {text: '14 months', correct: false}
        ]
    },
    {
        question: 'Which mammal is known to have the most powerful bite in the world?',
        answers: [
            {text: 'Crocodile', correct: false},
            {text: 'Hippopotamus', correct: true},
            {text: 'Lion', correct: false},
            {text: 'Rhino', correct: false}
        ]
    },
    {
        question: 'What is the size of a newborn kangaroo?',
        answers: [
            {text: '12 inches', correct: false},
            {text: '6 inches', correct: false},
            {text: '24 inches', correct: false},
            {text: '1 inch', correct: true}
        ]
    },
    {
        question: 'Which animal is known to spend 90% of its day sleeping?',
        answers: [
            {text: 'Sloths', correct: false},
            {text: 'Koalas', correct: true},
            {text: 'Chimpanzees', correct: false},
            {text: 'Tigers', correct: false}
        ]
    },
    {
        question: "What color is a giraffe's tongue?",
        answers: [
            {text: 'Brown', correct: false},
            {text: 'Pink', correct: false},
            {text: 'Purple', correct: true},
            {text: 'Red', correct: false}
        ]
    },
    {
        question: "Under their fur, what color is a polar bear's skin?",
        answers: [
            {text: 'Black', correct: true},
            {text: 'Grey', correct: false},
            {text: 'Pink', correct: false},
            {text: 'Orange', correct: false}
        ]
    },
    {
        question: "How long does it take a sloth to digest a meal?",
        answers: [
            {text: '8 hours', correct: false},
            {text: '2 days', correct: false},
            {text: '2 weeks', correct: true},
            {text: '3 weeks', correct: false}
        ]
    },
    {
        question: "What is the only land mammal that can't jump?",
        answers: [
            {text: 'Rhino', correct: false},
            {text: 'Giraffe', correct: false},
            {text: 'Panda', correct: false},
            {text: 'Elephant', correct: true}
        ]
    },
    {
        question: "What is a group of frogs called?",
        answers: [
            {text: 'Army', correct: false},
            {text: 'Colony', correct: false},
            {text: 'Knot', correct: false},
            {text: 'All of the above', correct: true}
        ]
    },
    {
        question: "How many eyes does a caterpillar have?",
        answers: [
            {text: 'Twelve', correct: true},
            {text: 'Six', correct: false},
            {text: 'Two', correct: false},
            {text: 'One', correct: false}
        ]
    }
];
