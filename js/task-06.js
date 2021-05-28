const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', OnValidation);


console.log(parseInt(inputEl.dataset.length));



function OnValidation(event){


     if(event.target.value.length === parseInt(inputEl.dataset.length)) {
         inputEl.classList.add('valid'); 
         inputEl.classList.remove('invalid');
     }
            
     else {
         inputEl.classList.add('invalid');
         inputEl.classList.remove('valid');
    }

    
    }
 