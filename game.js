
class Game {

    /** quizzes is an array of Quiz */
    constructor(quizzes) {
        this.quizzes = quizzes;
        this.currentQuizIndex = 0;
        this.numCorrectAnswers = 0;
    }

    displayCurrentQuestion() {

        let question = document.getElementById("question");

        let index = this.currentQuizIndex;
        question.textContent = this.quizzes[index].question;
    }

    /** Returns true if the userAnswer is correct, false otherwise */
    checkAnswerForCurrentQuestion(userAnswer) {

        let index = this.currentQuizIndex;
        let currentQuiz = this.quizzes[index];
        let correctAnswer = currentQuiz.answer;

        return userAnswer === correctAnswer;
    }

    displayResultForAnswer(answer) {

        let correct = this.checkAnswerForCurrentQuestion(answer);

        let result = document.getElementById("result");

        // TODO: change numCorrectAnswers accordingly

        if (correct) {
            result.textContent = "'" + answer + "' is correct!";
            result.classList.remove("result-wrong");
            result.classList.add("result-ok");
        } else {
            result.textContent = "'" + answer + "' is wrong!";
            result.classList.remove("result-ok");
            result.classList.add("result-wrong");
        }
    }
}
