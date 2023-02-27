const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsEl = ingredients.map((ingredientsItem) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredientsItem;
  liEl.classList.add("item");
  return liEl;
});
// console.log(ingredientsEl);

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredientsEl);
