document.getElementById('btn-analisar').addEventListener('click', function() {
    // Mostra a área de resultados
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('oculto');
    
    // Gera uma quantidade aleatória de veneno/contaminação (0 a 100)
    const quantidadeVeneno = Math.floor(Math.random() * 101);
    
    // Atualiza o texto e a barra de progresso gráfica
    document.getElementById('porcentagem').innerText = quantidadeVeneno + '%';
    document.getElementById('barra').style.width = quantidadeVeneno + '%';
    
    const imagem = document.getElementById('imagem-alerta');
    const mensagem = document.getElementById('status-mensagem');
    
    // Altera o comportamento da página baseado no nível de veneno encontrado
    if (quantidadeVeneno < 20) {
        mensagem.innerText = "Água segura para consumo.";
        mensagem.style.color = "#38a169";
        imagem.style.filter = "grayscale(0%)"; // Água limpa
    } else if (quantidadeVeneno >= 20 && quantidadeVeneno < 60) {
        mensagem.innerText = "Alerta: Níveis moderados de agrotóxicos detectados.";
        mensagem.style.color = "#dd6b20";
        imagem.style.filter = "sepia(50%)"; // Tom de alerta
    } else {
        mensagem.innerText = "PERIGO: Água altamente tóxica e imprópria!";
        mensagem.style.color = "#e53e3e";
        imagem.style.filter = "hue-rotate(90deg) saturate(200%)"; // Aparência química/tóxica
    }
});
