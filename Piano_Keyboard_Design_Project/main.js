

// Função para o som ---------------------------------------------------------------------------------------
function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {
      elemento.play();
  }
  else {
    console.log('Elemento não encontrado ou seletor inválido');
  }
}

const listaDeTeclas =  document.querySelectorAll('.tecla');

// usamos o let para atribuir a uma variável que sempre vai receber um valor novo
let contador = 0;

// enquanto - condição
while (contador < listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  // console.log(tecla);
  // console.log(instrumento);

  // template string
  const idAudio = `#som_${instrumento}`;
  // console.log(idAudio)


  tecla.onclick = function () {
    tocaSom(idAudio)
  }
  contador = contador + 1;
  // console.log(contador);
}



for (let contador = 0; contador < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;  // template string

  tecla.onclick = function () {
    tocaSom(idAudio)
  }

  tecla.onkeydown = function (evento) {

    console.log(evento.code)

    if (evento.code === 'Space' || evento.code === 'Enter') { // nome da tecla 'space' ou 'enter')
      tecla.classList.add('ativa'); // como estamos trabalhando com classe, não precisamos colocar o ponto antes ('.ativa')
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }

}


/*
Ao invés de criarmos para cada botão uma função igual a de cima e atribuir onclick para a função, usaremos
listas de elementos
 */


