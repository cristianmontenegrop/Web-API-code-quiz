


var myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: Strings = "Strings",
            b: Booleans = "Booleans",
            c: Alerts = "Alerts",
            d: Numbers = "Numbers"
        },
        correctAnswer: 'c'
    },

    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: {
            a: Quotes = "Quotes",
            b: CurlyBrackets = "Curly Brackets",
            c: Parenthesis = "Parenthesis",
            d: Squarebrackets = "Square Brackets"
        },
        correctAnswer: 'c'
    },

    {
        question: "Arrays in Javascript can be used to store _____. ",
        answers: {
            a: 'Numbers and strings',
            b: 'Other arrays',
            c: 'Booleans',
            d: 'All of the above'
        },
        correctAnswer: 'd'
    },

    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            a: 'Commas',
            b: 'Curly brackets',
            c: 'Quotes',
            d: 'Parenthesis'
        },
        correctAnswer: 'c'
    }

];
console.log(myQuestions[0].answers.Strings)
console.log(myQuestions[0].answers.a);

var body = document.getElementById("div");
var buttonInput = document.getElementsByClassName("qButton");
var h13El = "";

var q11Butt = document.createElement("input");
var q12Butt = document.createElement("input");
var q13Butt = document.createElement("input");
var q14Butt = document.createElement("input");



// A main function that handles all the content and running of secondary functions for each page

