const AddNewFormOnclick = () => {
  const addNewLink = document.querySelectorAll('#link-new');
  addNewLink.forEach((link) => {
    link.addEventListener('click', (event) => {
      console.log("coucou from header");
      console.log(event.target);
      console.log(event.target.nextElementSibling);
      const form = event.target.nextElementSibling;
      form.classList.toggle('disabled');
      console.log(link.innerText);
      console.log(link);
      if (link.innerText === 'Add a new ingredient!') {
        link.innerText = 'X close';
      } else {
        link.innerText = 'Add a new ingredient!';
      }
    })
  })
}

export {AddNewFormOnclick};
