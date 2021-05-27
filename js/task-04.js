const counterValue = {

   value: 0,

   increment(){
       this.value+=1;
   },

   decrement(){ 
       this.value-=1;
   }
};
const refs = {
    OnClickDecrement: document.querySelector('[data-action="decrement"]'),
    OnClickIncrement: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value')
};


refs.OnClickDecrement.addEventListener('click', OnClickDec);
refs.OnClickIncrement.addEventListener('click', OnClickInc);

function OnClickDec (){
    counterValue.decrement();
    refs.valueEl.textContent =  counterValue.value;
};

function OnClickInc (){
    counterValue.increment();
    refs.valueEl.textContent =  counterValue.value;
}

