


var myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: 'Strings',
            b: 'Booleans',
            c: 'Alerts',
            d: 'Numbers'
        },
        correctAnswer: 'c'
    },

    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: {
            a: 'Quotes',
            b: 'Curly Brackets',
            c: 'Parenthesis',
            d: 'Square brackets'
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
console.log(myQuestions[0].question)
console.log(myQuestions[0].answers.a);

var body = document.body;
// var startButt = null;


// A main function that handles all the content and running of secondary functions for each page

function buildQuiz() {

    var viewHigh = document.createElement("h4")
    body.appendChild(viewHigh);
    viewHigh.textContent = "View Highscores"
    viewHigh.setAttribute("style", "margin: 0.5rem; float: left;")

    var viewTime = document.createElement("h4")
    body.appendChild(viewTime);
    viewTime.textContent = "0"
    viewTime.setAttribute("style", "margin: 0.5rem; float: right;")

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

    
    startButt.addEventListener("click", function quizFn1() {

        // Hide!
        startButt.setAttribute("style", "display: none");
        h1El.setAttribute("style", "display: none");
        h2El.setAttribute("style", "display: none");

        // h3 
        var h3El = document.createElement("h3");
        h3El.textContent = myQuestions[0].question;
        body.appendChild(h3El);
        h3El.setAttribute("style", "margin:auto; padding-top: 6rem; padding: 2.5rem; width:60%; text-align:center;");


        // q1.1Button 
        var q11Butt = document.createElement("input");
        body.appendChild(q11Butt);
        
        q11Butt.setAttribute("style", "margin:auto; margin-bottom:10px; width:8%; display:block;");
        q11Butt.setAttribute("class", "btn btn-primary");
        q11Butt.setAttribute("value", myQuestions[0].answers.a);
        q11Butt.setAttribute("type", "button");
        q11Butt.setAttribute("onclick", "quizFunction()");
       

        // q1.2Button 
        var q12Butt = document.createElement("input");
        body.appendChild(q12Butt);
        q12Butt.setAttribute("style", "margin:auto; margin-bottom:10px; width:8%; display:block;");
        q12Butt.setAttribute("class", "btn btn-primary");
        q12Butt.setAttribute("value", myQuestions[0].answers.b);
        q12Butt.setAttribute("type", "button");
      

        // q1.3Button 
        var q13Butt = document.createElement("input");
        body.appendChild(q13Butt);
        q13Butt.setAttribute("style", "margin:auto; margin-bottom:10px; width:8%; display:block;");
        q13Butt.setAttribute("class", "btn btn-primary");
        q13Butt.setAttribute("value", myQuestions[0].answers.c);
        q13Butt.setAttribute("type", "button");
       

        // q1.4Button 
        var q14Butt = document.createElement("input");
        body.appendChild(q14Butt);
        q14Butt.setAttribute("style", "margin:auto; margin-bottom:10px; width:8%; display:block;");
        q14Butt.setAttribute("class", "btn btn-primary");
        q14Butt.setAttribute("value", myQuestions[0].answers.d);
        q14Butt.setAttribute("type", "button");
      
    });


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