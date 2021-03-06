const totalCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArr = [...totalCategories].map(
  categories => ` Category: ${categories.children[0].textContent}
  Elements: ${categories.children[1].children.length}`
)
  .join('\n');
console.log(categoriesArr);