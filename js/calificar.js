var currentQuestion = 0;
var puntuacion = 0;
var totQuestions = questions.length;

var container = document.getElementById('preContainer');
var questionEl = document.getElementById('preguntas');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var continuar = document.getElementById('continuar');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.opcion1;
	opt2.textContent = q.opcion2;
	opt3.textContent = q.opcion3;
	opt4.textContent = q.opcion4;
};

function siguiente () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('POR FAVOR CONTESTE LA PREGUNTA');
		return;
	}
	var respuesta = selectedOption.value;
	if(questions[currentQuestion].respuesta == respuesta){
		puntuacion += 1;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		continuar.textContent = 'siguiente';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Obtuviste: ' + puntuacion + ' de 8';	
	}
	loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
