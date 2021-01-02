let toTop = document.querySelector('.top');
window.onscroll = () => {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        toTop.classList.add('to-top');
    } else {
        toTop.classList.remove('to-top');
    }
}

let navToggleBtn = document.querySelector('.nav-toggle');
let navContent = document.querySelector('.nav-content');
navToggleBtn.addEventListener('click', () => {
    navToggleBtn.classList.toggle('nav-toggle-close');
    navContent.classList.toggle('nav-content-show');
});

let dropdownBtn = document.querySelector('.dropdown-btn');
let dropdown = document.querySelector('.dropdown');
dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-show');
});

let readMoreBtns = document.querySelectorAll('.grey-btn');
readMoreBtns.forEach(readMoreBtn => {
    readMoreBtn.addEventListener('click', () => {
        readMoreBtn.classList.add('disabled-btn');
    });
});


toTop.addEventListener('click', () => {
    scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth',
    });
});