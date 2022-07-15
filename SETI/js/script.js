document.getElementById('copy-content').onclick = function() {
	navigator.clipboard.writeText(document.getElementById('copy-resposta').innerText).then(function(){
		console.log('text copied')

	})
}
