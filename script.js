
var questions = [
  {
    ques: "What does HTML stand for?",
    answers: [
      "A. Hyper Trainer Marking Language",
      "B. Hyper Text Marketing Language",
      "C. Hyper Text Markup Language",
      "D. Hyper Text Markup Leveler",
    ],
    correctAns: 2
  },
  {
    ques: "<h1>Text</h1> is the correct way of making a header in HTML.",
    answers: [
      "A. True",
      "B. False",
    ],
    correctAns: 0
    // ansA: "A. True"
  },
  {
    ques: "Which of the following is the correct way of making a string in Java?",
    answers: [
      "A. String 'Text';",
      "B. String text = 'text';",
      "C. String text = 'text'",
      "D. String text = (text);"
    ],
    correctAns: 1
    // ansB: "B. String text = 'text';"
  },
  {
    ques: "In Java, a method is a container that holds classes.",
    answers: [
      "A. True",
      "B. False",
    ],
    correctAns: 1
    // ansB: "B. False"
  },
  {
    ques: "Is this the correct way to make an object in Java? Class class = new Class();",
    answers: [
      "A. True",
      "B. False",
    ],
    correctAns: 0
    // ansA: "A. True"
  }
];

var interval;
var count = 90;
var currentQuestionIndex = 0;

$(document).ready(function () {
  $("#start-quiz").on("click", function (e) {
    e.preventDefault();

    $('#start-screen').hide();

    displayQuestion();

    $('.ansSelections').show();
  });

  function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    
    $(".ansSelections").empty();

    // Create a h2 that holds the question text.  currentQuestion.que
    var mainQues = $("<h2>").text(currentQuestion.ques);
    $(".ansSelections").append(mainQues);

    // Loop though answer array   currentQuestion.answers is what we loop through.
    for (var i = 0; i < currentQuestion.answers.length; i++){
      var answerBtn = $("<button>").text(currentQuestion.answers[i]);

      answerBtn.addClass("btn btn-block btn-primary answer");
      answerBtn.attr('data-index', i);

      $(".ansSelections").append(answerBtn);
    }
  }

  $('.ansSelections').on('click', '.answer', function() {
    console.log($(this));

    var dataIndex = $(this).attr('data-index');
    var currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.correctAns !== parseInt(dataIndex)) {
      // Take away 10 seconds from the count.
      count -= 10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    }
    else {
      endQuiz();
    }
  })

  function endQuiz() {
    clearInterval(interval);

    currentQuestionIndex = 0;

    // Stop the time.
    // Show the score inside of the end quiz screen.

    $('#question-screen').hide();
    $('#end-quiz-screen').show();

    console.log('End of quiz');
  }

  function timerStart() {
    interval = setInterval(function () {
      if (count - 1 !== -1) {
        count--;
        $(".timer").html(count);
      } else {
        endQuiz();
      }
    }, 1000);
  };
});


/**
     $(".timeLeft").html("<h3>Seconds Left</h3>")
    $("#buttonInfo").html("Submit");
    $(".titleCard").html("<h1>Question 1</h1>");
    $(".ansSelections").css("display", "block");

    for (var i = 0; i < questions.length; i++) {

      var ranQues = Math.floor(Math.random() * questions.length);
      $(".question").html(questions[ranQues].ques);
      $("#a").html(questions[ranQues].ansA);
      $("#b").html(questions[ranQues].ansB);
      $("#c").html(questions[ranQues].ansC);
      $("#d").html(questions[ranQues].ansD);





      $("#buttonInfo").on("click", function (e) {
        e.preventDefault();
        $("option1").prop("checked", function (e) {
          if (question1.ansC === question1.correctAns) {
            alert("Correct");
            localStorage.setItem("correct");
          } else {
            alert("Wrong");
            localStorage.setItem("wrong");
          };
        });
      });



    };
    timerStart();
 */