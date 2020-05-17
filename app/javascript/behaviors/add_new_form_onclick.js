const AddNewFormOnclick = () => {
  const addNewLink = document.querySelectorAll('#link-new');
  addNewLink.forEach((link) => {
    link.addEventListener('click', (event) => {
      console.log("coucou from header");
      console.log(event.target);
      console.log(event.target.nextElementSibling);
      const form = event.target.nextElementSibling;
      form.classList.toggle('disabled');
    })
  })
}

export {AddNewFormOnclick};
