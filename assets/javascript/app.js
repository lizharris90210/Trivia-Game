// start jquery
$(document).ready(function() {
  // click to start button, this and instructions disappears when clicked
  $("#startButton").click(start);
   function start() {
    $("#instructions").hide();
    $("#startButton").on('click', quiz)
    $("#startButton").hide();

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
  }
    // When timer runs out, page automatically goes to next question unless out of questionsArray, then to End Page with stats
  // variables
  artTrivia = [
    {correct: 0},
    {incorrect: 0},
    {counter: 30},
    {counterOn: false},
    {counterId: ''},

    questionsArray = [
    {q1: "Who is the artist known for Cubism and having a 'blue period'?"},
    {q2: "Who is the American artist known for detailed flowers and as the 'Mother of American Modernism'?"},
    {q3: "Who is the French artist known for 'emphasized flattened forms and decorative pattern' of Pointillism in the Impressionist movement?"},
    {q4: "Who is the Russian artist known as a leader in avant-garde art and as one of the founders of pure abstraction?"},
    {q5: "Who is the French Impressionist artist known for painting the effects of light with broken color and rapid brushstrokes?"},
    {q6: "Who is the Mexican artist known for native styled self-portraits mixing realism with fantasy?"},
    {q7: "Who is the American pop artist known for mixing media, advertising, and celebrity culture?"},
    {q8: "Who is the Spanish Surrealist artist known for strikingly bizarre, and dream-like images?"},
    {q9: "Who is the Abstract Expressionist artist known for pouring or splashing paint on a canvas?"},
    {q10: "Who is the Post-Impressionist artist known for self-portraits and using bold colors and dramatic, impulsive, and expressive brushwork?"}
  ],
    optionsArray = [
    {q1: ["Pablo Picasso","Rufino Tamayo","Frida Kahlo","Vladimir Boronstikov"]},
    {q2: ["Jackson Pollock", "Georgia O'Keeffe", "Frida Kahlo", "Banksy"]},
    {q3: ["Henri Matisse", "Rodion Raskolnikov", "Gregor Samsa", "Claude Monet"]},
    {q4: ["Rodion Raskolnikov", "Wassily Kandinsky", "Salvadore Dali", "Gregor Samsa"]},
    {q5: ["Roger Fry", "Wassily Kandinsky", "Salvadore Dali", "Claude Monet"]},
    {q6: ["Rufino Tamayo", "Jose Clemente Orozco", "Frida Kahlo", "Diego Rivera"]},
    {q7: ["Keith Haring", "Roy Lichtenstein", "Andy Warhol", "David Hockney"]},
    {q8: ["Max Earnst", "Man Ray", "Joan Miro", "Salvador Dali"]},
    {q9: ["David Smith", "Jackson Pollock", "Wolfgang Paalen", "Martha Graham"]},
    {q10: ["Vincent Van Gogh", "Andy Warhol", "Rodion Raskolnikov", "Roy Lichtenstien"]}
  ],
  correctAnswerArray = [
    {q1: 0},
    {q2: 1},
    {q3: 0},
    {q4: 1},
    {q5: 3},
    {q6: 2},
    {q7: 2},
    {q8: 3},
    {q9: 1},
    {q10: 0}
  ],
  imagesArray = [
    {q1: "assets/images/Pablo-Picasso-Guernica.jpg"},
    {q2: "assets/images/Georgia-O’Keeffe-Black-Iris-III-1926.jpg"},
    {q3: "assets/images/Henri-Matisse-La-Danse-1910.jpg"},
    {q4: "assets/images/Kandinsky-Wassily-Composition-VII-1913.jpg"},
    {q5: "assets/images/Claude-Monet-Water-Lilies-Nympheas.1.jpg"},
    {q6: "assets/images/Frida-Kahlo-The-Two-Fridas-1939.jpg"},
    {q7: "assets/images/Andy-Warhol-Marilyn-Diptych.jpeg"},
    {q8: "assets/images/Salvador-Dali-The-Persistence-of-Memory-1931.jpg"},
    {q9: "assets/images/jackson-pollock-number-18-1950_u-l-enpvb0.jpg"},
    {q10: "assets/images/Vincent-Van-Gogh-The-Starry-Night-De-sterrennacht.jpg"}
  ]],
  


   // Show each question
  function quiz() {
    var output = [];
    questionsArray.forEach((currentQuestion, questionNumber) => {
      var optionsArray = [];
      for (letter in currentQuestion.optionsArray) {
  
      // Radio buttons
        optionsArray.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.optionsArray[letter]}
           </label>`
        );
      }
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="optionsArray"> ${optionsArray.join("")} </div>
         </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    var answerContainers = quizContainer.querySelectorAll("answers");
    var correct = 0;

    questionsArray.forEach((currentQuestion, questionNumber) => {
      var art = document.createElement("art");
        art.setAttribute(questionsArray.question.image);
        document.body.appendChild(art);
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if correct
      if (userAnswer === currentQuestion.correctAnswerArray) {
        correct++;
        document.getElementById('questions').innerHTML = ("Correct! The answer is " + questionsArray.correctAnswerArray);
      } else {
        document.getElementById('question').innerHTML = ("Incorrect! The answer is " + questionsArray.correctAnswerArray);
      }
  });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${correct} out of ${questionsArray.length}`;
    console.log(`${correct} out of ${questionsArray.length}`);
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  var quizContainer = document.getElementById("questions");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");

  // display quiz 
  quiz();

  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;
  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
});        
