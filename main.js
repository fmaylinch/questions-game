

let quizzes = [
    new Quiz("What keyword do you use to declare variables in JS?", "let"),
    new Quiz("What keyword do you use to return a value in a function?", "return"),
    new Quiz("Do you declare fields in JavaScript?", "no")
];

let game1 = new Game(quizzes);
game1.displayCurrentQuestion();

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function checkTheAnswer() {

    let answerInput = document.getElementById("answer");
    let answer = answerInput.value;

    game1.displayResultForAnswer(answer);
});





