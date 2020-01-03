const id = a => document.getElementById(a)
const $ = q => document.querySelector(q);

const images = [
  "img/Panel 2.png",
  "img/Panel 3.png",
  "img/Panel 4.png",
  "img/Panel 5.png"
]

var index = 0;

function change(dir) {
  index += dir;
  if ( index == images.length ) {
    index = 0;
  }

  id('pic').src = images[index];

  $('.prev').style.display = (index) ? 'block' : 'none';
}