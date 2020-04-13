
const burger = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header-nav');

const switcher = document.querySelector('.switcher');
const checkbox = document.getElementById('switch-checkbox');
const switcherText = document.querySelector('.switch-label');

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
})

switcher.addEventListener('change', () => {
    console.log(switchBar);
    if (checkbox.checked) {
        headerNav.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
        console.log(switcherText.dataset.on);
        switcherText.textContent = switcherText.dataset.on;
        switcherText.style.marginLeft = '-50px';
        switchBar = true;
    } else {headerNav.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(230,45,253,1) 100%)';
    console.log(switcherText.dataset.off);
    switcherText.textContent = switcherText.dataset.off;
    switcherText.style.marginLeft = '10px';
    switchBar = false;
    }
});   