const scrollFromHeader = () => {
  console.log("coucou de scroll")
  const firstCocktail = document.querySelector('#first-cocktail');
  const header = document.querySelector('body > div.header.flex-center');
  header.addEventListener('click', (event) => {
    console.log(firstCocktail);
    console.log("coucou from header");
    // firstCocktail.scrollIntoView({behavior: "smooth"});
    window.scrollBy(0, window.innerHeight,{behavior: 'smooth'});
  })
}

export {scrollFromHeader};
