let botaoSobre = document.querySelector('.botaoSobre')
let sobre = document.querySelector('.sobre')
let botaoRedes = document.querySelector('.botaoRedes')
let redes = document.querySelector('.redes')

botaoSobre.addEventListener('click', () => {
    if(sobre.classList.contains('hide') && redes.classList.contains('hide')){
        sobre.classList.remove('hide')
    }else if(sobre.classList.contains('hide') && !redes.classList.contains('hide')){
        redes.classList.add('hide')
        sobre.classList.remove('hide')
    }else {
        sobre.classList.add('hide')
    }
})

botaoRedes.addEventListener('click', () => {
    if(redes.classList.contains('hide') && sobre.classList.contains('hide')){
        redes.classList.remove('hide')
    }else if(redes.classList.contains('hide') && !sobre.classList.contains('hide')){
        sobre.classList.add('hide')
        redes.classList.remove('hide')
    } else {
        redes.classList.add('hide')
    }
})