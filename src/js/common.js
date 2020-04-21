/* eslint-disable no-loop-func */

import { cards } from './cards';

const burger = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header-nav');

const switcher = document.querySelector('.switcher');
const checkbox = document.getElementById('switch-checkbox');
const switcherText = document.querySelector('.switch-label');
const page1 = document.getElementById('container1');
const page2 = document.getElementById('container2');


let switchBar = false; // true = Game, false = Train
console.log(switchBar);

// headerNav.addEventListener('click', (event) => {
//   if (event.target.classList.contains('nav-item')) {
//     newFunction_1();
//   }
// });


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
  const { target } = event;

  if (target.dataset.menu) {
    number = parseFloat(target.dataset.menu);
  } else {
    const item = target.closest('div');
    number = parseFloat(item.dataset.menu);
  }

  const categoryName = document.createElement('p');
  categoryName.classList.add('category-name');
  categoryName.textContent = `${arr[0][number - 1]}`;

  for (let i = 0; i < arr[number].length; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add('category-item', 'card');
    elem.dataset.engWord = `${arr[number][i].word}`;
    elem.innerHTML = `<img src='${arr[number][i].image}' alt='${arr[number][i].word}' class="category-item-img card-img" data-id-word="${arr[number][i].word}">
    <button class="card-btn" data-id-word="${arr[number][i].word}">TURN</button>
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
    if (target.dataset.menu === '0') {
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
  const { translation, audioSrc } = cards.flat().find((ele) => ele.word === pattern);
  const sound = new Audio(audioSrc);
  console.log(translation, audioSrc);
  if (target.classList.contains('card-img')) {
    sound.play();
  }

  if (target.classList.contains('card-btn')) {
    target.nextElementSibling.textContent = translation;
    setTimeout(() => {
      eve.target.nextElementSibling.textContent = pattern;
    }, 2000);
  }
});

const backgroundTrain = () => {
  headerNav.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
  document.querySelectorAll('.category-item-img').forEach((el) => {
    el.style.borderColor = 'darkseagreen';
  });
  console.log(switcherText.dataset.on);
  switcherText.textContent = switcherText.dataset.on;
  switcherText.style.marginLeft = '-50px';
  switchBar = true;
};

const backgroundPlay = () => {
  headerNav.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(230,45,253,1) 100%)';
  console.log(switcherText.dataset.off);
  switcherText.textContent = switcherText.dataset.off;
  switcherText.style.marginLeft = '10px';
  document.querySelectorAll('.category-item-img').forEach((el) => {
    el.style.borderColor = 'mediumorchid';
  });
  switchBar = false;
};

// --------Game Mode --------
const soundArr = [];

const createPlayCards = (container, arr) => {
  const wrapper = document.getElementById(`${container}`);
  const number = arr[0].indexOf(wrapper.children[0].textContent);
  const categoryName = document.createElement('p');
  categoryName.classList.add('category-name');
  categoryName.textContent = `${arr[0][number]}`;
  wrapper.innerHTML = `<p class="category-name">${arr[0][number]}</p>`;
  console.log(number);
  for (let i = 0; i < arr[number].length; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add('category-item', 'card');
    // elem.dataset.engWord = `${arr[number + 1][i].word}`;
    elem.innerHTML = `<img src='${arr[number + 1][i].image}' alt='${arr[number + 1][i].word}' class="category-item-img">`;
    soundArr.push(arr[number + 1][i].audioSrc);
    wrapper.append(elem);
  }
  return soundArr;
};
console.log(soundArr);

function createStartBtn() {
  const startBtn = document.createElement('button');
  startBtn.classList.add('start-btn');
  startBtn.textContent = 'START';
  page2.append(startBtn);
}

function shuffle(array) {
  const arr = array.sort(() => Math.random() - 0.5);
  return arr;
}

const onGame = () => {
  createPlayCards('container2', cards);
  // const newSounds = shuffle(soundArr);
  createStartBtn();
};

function starsCount() {
  const newSounds = shuffle(soundArr);
  console.log(newSounds);
  let stars = 0;
  let crosses = 0;
  const sound = new Audio(newSounds[newSounds.length - 1]);
  const wrong = new Audio('src/assets/audio/Wrong_Answer.mp3');
  const right = new Audio('src/assets/audio/Hurray.mp3');
  const pattern = /[a-z]{1,}.mp3/i;

  const soundName = newSounds[newSounds.length - 1].match(pattern)[0].slice(0, -4);
  console.log(soundName);
  setTimeout(() => {
    sound.play();
  }, 1000);

  document.addEventListener('click', (e) => {
    const { target } = e;
    if (target.tagName === 'IMG') {
      console.log(target.getAttribute('alt'));
      if (target.getAttribute('alt') === soundName) {
        stars += 1;
        right.play();
        newSounds.pop();
      } else {
        crosses += 1;
        wrong.play();
        setTimeout(() => {
          sound.play();
        }, 1000);
      }
    }
    console.log('stars: ', stars, 'X: ', crosses);
  });

  //

  // for (let i = 0; i < newSounds.length - 1; i += 1) {
  //
  //   document.addEventListener('click', (event) => {
  //     const { target } = event;
  //     if (target.classList.contains('card-img')) {

  //       console.log(target.getAttribute('alt'));
  //       console.log(newSounds[i].match(pattern)[0].slice(0, -4))
  //       // let pattern1 = pattern.slice(0, -4);
  //       if (target.getAttribute('alt') === newSounds[i] {
  //         stars += 1;
  //       }
  //     }
  //   });
  // }
}

switcher.addEventListener('change', () => {
  if (checkbox.checked) {
    newFunction3();
    createCategory('container1', cards);
    backgroundTrain();
  } else if (!checkbox.checked) {
    onGame();
    document.querySelector('.start-btn').addEventListener('click', starsCount);
    backgroundPlay();
  }
});
