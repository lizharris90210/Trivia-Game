// start jquery
$(document).ready(function() {
  // click to start button, this and instructions disappears when clicked

  $("#startButton").click(start);

  function start() {
    $("#instructions").hide();
    $("#startButton").hide();
    var question = $("#question");
    question.innerHTML = questions[0].question;

    var answer1 = $("#answer1");
    answer1.innerHTML = questions[0].answers[0];
    var answer2 = $("#answer2");
    answer2.innerHTML = questions[0].answers[1];
    var answer3 = $("#answer3");
    answer3.innerHTML = questions[0].answers[2];
    var answer4 = $("#answer4");
    answer4.innerHTML = questions[0].answers[3];
  }

  var time = 30;
  var seconds = document.getElementById("seconds");
  var counter = setInterval(countdown, 1000);

  function countdown() {
    if (time == -1) {
      clearTimeout(counter);
      nextQuestion();
    } else {
      seconds.innerHTML = time + " seconds remaining";
      time--;
    }
  }

  function nextQuestion() {}
  // One question per page at a time. When answered, show correct or wrong and move to next question.
  // When timer runs out, page automatically goes to next question unless out of questions, then to End Page with stats
  // variables
  var questions = [
    {
      question:
        "Who is the artist known for Cubism and having a 'blue period'?",
      answer: 0,
      answers: [
        "Pablo Picasso",
        "Rufino Tamayo",
        "Frida Kahlo",
        "Vladimir Boronstikov"
      ]
    },
    {
      question:
        "Who is the American artist known for detailed flowers and as the 'Mother of American Modernism'?",
      answer: 1,
      answers: [
        "Jackson Pollock",
        "Georgia O'Keeffe",
        "Frida Kahlo",
        "Banksy"
      ]
    },
    {
      question:
        "Who is the French artist known for 'emphasized flattened forms and decorative pattern' of Pointillism in the Impressionist movement?",
      answer: 0,
      answers: [
        "Henri Matisse",
        "Rodion Raskolnikov",
        "Gregor Samsa",
        "Claude Monet"
      ]
    },
    {
      question:
        "Who is the Russian artist known as a leader in avant-garde art and as one of the founders of pure abstraction?",
      answer: 1,
      answers: [
        "Rodion Raskolnikov",
        "Wassily Kandinsky",
        "Salvadore Dali", 
        "Gregor Samsa"
      ]
    },
    {
      question:
        "Who is the French Impressionist artist known for painting the effects of light with broken color and rapid brushstrokes?",
      answer: 3,
      answers: [
        "Roger Fry",
        "Wassily Kandinsky",
        "Salvadore Dali",
        "Claude Monet"
      ]
    },
    {
      question:
        "Who is the Mexican artist known for native styled self-portraits mixing realism with fantasy?",
      answer: 2,
      answers: [
        "Rufino Tamayo",
        "Jose Clemente Orozco",
        "Frida Kahlo",
        "Diego Rivera"
      ]
    },
    {
      question:
        "Who is the American pop artist known for mixing media, advertising, and celebrity culture?",
      answer: 2,
      answers: [
        "Keith Haring",
        "Roy Lichtenstein", 
        "Andy Warhol",
        "David Hockney"
    ]
    },
    {
      question:
        "Who is the Spanish Surrealist artist known for strikingly bizarre, and dream-like images?",
      answer: 3,
      answers: [
        "Max Earnst",
        "Man Ray",
        "Joan Miro", 
        "Salvador Dali"
      ]
    },
    {
      question:
        "Who is the Abstract Expressionist artist known for pouring or splashing paint on a canvas?",
      answer: 1,
      answers: [
        "David Smith",
        "Jackson Pollock",
        "Wolfgang Paalen", 
        "Martha Graham"
      ]
    },
    {
      question:
        "Who is the Post-Impressionist artist known for self-portraits and using bold colors and dramatic, impulsive, and expressive brushwork?",
      answer: 0,
      answers: [
        "Vincent Van Gogh",
        "Andy Warhol",
        "Rodion Raskolnikov",
        "Roy Lichtenstien"
      ]
    }
  ];
  var score = 0;

    for (var i = 0; i < questions.length; i++) {
      // var userAnswer = window.prompt(questions[i].prompt);
      if (userAnswer == questions[i].answer);
      {
        score++;
      }
    }
  // End page with stats
  // "Done!"
  // correct:
  // wrong:
  // unanswered:
});
