
function toggleLightMode() {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
}

// important ids: r1, r2, r3, r4, earth-stack, question
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');
const reponses = [r1, r2, r3, r4];
const earthStack = document.getElementById('earth-stack');
const question = document.getElementById('question');

var answers = [];
var currentQuestion = 0;


function setup() {
    reponses.forEach((r) => {
        r.addEventListener('click', () => {
            selectAnswer();
        });
    })
}

function selectAnswer(answerId) {
    // store the answer in the list of answers
}

function loadQuestion(question_id) {
    questions[question_id].answers.forEach((answer) => {

        responses.forEach((r) => {
            r.innerHTML = `<img src="${answer['image']}" alt="${answer.text}">
            <p>${answer.text}</p>`
        })

    });
}


function startGame() {
    // load first question
    loadQuestion("1");
}
