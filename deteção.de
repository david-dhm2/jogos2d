<html>

<head>
	<title>detectação</title>
</head>

<body>
	<canvas id ="teclado.js" width="500" height="500"></canvas>

	<script>
		var canvas = document.getElementById('canvas_teclado_2');
		var context = canvas.getContext('2d');
			src="teclado.js"
			var posicao = 0;
			desenharPersonagem();
		
				function animar() {
			if (teclado.pressionada(SETA_ESQUERDA))
			posicao -= 10;
			else if (teclado.pressionada(SETA_DIREITA))
			posicao += 10;
			desenharPersonagem();
			requestAnimationFrame(animar);
			
				// persongem ;)
			function desenharPersonagem() {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillRect(posicao, 100, 20, 50);
			
				var SETA_ESQUERDA = 37;
				var SETA_DIREITA = 39;
				
				function Teclado(elemento) {
					this.elemento = elemento;
					
					// Array de teclas pressionadas
					this.pressionadas = [];

					// Registro
					var teclado = this;
					elemento.addEventListener('keydown', function(evento) {
						teclado.pressionadas[evento.keyCode] = true;
					});
					elemento.addEventListener('keyup', function(evento) {
						teclado.pressionadas[evento.keyCode] = false;
					});
}
Teclado.prototype = {
	pressionada: function(tecla) {
		return this.pressionadas[tecla];
}
}
}

}
		
	</script>
	</body>

</html>