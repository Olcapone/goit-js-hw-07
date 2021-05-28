const ref = {
    inputEl: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output')
};


ref.inputEl.addEventListener('input', OntextForm);

function OntextForm(event) {
if(ref.inputEl.value === '') ref.nameEl.textContent = 'незнакомец';
 
else ref.nameEl.textContent = ref.inputEl.value;
}