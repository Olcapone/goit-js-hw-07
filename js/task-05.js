const ref = {
    inputEl: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output')
};


ref.inputEl.addEventListener('blur', OntextForm);

function OntextForm(event) {
if(event.target.value.length>0) ref.nameEl.textContent = event.target.value;
}