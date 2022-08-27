let questionContainer = document.getElementById('questionContainer');
let questionElement = document.getElementById('question');
let startButton = document.getElementById('startBtn');
let nextButton = document.getElementById('nextBtn');
let answerButton = document.getElementById('answerButtons');
let nameInput = document.getElementsByClassName('nameInput');
let endScore = document.getElementById('score');
let score = -10;

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function mobileNavBar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

function startGame() {
    startButton.classList.add('hide');
    endScore.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    nextButton.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButton.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButton.firstChild) {
        answerButton.removeChild
        (answerButton.firstChild)
    }
}

function selectAnswer(e) {
    let selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerHTML = 'Restart';
        startButton.classList.remove('hide');
        endScore.classList.remove('hide')
        endScore.innerHTML = "You scored " + score + "/" + shuffledQuestions.length;
        endPopup()
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        score++
        console.log(score)
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function endPopup() {
    questionContainer.classList.add('hide')
    if (startButton == clicked) {
        questionContainer.classList.remove('hide')
    }
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
]