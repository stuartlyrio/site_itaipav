// Seleciona todas as colunas
document.querySelectorAll('.coluna').forEach(coluna => {
    
    const janela = coluna.querySelector('.janela-carrossel');
    const btnUp = coluna.querySelector('.up');
    const btnDown = coluna.querySelector('.down');
    
    // Altura do Card (200) + Gap (15) = 215 pixels por movimento
    const step = 215; 

    // Função que move o scroll
    function moverScroll(direcao) {
        if (direcao === 'down') {
            janela.scrollTop += step;
        } else {
            janela.scrollTop -= step;
        }
    }

    // Clique nas Setas
    if(btnUp) btnUp.addEventListener('click', () => moverScroll('up'));
    if(btnDown) btnDown.addEventListener('click', () => moverScroll('down'));

    // Rolar com o Mouse (Wheel)
    if(janela) {
        janela.addEventListener('wheel', (evento) => {
            evento.preventDefault(); // Impede a página de descer junto
            
            if (evento.deltaY > 0) {
                moverScroll('down');
            } else {
                moverScroll('up');
            }
        });
    }
});

// Função de Enviar Pedido
function pedido(nomeProduto) {
    const telefone = "5521999999999"; // SEU NÚMERO AQUI
    const mensagem = `Olá! Quero reservar: ${nomeProduto} (R$ 22,00).`;
    
    const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
}