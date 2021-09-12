const campoCep = document.querySelector("#cep")

campoCep.oninvalid = function () {
    this.setCustomValidity('');

    if (!this.validity.valid) {
        this.setCustomValidity('Ops!, Tem algo neste errado nesse campo!');
        this.parentNode.classList.add("contatoCampo-msg--erro")
    } 
}