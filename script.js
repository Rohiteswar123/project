console.log("d")
const questions=[
        {
            question:"Which of the following is a fire type pokemon",
            answers:[
                {text: "Blastroise",correct:false},
                {text: "Charizad",correct:true},
                {text: "Pickachu",correct:false},
                {text: "Raichu",correct:false},
            ]
        },
        {
            question:"Which of the following is a water type pokemon",
            answers:[
                {text: "Blastroise",correct:true},
                {text: "Charizad",correct:false},
                {text: "Pickachu",correct:false},
                {text: "Raichu",correct:false},
            ]
        },
        {
            question:"Which of the following is a grass type pokemon",
            answers:[
                {text: "Blastroise",correct:false},
                {text: "Bulbazor",correct:true},
                {text: "Pickachu",correct:false},
                {text: "Raichu",correct:false},
            ]
        },
        {
            question:"Which of the following is a brock's type pokemon",
            answers:[
                {text: "Blastroise",correct:false},
                {text: "Onix",correct:true},
                {text: "Pickachu",correct:false},
                {text: "Raichu",correct:false},
            ]
        },
        {
            question:"Which of the following is  not a ash's type pokemon",
            answers:[
                {text: "Bayleaf",correct:false},
                {text: "Charizad",correct:false},
                {text: "Pickachu",correct:false},
                {text: "Raichu",correct:true},
            ]
        }
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+" . "+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.correct==='true';
    if(iscorrect){
        selectedBtn.classList.add('correct');
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect');

    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add('correct');
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
nextButton.addEventListener('click',()=>{
     if(currentQuestionIndex < questions.length){
        handleNextButton();
     }
     else{
        startQuiz();
     }
});
function showScore(){
    resetState();
    questionElement.innerHTML=`Your Score ${score}`;
    
    nextButton.innerHTML=`Play Again`;
    nextButton.style.display='block';
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
startQuiz();