function buildQuiz() {



    var viewHigh = document.createElement("h4")
    body.appendChild(viewHigh);
    viewHigh.textContent = "View Highscores"
    viewHigh.setAttribute("style", "margin: 0.5rem; float: left;")

    var viewTime = document.createElement("h4")
    body.appendChild(viewTime);
    viewTime.textContent = 70;
    viewTime.setAttribute("style", "margin: 0.5rem; float: right;")
    viewTime.setAttribute("id", "timerDigit")

    var startButt = document.createElement("input");
    var h1El = document.createElement("h1");
    var h2El = document.createElement("h2");



    function mainPage() {



        h1El.textContent = "Coding Quiz Challenge";
        h2El.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that wrong answers will penalize your score/time by ten seconds!";
        

        body.appendChild(h1El);
        body.appendChild(h2El);
        body.appendChild(startButt);

        h1El.setAttribute("style", "margin:auto; padding: 0.5rem; width:50%; text-align:center;");
        h2El.setAttribute("style", "margin:auto; padding: 2.5rem; width:60%; text-align:center;");
        startButt.setAttribute("style", "margin:auto; width:8%; display:block;");
        startButt.setAttribute("class", "btn btn-primary");
        startButt.setAttribute("value", "Start Quiz");
        startButt.setAttribute("type", "button");
        // startButt.setAttribute("onclick", quizFn1());


    }

    function removeHandlerFn() {
        
        (q12Butt).removeEventListener("click", q2EvLi);
        (q13Butt).removeEventListener("click", q3EvLi);
        (q14Butt).removeEventListener("click", q4EvLi);
    }



    // Quiz Function 1
    startButt.addEventListener("click", quizFn1);


    function quizFn1() {


        var butt1 = document.getElementById("butt11");
        var butt2 = document.getElementById("butt12");
        var butt3 = document.getElementById("butt13");
        var butt4 = document.getElementById("butt14");

        // Sart Timer!!
        var timer = setInterval(timerFn, 1000);
        var t = 70;
        function timerFn() {

            if (t == 0) {
                clearInterval(timer);
                // And go to Quiz end
                // Time out Meesage on Quiz End
            }
            else {
                t--;
            }

            document.getElementById("timerDigit").textContent = t;

            function stopTimerFn() {
                clearInterval(timer);
            }
        };


        // Hide!
        startButt.setAttribute("style", "display: none");
        h1El.setAttribute("style", "display: none");
        h2El.setAttribute("style", "display: none");

        // h3 
        var h13El = document.createElement("h3");
        h13El.textContent = myQuestions[0].question;
        body.appendChild(h13El);
        h13El.setAttribute("style", "margin:auto; padding-top: 6rem; padding: 2.5rem; width:60%; text-align:center;");


        // q1.1Button 
        var q11Butt = document.createElement("input");
        body.appendChild(q11Butt);

        q11Butt.setAttribute("style", "margin:auto; margin-bottom:10px; width:8%; display:block;");
        q11Butt.setAttribute("id", "butt11");
        q11Butt.setAttribute("class", "btn qButton btn-primary");
        q11Butt.setAttribute("value", myQuestions[0].answers.a);
        q11Butt.setAttribute("type", "button");


        // q1.2Button 
        var q12Butt = document.createElement("input");
        body.appendChild(q12Butt);
        q12Butt.setAttribute("style", "margin:auto; margin-bottom:10px; width:8%; display:block;");
        q12Butt.setAttribute("id", "butt12");
        q12Butt.setAttribute("class", "btn qButton btn-primary");
        q12Butt.setAttribute("value", myQuestions[0].answers.b);
        q12Butt.setAttribute("type", "button");


        // q1.3Button 
        var q13Butt = document.createElement("input");
        body.appendChild(q13Butt);

        q13Butt.setAttribute("style", "margin:auto; margin-bottom:10px; width:8%; display:block;");
        q13Butt.setAttribute("id", "butt13");
        q13Butt.setAttribute("class", "btn qButton btn-primary");
        q13Butt.setAttribute("value", myQuestions[0].answers.c);
        q13Butt.setAttribute("type", "button");


        // q1.4Button 
        var q14Butt = document.createElement("input");
        body.appendChild(q14Butt);

        q14Butt.setAttribute("style", "margin:auto; margin-bottom:10px; width:8%; display:block;");
        q14Butt.setAttribute("id", "butt14");
        q14Butt.setAttribute("class", "btn qButton btn-primary");
        q14Butt.setAttribute("value", myQuestions[0].answers.d);
        q14Butt.setAttribute("type", "button");


        (q11Butt).addEventListener("click", function q1EvLi() {

            console.log("POOOO 1 1");
            myQuestions[0].answers.a = true;
            console.log(myQuestions[0].answers.a);
            quizFn2();
             // removeHandlerFn();
            (q11Butt).removeEventListener("click", q1EvLi);
           
        });

        (q12Butt).addEventListener("click", function q2EvLi() {

            console.log("POOOO 1 2")
            myQuestions[0].answers.b = true;
            console.log(myQuestions[0].answers.b);
            quizFn2();
            // removeHandlerFn();
            (q12Butt).removeEventListener("click", q2EvLi);
        });

        (q13Butt).addEventListener("click", function q3EvLi() {

            console.log("POOOO 1 3");
            myQuestions[0].answers.c = true;
            console.log(myQuestions[0].answers.c);
            quizFn2();
            // removeHandlerFn();
            (q13Butt).removeEventListener("click", q3EvLi);
        });

        (q14Butt).addEventListener("click", function q4EvLi() {

            console.log("POOOO 1 4")
            myQuestions[0].answers.d = true;
            console.log(myQuestions[0].answers.d);
            quizFn2();
            // removeHandlerFn();
            (q14Butt).removeEventListener("click", q4EvLi);
        });

 

    };


    // Quiz Function 2
    function quizFn2() {


        h13El.textContent = myQuestions[1].question;
        q11Butt.setAttribute("value", myQuestions[1].answers.a);
        q12Butt.setAttribute("value", myQuestions[1].answers.b);
        q13Butt.setAttribute("value", myQuestions[1].answers.c);
        q14Butt.setAttribute("value", myQuestions[1].answers.d);


        (q11Butt).addEventListener("click", function () {

            console.log("POOOO 2 1");
            quizFn3()
            removeHandlerFn();
        });
        (q12Butt).addEventListener("click", function () {

            console.log("POOOO 2 2")
            quizFn3()
            removeHandlerFn();
        });
        (q13Butt).addEventListener("click", function () {

            console.log("POOOO 2 3")
            quizFn3()
            removeHandlerFn();
        });
        (q14Butt).addEventListener("click", function () {

            console.log("POOOO 2 4")
            quizFn3()
            removeHandlerFn();
        });
    };

    // Quiz Function 3
    function quizFn3() {


        h13El.textContent = myQuestions[1].question;
        q11Butt.setAttribute("value", myQuestions[2].answers.a);
        q12Butt.setAttribute("value", myQuestions[2].answers.b);
        q13Butt.setAttribute("value", myQuestions[2].answers.c);
        q14Butt.setAttribute("value", myQuestions[2].answers.d);


        (q11Butt).addEventListener("click", function () {

            console.log("POOOO 3 1");
            quizFn4()
            removeHandlerFn();
        });
        (q12Butt).addEventListener("click", function () {

            console.log("POOOO 3 2")
            quizFn4()
            removeHandlerFn();
        });
        (q13Butt).addEventListener("click", function () {

            console.log("POOOO 3 3")
            quizFn4()
            removeHandlerFn();
        });
        (q14Butt).addEventListener("click", function () {

            console.log("POOOO 3 4")
            quizFn4()
            removeHandlerFn();
        });
    };

    // Quiz Function 4
    function quizFn4() {


        h13El.textContent = myQuestions[1].question;
        q11Butt.setAttribute("value", myQuestions[3].answers.a);
        q12Butt.setAttribute("value", myQuestions[3].answers.b);
        q13Butt.setAttribute("value", myQuestions[3].answers.c);
        q14Butt.setAttribute("value", myQuestions[3].answers.d);


        (q11Butt).addEventListener("click", function () {

            console.log("POOOO 4 1");
        });
        (q12Butt).addEventListener("click", function () {

            console.log("POOOO 4 2")
        });
        (q13Butt).addEventListener("click", function () {

            console.log("POOOO 4 3")
        });
        (q14Butt).addEventListener("click", function () {

            console.log("POOOO 4 4")
        });
    };








    // q11Butt.addEventListener("click", )

    // // show the questions
    // showQuestions(questions, quizContainer);

    // // when user clicks submit, show results
    // submitButton.onclick = function(){
    // 	showResults(questions, quizContainer, resultsContainer);
    // }
    // quizFn1();
    mainPage();
}

buildQuiz();














// function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {




//     function showQuestions(questions, quizContainer) {
//         // we'll need a place to store the output and the answer choices
//         var output = [];
//         var answers;

//         // for each question...
//         for (var i = 0; i < questions.length; i++) {

//             // first reset the list of answers
//             answers = [];

//             // for each available answer to this question...
//             for (letter in questions[i].answers) {

//                 // ...add an html radio button
//                 answers.push(
//                     '<label>'
//                     + '<input type="radio" name="question' + i + '" value="' + letter + '">'
//                     + letter + ': '
//                     + questions[i].answers[letter]
//                     + '</label>'
//                 );
//             }

//             // add this question and its answers to the output
//             output.push(
//                 '<div class="question">' + questions[i].question + '</div>'
//                 + '<div class="answers">' + answers.join('') + '</div>'
//             );
//         }

//         // finally combine our output list into one string of html and put it on the page
//         quizContainer.innerHTML = output.join('');
//     }


// }

// showQuestions(questions, quizContainer);