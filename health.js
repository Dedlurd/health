const head = document.querySelector('.head');
const ul = document.querySelector('header ul');
let menuOpen = false;

head.addEventListener('click', () => {
    if (menuOpen == false) {
        ul.style.display = 'block';
        menuOpen = true;
    } 
    else  if (menuOpen == true) {
        ul.style.display = 'none';
        menuOpen = false;
    }
    
});