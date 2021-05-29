const ref = {
    inputEl: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output')
};


ref.inputEl.addEventListener('input', OntextForm);

function OntextForm(event) {

    ref.nameEl.textContent = ref.inputEl.value.trim() === '' ? 'незнакомец' : ref.inputEl.value
}