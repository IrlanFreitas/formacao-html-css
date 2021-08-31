// Variáveis
const btnAbreDialog = document.querySelector('#abreDialog');
const dialog = document.querySelector('.dialogNewsletter');
const dialogBody = document.querySelector('.dialogNewsletter-body');
const dialogOverlay = document.querySelector('.dialogNewsletter-overlay');
const conteudoForaDialog = document.querySelector("#conteudoForaDialog")
const video = document.querySelector('video')

btnAbreDialog.style.display = "block";

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', () => {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector(".dialogNewsletter-campo").focus();
  conteudoForaDialog.inert = true

  video.removeAttribute('controls');
});

const fecharDialog = () => {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
  conteudoForaDialog.inert = false
  btnAbreDialog.focus();

  video.setAttribute('controls', true);
}


// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fecharDialog);
dialogOverlay.addEventListener('click', fecharDialog);

document.addEventListener('keyup', (event) => {
  if (event.code == "Escape") {
    fecharDialog();
  }
})