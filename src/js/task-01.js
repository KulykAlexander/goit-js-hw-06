const numberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfCategories.length}`);
// console.log(numberOfCategories);

numberOfCategories.forEach((element) => {
  const category = element.firstElementChild;
  console.log(`Category: ${category.textContent}`);
  const categoryList = element.lastElementChild;
  console.log(`Elements: ${categoryList.children.length}`);
});
