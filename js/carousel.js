var btns = documento.querySelectorAll('.listaDeArtigos-slider-item');

//Percorer todos os botoes controladores
btns.forEach(function(btn) {
    btn.addEventListener('click', function() {

        
        //Remover class 'ativo' dos outros botoes
     btns.forEach(function(btnRemoveClass) {
        btnRemoveClass.classList.remove('listaDeartigos-slider-item-ativo')
     })

     this.classList.add('listaDeArtigos-slider-item--ativo')
    })
})