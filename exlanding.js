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

menulateral.addEventListener("click", function() {

    var menu =document.querySelector('#menu');
    var fecharbotao = document.querySelector('#fecharbotao');
    var fechar = document.querySelector('#menulateral')

    menu.style.display = 'block'
    fecharbotao.style.display = 'block'
    fechar.style.display = 'none'
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
