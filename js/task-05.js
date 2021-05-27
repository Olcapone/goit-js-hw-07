const ref = {
    inputEl: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output')
};


ref.inputEl.addEventListener('input', OntextForm);

function OntextForm(event) {
if(event.target.value.string.length>0) ref.nameEl.textContent = event.target.value;
}