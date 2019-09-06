// start jquery
$(document).ready(function(){
    
 
// click to start button, this and instructions disappears when clicked
$("#startButton").click = function startButton(){
    // starts questions
    // starts timer for each question

// Timer count down
function startTimer(duration, display) {
    var timer = duration, seconds;
    interval(function () {
        seconds = interval(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function countDown() {
    var thirtySeconds = 30000,
        display = $('#seconds');
    startTimer(thirtySeconds, display);
};}
// One question per page at a time. When answered, show correct or wrong and move to next question.
// When timer runs out, page automatically goes to next question unless out of questions, then to End Page with stats
    // variables
// var questions = [
//     {prompt: "Who is the famous artist who created this masterpeice? a) Pablo Picasso b) Indiana Jones c) Frida Kahlo d) Vladimir Boronstikov",
//      answer: "a"},

// ];
// var score = 0;

// for (var i = 0; i < questions.length; i++) {
//     var userAnswer = window.prompt(questions [i].prompt);
//     if (userAnswer == questions[i].answer); {
//         score++;
//     }
    
// }
// End page with stats
// "Done!"
// correct:
// wrong:
// unanswered:

});