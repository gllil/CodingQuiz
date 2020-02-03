 $("document").ready(function(){
    var timer;
    // questions and answers array
    var questions = [
       {
         ques1: "What does HTML stand for?",
         ansA: "A. Hyper Trainer Marking Language",
         ansB: "B. Hyper Text Marketing Language",
         ansC: "C. Hyper Text Markup Language",
         ansD: "D. Hyper Text Markup Leveler"
         // ansC: "C. Hyper Text Markup Language"
       },
       {
         ques2: "<h1>Text</h1> is the correct way of making a header in HTML.",
         ansA: "A. True",
         ansB: "B. False",
         // ansA: "A. True"
       },
       {
         ques3: "Which of the following is the correct way of making a string in Java?",
         ansA: "A. String 'Text';",
         ansB: "B. String text = 'text';",
         ansC: "C. String text = 'text'",
         ansD: "D. String text = (text);"
         // ansB: "B. String text = 'text';"
       },
       {
         ques4: "In Java, a method is a container that holds classes.",
         ansA: "A. True",
         ansB: "B. False"
         // ansB: "B. False"
       },
       {
         ques5: "Is this the correct way to make an object in Java? Class class = new Class();",
         ansA: "A. True",
         ansB: "B. False"
         // ansA: "A. True"
       }

    ];

    $("#buttonInfo").on("click", function(){
        $(".buttonSection").css("display", "none")
    })


 })
