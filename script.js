function revelarMensagem() {
    // 1. Encontra o elemento que contém todo o conteúdo da surpresa
    var conteudoSecreto = document.getElementById("conteudo-oculto");
    
    // 2. Encontra o botão
    var botao = document.getElementById("botao-revelar");

    // 3. Verifica se o conteúdo está atualmente oculto
    if (!conteudoSecreto.classList.contains("revelado")) {
        
        // Se estiver oculto, adiciona a classe 'revelado' (que o CSS mostra)
        conteudoSecreto.style.display = "block"; // Necessário para a transição funcionar
        
        // Pequeno atraso para garantir que o display: block foi aplicado antes de iniciar a opacidade
        setTimeout(function() {
            conteudoSecreto.classList.add("revelado");
        }, 10); 
        
        // Altera o texto do botão
        botao.textContent = "Ocultar Epístola";
        
    } else {
        // Se estiver visível, reverte (oculta)
        conteudoSecreto.classList.remove("revelado");
        
        // Pequeno atraso para a transição de opacidade funcionar antes de ocultar totalmente
        setTimeout(function() {
            conteudoSecreto.style.display = "none";
        }, 1500); // Oculta após 1.5s (duração da transição CSS)
        
        // Altera o texto do botão de volta
        botao.textContent = "Desvendar Epístola";
    }
}