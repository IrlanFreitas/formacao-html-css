const campoEmail = document.querySelector('#email');
const sugestaoEmail = document.querySelector('#sugestao-email');
const linkEmail = document.createElement("a")

sugestaoEmail.style.display = "none"

const domains = ['gmail.com', 'aol.com'];
const secondLevelDomains = ['hotmail']
const topLevelDomains = ["com", "net", "org"];

campoEmail.addEventListener('blur', function() {
  Mailcheck.run({
    email: campoEmail.value,
    domains,                       // optional
    topLevelDomains,       // optional
    secondLevelDomains, // optional
    suggested: function(suggestion) {

      sugestaoEmail.style.display = "inline-block"
      sugestaoEmail.textContent = "Você quis dizer "
      sugestaoEmail.parentNode.classList.add("contatoCampo--erro")
      campoEmail.classList.add("contatoCampo--validouErro")
      
      linkEmail.setAttribute("href", "#")
      linkEmail.textContent = suggestion.full
      linkEmail.onclick = (event) => {
        event.preventDefault()
        campoEmail.value = suggestion.full
        sugestaoEmail.style.display = "none"
        sugestaoEmail.parentNode.classList.remove("contatoCampo--erro")
        campoEmail.classList.remove("contatoCampo--validouErro")
        campoEmail.classList.add("contatoCampo--validouFoi")

        sugestaoEmail.setAttribute("tabindex", "0")
        sugestaoEmail.setAttribute("role", "alert")
      }
      sugestaoEmail.appendChild(linkEmail)
    },
  });
});