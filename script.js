
    $(document).ready(function(){
    var interval;
    var count = 90;
    // questions and answers array
    var questions = [
       {
         ques: "What does HTML stand for?",
         ansA: "A. Hyper Trainer Marking Language",
         ansB: "B. Hyper Text Marketing Language",
         ansC: "C. Hyper Text Markup Language",
         ansD: "D. Hyper Text Markup Leveler",
         correctAns: "C. Hyper Text Markup Language"
         // ansC: "C. Hyper Text Markup Language"
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

    ]; console.log(questions)
    $(".ansSelections").css("display", "none");
    $("#buttonInfo").on("click", function(e){
      e.preventDefault();
      for(var i = 0; i < questions.length; i++){
        $(".timeLeft").html("<h3>Seconds Left</h3>")
        $("#buttonInfo").html("Submit");
        $(".titleCard").html("<h1>Question 1</h1>");
        $(".ansSelections").css("display", "block");
        var question1 = questions[0];
        $(".question").html(question1.ques);
        $("#a").html(question1.ansA);
        $("#b").html(question1.ansB);
        $("#c").html(question1.ansC);
        $("#d").html(question1.ansD);



          $("#buttonInfo").on("click", function(e){
            e.preventDefault();          
          $("#radios").prop("checked", true);
          if(question1.ansC === question1.correctAns){
            alert("Correct");
            localStorage.setItem("correct");
          }else{
            alert("Wrong");
            localStorage.setItem("wrong");
          };
         
        });
      


      };
      timerStart();
    });

    function timerStart(){

      interval = setInterval(function(){
        if(count - 1 !== -1){
          count--;
          $(".timer").html(count);
        } else{
          clearInterval(interval);
        };
      }, 1000);
    };


  });
