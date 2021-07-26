var myQuestions = [
	{
	  question: " 1.-Cual es la primera letra del abecedario?",
	  answers:  {
      a: "Para crear una función y ejecutarla al mismo tiempo."
      b: "para nada"
      c: "para mostrar algo en pantalla"
    },
	  correctAnswer: 'a'
	},
	{
	  question: "2.-Cuanto es 5 + 5?",
	  answers: {
		a: '9',
		b: '7',
		c: '10'
	  },
	  correctAnswer: 'c'
	},
	{
		question: "3.-Que dia es hoy?",
		answers: {
			a: 'martes',
			b: 'lunes',
			c: 'viernes'
		},
		correctAnswer: 'a'
	},
	{
		question: "4.-Que es mas caro?",
		answers: {
			a: 'dolar',
			b: 'peso',
			c: 'euro'
	},
	correctAnswer: 'c'
},
{
    question: "5.-Cual es la ultima letra del abecedario?",
    answers: {
        a: 'z',
        b: 'y',
        c: 'h'
},
correctAnswer: 'a'
},
{
    question: "6.-Que animal camina en dos patas?",
    answers: {
        a: 'perro',
        b: 'chiva',
        c: 'gallina'
},
correctAnswer: 'c'
},
{
    question: "7.-Que son A, E, I, O, U?",
    answers: {
        a: 'vocales',
        b: 'consonantes',
        c: 'asonantes'
},
correctAnswer: 'a'
},
{
    question: "8.-Cuantas letras tiene el abecedario?",
    answers: {
        a: '15',
        b: '25',
        c: '27'
},
correctAnswer: 'c'
},
{
    question: "9.-Cuantas estaciones hay en el año?",
    answers: {
        a: '7',
        b: '4',
        c: '5'
},
correctAnswer: 'b'
},
{
    question: "10.-Cuantos dias tiene el año?",
    answers: {
        a: '365',
        b: '300',
        c: '280'
},
correctAnswer: 'a'
}
  ] ;
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
	function showQuestions(questions, quizContainer){
	  // we'll need a place to store the output and the answer choices
	  var output = [];
	  var answers;
  
	  // for each question...
	  for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];
  
		// for each available answer...
		for(letter in questions[i].answers){
  
		  // ...add an html radio button
		  answers.push(
			'<label>'
			  + '<input type="radio" name="question'+i+'" value="'+letter+'">'
			  + letter + ': '
			  + questions[i].answers[letter]
			+ '</label>'
		  );
		}
  
		// add this question and its answers to the output
		output.push(
		  '<div class="question">' + questions[i].question + '</div>'
		  + '<div class="answers">' + answers.join('') + '</div>'
		);
	  }
  
	  // finally combine our output list into one string of html and put it on the page
	  quizContainer.innerHTML = output.join('');
	}
  
  
	function showResults(questions, quizContainer, resultsContainer){
	  
	  // gather answer containers from our quiz
	  var answerContainers = quizContainer.querySelectorAll('.answers');
	  
	  // keep track of user's answers
	  var userAnswer = '';
	  var numCorrect = 0;
	  
	  // for each question...
	  for(var i=0; i<questions.length; i++){
  
		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
		  // add to the number of correct answers
		  numCorrect++;
		  
		  // color the answers green
		  answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
		  // color the answers red
		  answerContainers[i].style.color = 'red';
		}
	  }
  
	  // show number of correct answers out of total
	  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}
  
	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
	  showResults(questions, quizContainer, resultsContainer);
	}
  
  }