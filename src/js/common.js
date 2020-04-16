// import { category } from './category';
import { cards } from './cards';

const burger = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header-nav');

const switcher = document.querySelector('.switcher');
const checkbox = document.getElementById('switch-checkbox');
const switcherText = document.querySelector('.switch-label');
const page1 = document.getElementById('container1');
const page2 = document.getElementById('container2');


let switchBar = true; // true = Game, false = Train

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-transform');
  headerNav.classList.toggle('move');
});

headerNav.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav-item')) {
    burger.classList.toggle('burger-transform');
    headerNav.classList.toggle('move');
  }
});

switcher.addEventListener('change', () => {
  console.log(switchBar);
  if (checkbox.checked) {
    headerNav.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
    console.log(switcherText.dataset.on);
    switcherText.textContent = switcherText.dataset.on;
    switcherText.style.marginLeft = '-50px';
    switchBar = true;
  } else {
    headerNav.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(230,45,253,1) 100%)';
    console.log(switcherText.dataset.off);
    switcherText.textContent = switcherText.dataset.off;
    switcherText.style.marginLeft = '10px';
    switchBar = false;
  }
});

// --------- page1 --------
// arr == category.js
const category = [
  {
    word: 'cry',
    translation: 'плакать',
    image: 'src/assets/img/cry.jpg',
    audioSrc: 'src/assets/audio/cry.mp3',
  },
  {
    word: 'dance',
    translation: 'танцевать',
    image: 'src/assets/img/dance.jpg',
    audioSrc: 'src/assets/audio/dance.mp3',
  },
  {
    word: 'dive',
    translation: 'нырять',
    image: 'src/assets/img/dive.jpg',
    audioSrc: 'src/assets/audio/dive.mp3',
  },
  {
    word: 'draw',
    translation: 'рисовать',
    image: 'src/assets/img/draw.jpg',
    audioSrc: 'src/assets/audio/draw.mp3',
  },
  {
    word: 'fish',
    translation: 'ловить рыбу',
    image: 'src/assets/img/fish.jpg',
    audioSrc: 'src/assets/audio/fish.mp3',
  },
  {
    word: 'fly',
    translation: 'летать',
    image: 'src/assets/img/fly.jpg',
    audioSrc: 'src/assets/audio/fly.mp3',
  },
  {
    word: 'hug',
    translation: 'обнимать',
    image: 'src/assets/img/hug.jpg',
    audioSrc: 'src/assets/audio/hug.mp3',
  },
  {
    word: 'jump',
    translation: 'прыгать',
    image: 'src/assets/img/jump.jpg',
    audioSrc: 'src/assets/audio/jump.mp3',
  },
];

function createTreeDom(container, arr) {
  const wrapper = document.getElementById(`${container}`);

  if (!arr.length) return;

  for (let i = 0; i < arr.length; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add('category-item');
    elem.innerHTML = `<img src='${arr[i].image}' alt='${arr[i].word}'>
    <p>${arr[i].word}</p>`;

    wrapper.append(elem);
  }
}
createTreeDom('container1', category);
