// start jquery
$(document).ready(function(){
    
 

$("#startButton").click = function startButton(){
}

var x = setInterval(function() {
    var timer = seconds.length;
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    $("#second").innerHTML = seconds;
        if (timer < 0) {
            clearInterval (x);
            $("#second").innerHTML = '0';
            alert("Time's Up!");
        }})
// variables
// var questions = [
//     {prompt: "Who is the famous artist who created this masterpeice? /n a) Pablo Picasso /n b) Indiana Jones /n c) Frida Kahlo /n d) Vladimir Boronstikov",
//      answer: "a"},

// ];
var score = 0;

for (var i = 0; i < questions.length; i++) {
    var userAnswer = window.prompt(questions [i].prompt);
    if (userAnswer == questions[i].answer); {
        score++;
    }
    
}
// "Done!"
// correct:
// wrong:
// unanswered:

});