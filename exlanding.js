var icone = document.querySelectorAll('.icone');

icone.forEach(function(icone) {
    icone.addEventListener("click", function() {
    
        var aviso = document.querySelector(".aviso");
    
        aviso.style.display = 'block';

    });
});

var aviso = document.querySelector('.aviso');

aviso.addEventListener("click", function(){
    var aviso = document.querySelector('.aviso');
    
    aviso.style.display = 'none';
   
});

var menulateral = document.querySelector('#menulateral');

menulateral.addEventListener("click", function(event) {

    event.stopPropagation();

    var menu =document.querySelector('#menu');
    var fecharbotao = document.querySelector('#fecharbotao');
    var fechar = document.querySelector('#menulateral')

    menu.style.display = 'block'
    fecharbotao.style.display = 'block'
    fechar.style.display = 'none'
});

document.addEventListener("click", function() {

    setTimeout( function() {
        var menu =document.querySelector('#menu');
        var fecharbotao = document.querySelector('#fecharbotao');
        var fechar = document.querySelector('#menulateral')


        if (menu.style.display ==='block' && fechar.style.display === 'none') {
            menu.style.display = 'none'
            fecharbotao.style.display = 'none'
            fechar.style.display = 'block'
        }
    },0);
});

var fecharbotao = document.querySelector('#fecharbotao');

fecharbotao.addEventListener("click", function() {

    var menu =document.querySelector('#menu');
    var fecharbotao = document.querySelector('#fecharbotao');
    var fechar = document.querySelector('#menulateral')

    menu.style.display = 'none'
    fecharbotao.style.display = 'none'
    fechar.style.display = 'block'

});

var zap = document.querySelector('.iconezap');

zap.addEventListener("click", function() {

    var avisozap = document.querySelector('.avisozap');

    avisozap.style.display = 'block'
});

var avisozap = document.querySelector('.avisozap');

avisozap.addEventListener("click", function(){
    var aviso = document.querySelector('.avisozap');
    
    aviso.style.display = 'none';
   
});

var pedido = document.querySelector('.pedido');

// Adiciona o listener de evento para o clique no botão
pedido.addEventListener("click", function(event) {
    // Impede que o clique no botão propague para o documento
    var form = document.querySelector('.form-conteiner');

    event.stopPropagation();
    // Altera a cor de fundo e a cor do texto do botão
    this.style.backgroundColor = '#ffffff';
    this.style.color = 'green';
    form.style.display = 'block';
});

// Adiciona o listener de evento para o clique no documento
document.addEventListener("click", function() {
    // Adiciona um atraso para garantir que o clique no botão seja registrado primeiro
    setTimeout(function() {
        // Verifica se a cor de fundo do botão é branca (em formato RGB)
        if (pedido.style.backgroundColor === 'rgb(255, 255, 255)' && form.style.display === 'block' ) {
            // Reseta a cor de fundo do botão para uma nova cor
            pedido.style.backgroundColor = ''; // Cor original ou a cor desejada
            pedido.style.color = ''; // Opcional: resetar a cor do texto se necessário
        }
    }, 10);
});

var submit = document.querySelector('#enviar');

submit.addEventListener("click", function() {
   
    var pedido = document.querySelector('.pedido')

    pedido.style.backgroundColor = '';
    pedido.style.color = '';

});
