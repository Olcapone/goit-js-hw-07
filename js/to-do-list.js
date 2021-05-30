const refs = {
    inputEl: document.querySelector('input'),
    controlsEl: document.querySelector('#controls'),
    boxesEl: document.querySelector('#boxes'),
    checkEl: document.querySelector('.check'),

};

refs.controlsEl.addEventListener('click', OnClick);
refs.inputEl.addEventListener('input', OnClick);
refs.checkEl.addEventListener('click', OnClick);

   
function createBoxes(amount){

  //  const divCollection = [];
    
            let r = () => Math.random() * 256 >> 0;
            let color = `rgb(${r()}, ${r()}, ${r()})`;

            const task = document.createElement('div');
            task.classList.add('task_todo');

            const checkedTask = document.createElement('input');
            checkedTask.type = 'checkbox'; 
            checkedTask.classList.add('check');

            const newTask = document.createElement('span');
            
            newTask.textContent = refs.inputEl.value;
            newTask.style.color = color;
       
            task.append(checkedTask, newTask);
            
            refs.boxesEl.append(task);
   
};

function destroyBoxes(){
    refs.boxesEl.innerHTML = '';
};

   function  OnClick(event){

        const actionClick =event.target.dataset.action;

        console.log(actionClick);

        switch (actionClick) {
            case 'render': createBoxes();      
                break;
            case 'destroy': destroyBoxes();      
                break;
                default: break;
            }
    }

        


