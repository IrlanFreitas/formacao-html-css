// document.querySelector("#new0").style.display = "block";

const artigos = document.querySelectorAll(".listaDeArtigos-item")
artigos[0].style.display = "block";

const btns = document.querySelectorAll('.listaDeArtigos-slider-item');
const indicadoresNoticias = document.querySelectorAll('.listaDeArtigos-slider');


//* Indicador slide atual
const indicadorSlideAtual = document.createElement("span")
indicadorSlideAtual.id = "escondeVisualmente"
indicadorSlideAtual.classList.add("escondeVisualmente")
indicadorSlideAtual.textContent = "(Slide atual)"

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    

    document.querySelector(".listaDeArtigos-slider-item .escondeVisualmente").remove()

    showArticleById(parseInt(this.getAttribute("data-sliderItem")))
    

    // this.append(indicadorSlideAtual)

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})

const showArticleById = (id) => {

  for(let i = 0; i < artigos.length; i++) {
    if(i === id) {
      artigos[i].style.display = "block";
    } else {
      artigos[i].style.display = "none";
    }
  }

}