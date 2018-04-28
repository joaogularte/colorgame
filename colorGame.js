var numSquares = 9;

var colors = gerarCores(numSquares); 

var squares = document.querySelectorAll('.square');
var corCorreta = corSelecionada();
var displayCor = document.querySelector('#displayCor');
var msg = document.querySelector('#msg');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var facil = document.querySelector('#facil');
var medio = document.querySelector('#medio');
var dificil = document.querySelector('#dificil');


displayCor.textContent = corCorreta;

for(var i = 0; i < squares.length; i++){
	
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener('click', function(){
		
		displayCor.textContent = this.style.backgroundColor;

		if(this.style.backgroundColor === corCorreta){
			msg.textContent = 'CONGRATS YOU WON!';
			mudarCores(corCorreta);
			h1.style.backgroundColor = corCorreta;
			reset.textContent = "Play Again";
		} else {
			this.style.backgroundColor = '#232323';
			msg.textContent = "Try Again";
		}
	});
}

reset.addEventListener('click', function(){

	makeSquares(numSquares);

});

facil.addEventListener('click', function(){
	
	facil.classList.add('select');
	medio.classList.remove('select');
	dificil.classList.remove('select');

	numSquares = 3;

	makeSquares(numSquares);

});

medio.addEventListener('click', function(){
	
	medio.classList.add('select');
	facil.classList.remove('select');
	dificil.classList.remove('select');

	numSquares = 6;

	makeSquares(numSquares);

});

dificil.addEventListener('click', function(){	

	dificil.classList.add('select');
	facil.classList.remove('select');
	medio.classList.remove('select');

	numSquares = 9;
	
	makeSquares(numSquares);
})

function makeSquares(n){

	colors = gerarCores(n);
	corCorreta = corSelecionada();
	displayCor.textContent = corCorreta;
	msg.textContent = "";
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New colors";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}

}

function mudarCores(color){

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}

}

function corSelecionada(){

	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function gerarCores(num){

	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(coresAleatoria());
	}
	return arr;

}

function coresAleatoria(){
	
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return 'rgb('+red+', '+green+', '+blue+')';

}
