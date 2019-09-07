// start jquery
$(document).ready(function(){
    
 
// click to start button, this and instructions disappears when clicked

$('#startButton').click(start)
    function start() {
    $('#instructions').hide(start)
    // $('#seconds')
    // next question
}
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
var questions = [
    {question: "Who is the artist known for Cubism and having a 'blue period'? a) Pablo Picasso b) Rufino Tamayo c) Frida Kahlo d) Vladimir Boronstikov",
     answer: "a"},
    {question: "Who is the American artist known for detailed flowers and as the 'Mother of American Modernism'? a) Jackson Pollock b) Georgia O'Keeffe c) Frida Kahlo d) Banksy",
     answer: "b"},
    {question: "Who is the French artist known for 'emphasized flattened forms and decorative pattern' of Pointillism in the Impressionist movement? a) Henri Matisse b) Rodion Raskolnikov c) Gregor Samsa d) Claude Monet",
     answer: "a"},
    {question: "Who is the Russian artist known as a leader in avant-garde art and as one of the founders of pure abstraction? a) Rodion Raskolnikov b) Wassily Kandinsky c) Salvadore Dali d) Gregor Samsa",
     answer: "b"},
    {question: "Who is the French Impressionist artist known for painting the effects of light with broken color and rapid brushstrokes? a) Roger Fry b) Wassily Kandinsky c) Salvadore Dali d) Claude Monet",
     answer: "d"},
    {question: "Who is the Mexican artist known for native styled self-portraits mixing realism with fantasy? a) Rufino Tamayo b) Jose Clemente Orozco c) Frida Kahlo d) Diego Rivera",
     answer: "c"},
    {question: "Who is the American pop artist known for mixing media, advertising, and celebrity culture? a) Keith Haring b) Roy Lichtenstein c) Andy Warhol d) David Hockney",
     answer: "c"},
    {question: "Who is the Spanish Surrealist artist known for strikingly bizarre, and dream-like images? a) Max Earnst b) Man Ray c) Joan Miro d) Salvador Dali",
     answer: "d"},
    {question: "Who is the Abstract Expressionist artist known for pouring or splashing paint on a canvas? a) David Smith b) Jackson Pollock c) Wolfgang Paalen d) Martha Graham",
     answer: "b"},
    {question: "Who is the Post-Impressionist artist known for self-portraits and using bold colors and dramatic, impulsive, and expressive brushwork? a) Vincent Van Gogh b) Andy Warhol c) Rodion Raskolnikov d) Roy Lichtenstien",
     answer: "a"},
];
var score = 0;

for (var i = 0; i < questions.length; i++) {
    var userAnswer = window.prompt(questions [i].prompt);
    if (userAnswer == questions[i].answer); {
        score++;
    }
    
// }
// End page with stats
// "Done!"
// correct:
// wrong:
// unanswered:

});