const ref = {
    inputEl: document.querySelector('#validation-input'),
    
};



 ref.inputEl.addEventListener('blur', OnValidation);


function OnValidation(event){


     if(event.target.value.length === 6){

        ref.inputEl.classList.add('valid');

         ref.inputEl.textContent = event.target.value; 
            
     }
    
     else {ref.inputEl.classList.add('invalid');
    
    }
    }
 