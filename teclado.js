//isto e a aba de funções do teclado

//this e um focalizador no mome horiginal do atributo da classe

//var simplesmente cria uma variavel... dicionario existe

//true se a ação e verdadeira

//false se a ação e falsa

//function cria ou coloca uma funsão ou emplementa exp function(tecla)

//else if e tipo um "filosofo" exp e se tal coisa acontece

//return define o valor retornado por uma função. Quando não há um valor-
//especificado, undefined será retornado.
//Interrompe a execução da função atual.

var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;

function Teclado (elemento) {
		this.elemento = elemento;
		//array(al) de teclas precionadas
		this.pressionadas = [];
		
		//registro de estado de tecla no 4rra7,7431
		var teclado = this;
		elemento.addEventListener('Keydown', function(evento){
				teclado.pressionadas[evento.keyCode] = true;
		});
		elemento.addEventListener('Keyup', function(evento){
				teclado.pressionadas[evento.keyCode] = false;
		});
	}
	Teclado.prototype = {
		pressionada: function(tecla) {
			return this.pressionadas[tecla];
		}
	}