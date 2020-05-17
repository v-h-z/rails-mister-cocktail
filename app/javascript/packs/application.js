// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import 'bootstrap';

console.log("hello");


import { initUpdateNavbarOnScroll } from '../components/navbar';
import { scrollFromHeader } from '../behaviors/scroll_from_header'
import { AddNewFormOnclick } from '../behaviors/add_new_form_onclick'
import { addClassLast } from '../behaviors/add_class_last'

window.SmoothScrollOptions = { animationTime: 1200 }

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  initUpdateNavbarOnScroll();
  scrollFromHeader();
  AOS.init();
  AddNewFormOnclick();
  addClassLast();
});
