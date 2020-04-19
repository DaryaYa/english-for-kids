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
console.log(switchBar);

// headerNav.addEventListener('click', (event) => {
//   if (event.target.classList.contains('nav-item')) {
//     newFunction_1();
//   }
// });

switcher.addEventListener('change', () => {
  console.log(switchBar);
  if (checkbox.checked) {
    headerNav.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
    document.querySelectorAll('.category-item-img').forEach((el) => {
      el.style.borderColor = 'darkseagreen';
    });
    console.log(switcherText.dataset.on);
    switcherText.textContent = switcherText.dataset.on;
    switcherText.style.marginLeft = '-50px';
    switchBar = true;
  } else {
    headerNav.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(230,45,253,1) 100%)';
    console.log(switcherText.dataset.off);
    switcherText.textContent = switcherText.dataset.off;
    switcherText.style.marginLeft = '10px';
    document.querySelectorAll('.category-item-img').forEach((el) => {
      el.style.borderColor = 'mediumorchid';
    });
    switchBar = false;
  }
});

function newFunction1() {
  burger.classList.toggle('burger-transform');
  headerNav.classList.toggle('move');
}

// --------- page1 --------
// arr  ------ cards.js
//
function createCategory(container, arr) {
  const wrapper = document.getElementById(`${container}`);
  wrapper.innerHTML = '';
  if (!arr.length) return;

  for (let i = 1; i < arr.length; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add('category-item');
    elem.dataset.menu = `${i}`;
    elem.innerHTML = `<img src='${arr[i][0].image}' alt='${arr[i][0].word}' class="category-item-img">
    <p>${arr[0][i - 1]}</p>`;

    wrapper.append(elem);
  }
}
createCategory('container1', cards);

function newFunction() {
  page1.classList.add('hidden');
  page2.classList.remove('hidden');
}
function newFunction3() {
  page1.classList.remove('hidden');
  page2.classList.add('hidden');
}

function createCards(container, arr) {
  const wrapper = document.getElementById(`${container}`);
  wrapper.innerHTML = '';
  let number = 0;

  if (event.target.dataset.menu) {
    number = parseFloat(event.target.dataset.menu);
  } else {
    const item = event.target.closest('div');
    number = parseFloat(item.dataset.menu);
  }

  const categoryName = document.createElement('p');
  categoryName.classList.add('category-name');
  categoryName.textContent = `${arr[0][number - 1]}`;

  for (let i = 0; i < arr[number].length; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add('category-item');
    elem.classList.add('card');
    elem.dataset.engWord = `${arr[number][i].word}`;
    elem.innerHTML = `<img src='${arr[number][i].image}' alt='${arr[number][i].word}' class="category-item-img card-img" data-id-word="${arr[number][i].word}">
    <button data-id-word="${arr[number][i].word}">TURN</button>
    <p>${arr[number][i].word}</p>`;

    wrapper.append(elem);
  }
  wrapper.prepend(categoryName);
}

page1.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('category-item-img')) {
    newFunction();
    createCards('container2', cards);
  }
});

// const btnCollection = document.querySelectorAll('button');


burger.addEventListener('click', newFunction1);

headerNav.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('nav-item')) {
    newFunction1();
    if (target.dataset.menu == 0) {
      newFunction3();
      createCategory('container1', cards);
    } else {
      newFunction();
      createCards('container2', cards);
    }
  }
});

document.addEventListener('click', (eve) => {
  const { target } = event;
  const pattern = target.dataset.idWord;
  const { translation, audioSrc } = cards.flat().find((ele) => ele.word == pattern);
  const sound = new Audio(audioSrc);
  if (target.classList.contains('card-img')) {
    sound.play();
  }
  
  if (target.tagName === 'BUTTON') {
    target.nextElementSibling.textContent = translation;
    setTimeout(() => {
      eve.target.nextElementSibling.textContent = pattern;
    }, 2000);
  }
});



// --------Game Mode --------
