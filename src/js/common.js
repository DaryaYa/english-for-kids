
const burger = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header-nav');
const switcher = document.querySelector('.switcher');
const checkbox = document.getElementById('switch-checkbox');

let switchBar = true; // true = Game, false = Train  

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-transform');
    // TODO animash
    headerNav.classList.toggle('nav-invisible');
});

switcher.addEventListener('change', () => {
    console.log(switchBar);
    if (checkbox.checked) {
        headerNav.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
        switchBar = true;
    } else {headerNav.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(230,45,253,1) 100%)';
    switchBar = false;
    }
});   