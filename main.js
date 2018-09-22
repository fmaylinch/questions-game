

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

    // TODO: Finish this method (see its implementation in Game class)
    game1.displayResultForAnswer(answer);

    // TODO: Implement and call this method
    //       It should change the current question index.
    // game1.moveToNextQuestion();

    // TODO: Now display the next question
    //       Since the question index has changed,
    //       what do you have to do now?
});





