const refs = {
    inputEl: document.querySelector('input'),
    controlsEl: document.querySelector('#controls'),
    boxesEl: document.querySelector('#boxes')

};

refs.controlsEl.addEventListener('click', OnClick);
refs.inputEl.addEventListener('input', OnClick);
   
function createBoxes(amount){


    console.log(parseInt(amount));
   
   
};
   function  OnClick(event){

        const actionClick =event.target.dataset.action;
                if(actionClick !== 'render' && actionClick !== 'destroy') return; 
        else if (actionClick === 'render') {
   
        createBoxes();
            }
    }
