const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const listIngredients = document.querySelector('ul');

const ingredientsEl = ingredients.map( (someingredient, i) => {

  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredients[i]; 
  
 return ingredientEl; 
}
)
listIngredients.append(...ingredientsEl);




