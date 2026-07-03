const questions = [

{
    question:"What is the capital of France?",

    answers:[
        "London",
        "Paris",
        "Berlin",
        "Madrid"
    ],

    correct:1
},

{
    question:"Which planet is known as the Red Planet?",

    answers:[
        "Earth",
        "Mars",
        "Jupiter",
        "Venus"
    ],

    correct:1
},

{
    question:"How many days are there in a leap year?",

    answers:[
        "365",
        "366",
        "364",
        "360"
    ],

    correct:1
},

{
    question:"What is 10 × 5?",

    answers:[
        "45",
        "50",
        "55",
        "60"
    ],

    correct:1
},

{
    question:"Which language is used for web pages?",

    answers:[
        "Python",
        "Java",
        "HTML",
        "C++"
    ],

    correct:2
}

];

const question = document.getElementById("question");

const answers = document.getElementById("answers");

const nextBtn = document.getElementById("nextBtn");

const result = document.getElementById("result");

const scoreText = document.getElementById("score");

const restartBtn = document.getElementById("restartBtn");

const quiz = document.getElementById("quiz");

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

showQuestion();

function showQuestion(){

    selectedAnswer = null;

    nextBtn.disabled = true;

    question.textContent = questions[currentQuestion].question;

    answers.innerHTML = "";

    questions[currentQuestion].answers.forEach((answer,index)=>{

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer");

        button.onclick=()=>selectAnswer(index);

        answers.appendChild(button);

    });

}

function selectAnswer(index){

    selectedAnswer = index;

    nextBtn.disabled = false;

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach((button)=>{

        button.disabled = true;

    });

    if(index === questions[currentQuestion].correct){

        buttons[index].classList.add("correct");

    }else{

        buttons[index].classList.add("wrong");

        buttons[questions[currentQuestion].correct].classList.add("correct");

    }

}

nextBtn.addEventListener("click",()=>{

    if(selectedAnswer===questions[currentQuestion].correct){

        score++;

    }

    currentQuestion++;

    if(currentQuestion<questions.length){

        showQuestion();

    }else{

        showResult();

    }

});

function showResult(){

    quiz.classList.add("hidden");

    result.classList.remove("hidden");

    scoreText.textContent=`Your Score: ${score} / ${questions.length}`;

}

restartBtn.addEventListener("click",()=>{

    currentQuestion=0;

    score=0;

    result.classList.add("hidden");

    quiz.classList.remove("hidden");

    showQuestion();

});