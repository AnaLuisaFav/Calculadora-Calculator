function calcular(tipo, botao) {
			
	var visor = document.getElementById('resultado')

	if(tipo === 'acao') {

		if(botao === 'c') {
			visor.value = ''
		}

		if(botao === '+' || botao === '-' || botao === '*' || botao === '/' || botao === '.') {
			visor.value += botao
		}

		if(botao === '=') {
			var valor_campo = eval(visor.value)
			visor.value = valor_campo
		}

	} else if (tipo === 'valor') {
		visor.value += botao
	}
}