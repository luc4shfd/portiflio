document.getElementById("text-to-copy").addEventListener("click", function() {
    const text = this.innerText;
    navigator.clipboard.writeText(text).then(function() {
        alert("Copiado com sucesso!"); // Mostra o alerta quando o texto for copiado
    }).catch(function(err) {
        console.error('Erro ao copiar o texto: ', err);
    });
});