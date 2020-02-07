
$(document).ready(function () {
  // questions and answers array
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
      ansA: "A. True",
      ansB: "B. False",
      correctAns: "A. True"
      // ansA: "A. True"
    },
    {
      ques: "Which of the following is the correct way of making a string in Java?",
      ansA: "A. String 'Text';",
      ansB: "B. String text = 'text';",
      ansC: "C. String text = 'text'",
      ansD: "D. String text = (text);",
      correctAns: "B. String text = 'text';"
      // ansB: "B. String text = 'text';"
    },
    {
      ques: "In Java, a method is a container that holds classes.",
      ansA: "A. True",
      ansB: "B. False",
      correctAns: "B. False"
      // ansB: "B. False"
    },
    {
      ques: "Is this the correct way to make an object in Java? Class class = new Class();",
      ansA: "A. True",
      ansB: "B. False",
      correctAns: "A. True"
      // ansA: "A. True"
    }
  ];

  var interval;
  var count = 90;

  $("#buttonInfo").on("click", function (e) {
    e.preventDefault();

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
  });

  function timerStart() {

    interval = setInterval(function () {
      if (count - 1 !== -1) {
        count--;
        $(".timer").html(count);
      } else {
        clearInterval(interval);
      };
    }, 1000);
  };


});
