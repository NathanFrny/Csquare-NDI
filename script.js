


const html = document.querySelector('html');
const lightSwitch = document.getElementById('light-switch');

// light switcher
function toggleLightMode() {
    if (html.classList.contains('light')) {
        lightSwitch.innerHTML = '<img src="img/sun.svg" alt="Toggle light mode" class="fa" onclick="toggleLightMode()" />';
    }
    else {
        lightSwitch.innerHTML = '<img src="img/moon.svg" alt="Toggle dark mode" class="fa" onclick="toggleLightMode()" />';
    }
    html.classList.toggle('light');
}

// important ids: r1, r2, r3, r4, earth-stack, question
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');
const reponsesElements = [r1, r2, r3, r4];
const earthStack = document.getElementById('earth');
const question = document.getElementById('question');


var answers = [];
var currentQuestion = 0;


function setup() {
    reponsesElements.forEach((r) => {
        r.addEventListener('click', () => {
            // console.log("clicked on ", r.id);
            if (r.hasAttribute('disabled')) {
                return;
            }
            disableResponses();
            selectAnswer(r.id[1]); // selects the number only
        });
    })
}

function enableResponse() {
    reponsesElements.forEach((r) => {
        r.removeAttribute('disabled');
    })
}

function disableResponses() {
    reponsesElements.forEach((r) => {
        r.toggleAttribute('disabled');
    })
}

function selectAnswer(answerId) {
    // store the answer in the list of answers
    answers.push(answerId);

    console.log("answerId", answerId);

    // Show the onclic-text for 5 secons in the question div
    question.innerHTML = questions[currentQuestion].answers[answerId].onclic_text;
    setTimeout(() => {
        nextQuestion();
    }, 5000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        // end of game
        alert("end of game")
        endOfGame();
        return;
    }
    questions[currentQuestion].answers.forEach((answer, index) => {
        console.log(answer, index)
        reponsesElements[index].innerHTML = `
        <img src="${answer.image}" alt="${answer.text}" /><p>${answer.text}</p>`
    });

    enableResponses();

}



function startGame() {
    currentQuestion = -1;
    // load first question
    nextQuestion();
}

function endOfGame() {
    console.log("end of game");
}


setup();
startGame();