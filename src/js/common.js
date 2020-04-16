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
    document.querySelectorAll('.category-item-img').forEach((el) => {
      el.style.borderColor = 'lightsalmon';
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
      el.style.borderColor = 'lightseagreen';
    });
    switchBar = false;
  }
});

// --------- page1 --------
// arr  ------ cards.js
//
function createCategory(container, arr) {
  const wrapper = document.getElementById(`${container}`);

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

function createCards(container, arr) {
  const wrapper = document.getElementById(`${container}`);
  console.log(event.target);
  let item = event.target.closest('div');
  console.log(item);

  // for (let i = 1; i < arr[1].length; i += 1) {
  //   const elem = document.createElement('div');
  //   elem.classList.add('category-item');
  //   elem.classList.add('card');
  //   elem.data('number', i-1);
  //   elem.innerHTML = `<img src='${arr[i][0].image}' alt='${arr[i][0].word}' class="category-item-img">
  //   <p>${arr[0][i - 1]}</p>`;
    
}

page1.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('category-item-img')) {
    // page1.classList.add('hidden');
    page2.classList.remove('hidden');
    createCards('container2', cards);
  }
});
