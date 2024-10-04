document.getElementById('adicionar-dica').addEventListener('click', function() {
    const dica = prompt("Digite uma nova dica de sustentabilidade:");
    if (dica) {
        const li = document.createElement('li');
        li.textContent = dica;
        document.getElementById('dicas-lista').appendChild(li);
    }
});
