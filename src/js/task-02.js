const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = (ingredient) => {
  let newElement = document.createElement('li');
  newElement.textContent = ingredient;
  return newElement;
}

const elementsOfIngredients = document.querySelector('ul#ingredients');
const newIngredients = ingredients.map(listIngredients);
elementsOfIngredients.append(...newIngredients);