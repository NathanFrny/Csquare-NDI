


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
const brief = document.getElementById('brief');
const body = document.querySelector('body');

var score = 0;
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
            selectAnswer(String(r.id[1] - 1)); // selects the number only
        });
    })
}

function enableResponses() {
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

    score += questions[currentQuestion]["answers"][answerId]["pollution-score"];

    // Add to the brief at the end
    brief.innerHTML += `<div class="brief-item"><img src="${questions[currentQuestion]["answers"][answerId]["brief-image"]}" /><p>${questions[currentQuestion]["answers"][answerId]["brief-text"]}</p></div>`
    // add the earth to the stack
    if (questions[currentQuestion]["answers"][answerId]["planet-asset"]) {
        earthStack.innerHTML += `<img src="${questions[currentQuestion]["answers"][answerId]["planet-asset"]}" />`
    }

    if (questions[currentQuestion]["answers"][answerId]["onclic-text"]) {
        // Show the onclic-text for 5 secons in the question div
        question.innerHTML = `<p>${questions[currentQuestion]["answers"][answerId]["onclic-text"]}</p>`
        setTimeout(() => {
            nextQuestion();
        }, 8000);
    }
    else {
        nextQuestion();
    }

}

function nextQuestion() {
    currentQuestion++;
    console.log(questions[currentQuestion]["text"])
    if (currentQuestion >= questions.length - 1) {
        // end of game
        alert("end of game")
        endOfGame();
        return;
    }
    questions[currentQuestion].answers.forEach((answer, index) => {
        // console.log(answer, index)
        reponsesElements[index].innerHTML = `
        <img src="${answer.image}" alt="${answer.text}" /><p>${answer.text}</p>`
    });

    question.innerHTML = questions[currentQuestion].text;

    enableResponses();

}



function startGame() {
    currentQuestion = -1;
    // load first question
    nextQuestion();
}

function endOfGame() {
    alert("end of game")
    brief.classList.remove('hidden');

    if (score < 11) {
        body.style.backgroundImage = "url('img/ville_parfaite.png')";
    }
    else if (score < 21) {
        body.style.backgroundImage = "url('img/ville_moderne.png')";
    }
    else {
        body.style.backgroundImage = "url('img/ville_polluee.png')";
    }

}


setup();
startGame();