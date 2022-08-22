let questionContainer = document.getElementById('questionContainer');
let questionElement = document.getElementById('question');
let startButton = document.getElementById('startBtn');
let nextButton = document.getElementById('nextBtn');
let answerButton = document.getElementById('answerButtons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
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
        question: 'What color is the tongue of a giraffe?',
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
        question: "How many eyes do a catapillar's have?",
        answers: [
            {text: 'Twelve', correct: true},
            {text: 'Six', correct: false},
            {text: 'Two', correct: false},
            {text: 'One', correct: false}
        ]
    }
]