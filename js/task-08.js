const refs = {
    inputEl: document.querySelector('input'),
    controlsEl: document.querySelector('#controls'),
    boxesEl: document.querySelector('#boxes')

};

refs.controlsEl.addEventListener('click', OnClick);
refs.inputEl.addEventListener('input', OnClick);
   
function createBoxes(amount){

    amount = parseInt(refs.inputEl.value);

    console.log(amount);
   
    const divCollection = [];
    const MAX_AMAUNT = 100;
    const MIN_AMAUNT = 0;
    

    if(amount <= MAX_AMAUNT && amount > MIN_AMAUNT){

        for(let i=0; i<=amount; i++){
            
            let r = () => Math.random() * 256 >> 0;
            let color = `rgb(${r()}, ${r()}, ${r()})`;

            const divEl = document.createElement('div');
            divEl.style.backgroundColor = color;
            divEl.style.height = `${30 + (i * 10)}px`;
            divEl.style.width = `${30 + (i * 10)}px`;

            divCollection.push(divEl);
 };

    }
    refs.boxesEl.append(...divCollection);
    console.log(refs.boxesEl);
};

   function  OnClick(event){

        const actionClick =event.target.dataset.action;
        
        if(actionClick !== 'render' && actionClick !== 'destroy') return; 

        else if (actionClick === 'render') {

            const amountEl = event.target.value; 

        createBoxes(amountEl);
          
     }
    }

        


