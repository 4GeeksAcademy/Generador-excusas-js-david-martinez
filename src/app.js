import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


 window.onload = function() {
  
  
  let characters = [
    { name: 'The dog', img: 'https://images.pexels.com/photos/3067503/pexels-photo-3067503.jpeg' },
    { name: 'My grandma', img: 'https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg' },
    { name: 'The mailman', img: 'https://images.pexels.com/photos/7363204/pexels-photo-7363204.jpeg' },
    { name: 'Superman', img: 'https://images.pexels.com/photos/5961611/pexels-photo-5961611.jpe' },
    { name: 'My cat', img: 'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg' }
  ];

  
  let actions = ['ate', 'peed', 'crushed', 'broke', 'spilled'];
  let whats = ['my homework', 'my phone', 'the car', 'my house'];
  let whens = ['before the class', 'when I was sleeping', 'while I was exercising'];

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  
  let characterSelected = characters[getRandomIndex(characters)];

  
  let mensajeFinal = characterSelected.name + " " + 
                     actions[getRandomIndex(actions)] + " " + 
                     whats[getRandomIndex(whats)] + " " + 
                     whens[getRandomIndex(whens)];

  
  document.getElementById("excuse").innerHTML = mensajeFinal;
  
  
  const imgElement = document.getElementById("excuse-image");
  if (imgElement) {
    imgElement.src = characterSelected.img;
  }
};