const addClassLast = () => {
  const lastCocktail = document.querySelector('body > div.cocktails > div:last-child');
  console.log(lastCocktail);
  lastCocktail.setAttribute('id', 'last-cocktail');
}

export {addClassLast};
