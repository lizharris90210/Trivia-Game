// start jquery
$(document).ready(function() {
  // click to start button, this and instructions disappears when clicked

  $("#startButton").click(start);
  function start() {
    $("#instructions").hide();
    $("#startButton").hide();
    buildQuiz();

    var time = 240;
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
  }
    var myQuestions = [
    {
      question:
        "Who is the artist known for Cubism and having a 'blue period'?",
      image: "assets/images/Pablo-Picasso-Guernica.jpg",
      correctAnswer: 0,
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
      image: "assets/images/Georgia-O’Keeffe-Black-Iris-III-1926.jpg",
      correctAnswer: 1,
      answers: ["Jackson Pollock", "Georgia O'Keeffe", "Frida Kahlo", "Banksy"]
    },
    {
      question:
        "Who is the French artist known for 'emphasized flattened forms and decorative pattern' of Pointillism in the Impressionist movement?",
      image: "assets/images/Henri-Matisse-La-Danse-1910.jpg",
      correctAnswer: 0,
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
      image: "assets/images/Kandinsky-Wassily-Composition-VII-1913.jpg",
      correctAnswer: 1,
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
      image: "assets/images/Claude-Monet-Water-Lilies-Nympheas.1.jpg",
      correctAnswer: 3,
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
      image: "assets/images/Frida-Kahlo-The-Two-Fridas-1939.jpg",
      correctAnswer: 2,
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
      image: "assets/images/Andy-Warhol-Marilyn-Diptych.jpeg",
      correctAnswer: 2,
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
      image: "assets/images/Salvador-Dali-The-Persistence-of-Memory-1931.jpg",
      correctAnswer: 3,
      answers: ["Max Earnst", "Man Ray", "Joan Miro", "Salvador Dali"]
    },
    {
      question:
        "Who is the Abstract Expressionist artist known for pouring or splashing paint on a canvas?",
      image: "assets/images/jackson-pollock-number-18-1950_u-l-enpvb0.jpg",
      correctAnswer: 1,
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
      image:
        "/images/Vincent-Van-Gogh-The-Starry-Night-De-sterrennacht.jpg",
      correctAnswer: 0,
      answers: [
        "Vincent Van Gogh",
        "Andy Warhol",
        "Rodion Raskolnikov",
        "Roy Lichtenstien"
      ]
    }
  ];
  function buildQuiz() {
    // we'll need a place to store the HTML output
    var output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      var answers = [];
      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }
    
      
      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> <p>${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </p><br></div>
         </div>`
        
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }


  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submitButton");


  // on submit, show results
  submitButton.addEventListener("click", showResults);

});

