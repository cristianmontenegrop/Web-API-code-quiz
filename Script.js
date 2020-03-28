


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







function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}