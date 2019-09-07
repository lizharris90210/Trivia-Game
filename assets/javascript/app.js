// start jquery
$(document).ready(function(){
    
 
// click to start button, this and instructions disappears when clicked
var time = 30;
var seconds = document.getElementById('seconds');
var counter = setInterval(countdown, 1000);

function countdown() {
    if (time == -1) {
        clearTimeout(counter);
        nextQuestion();
    } else {
        seconds.innerHTML = time + ' seconds remaining';
        time--;
    }
}

function nextQuestion() {
    console.log(NEXT)
}
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