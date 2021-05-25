
const navChildEl = document.querySelectorAll('.item');
const titleEl =  document.querySelectorAll('h2');




console.log(`В списке ${navChildEl.length} категории.`);

const resultText = titleEl.forEach((someChild, i) =>

  {  const someEl = navChildEl[i].lastElementChild;
  
    console.log('Категория: ' + someChild.textContent);
    console.log('Количество элементов: ' + someEl.children.length);
})





