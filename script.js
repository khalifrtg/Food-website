const menu = document.querySelector('.menu');
const icons = document.querySelectorAll('.section-1-icons i');

let i = 1;

// Set interval to display pictures in variety of foods 
setInterval(() => {
    i++
    const icon = document.querySelector('.section-1-icons .change');

    icon.classList.remove('change');

    if  (i > icons.length) {
        icons[0].classList.add('change');
        i = 1;
    } else {
        icon.nextElementSibling.classList.add('change');
    }
}, 4000);

// to show and hide Navbar
function toggleMenu() {
    navLink = document.querySelectorAll('.target');
    navLink.forEach((link) => {
        link.classList.toggle('change')
    });
}

// Event Listeners 
menu.addEventListener('click', toggleMenu);