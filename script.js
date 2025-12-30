// Seleciona todas as colunas da página
document.querySelectorAll('.coluna').forEach(coluna => {
    
    // Elementos dentro de cada coluna específica
    const janela = coluna.querySelector('.janela-carrossel');
    const btnUp = coluna.querySelector('.up');
    const btnDown = coluna.querySelector('.down');
    
    // CÁLCULO DO MOVIMENTO:
    // Altura do Card (200px) + Gap do CSS (15px) = 215px
    const step = 215; 

    // Função para mover o scroll
    function moverScroll(direcao) {
        if (!janela) return; // Segurança caso a coluna esteja vazia

        if (direcao === 'down') {
            janela.scrollTop += step;
        } else {
            janela.scrollTop -= step;
        }
    }

    // Adiciona evento de clique nas setas (se elas existirem na coluna)
    if(btnUp) {
        btnUp.addEventListener('click', () => moverScroll('up'));
    }
    
    if(btnDown) {
        btnDown.addEventListener('click', () => moverScroll('down'));
    }

    // Adiciona controle pelo Scroll do Mouse (Rodinha)
    if(janela) {
        janela.addEventListener('wheel', (evento) => {
            // Impede que a página principal role quando o mouse está sobre a coluna
            evento.preventDefault(); 
            
            if (evento.deltaY > 0) {
                moverScroll('down');
            } else {
                moverScroll('up');
            }
        });
    }
});

// Função Global de Pedido
function pedido(nomeProduto) {
    // === ATENÇÃO: COLOQUE SEU NÚMERO AQUI (DDD + NÚMERO) ===
    const telefone = "5521999999999"; 
    
    const mensagem = `Olá! Gostaria de reservar o produto: *${nomeProduto}* (R$ 22,00). Como faço para retirar?`;
    
    // Cria o link do WhatsApp
    const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre em nova aba
    window.open(link, '_blank');
}