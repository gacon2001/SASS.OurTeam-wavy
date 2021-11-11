var header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 160) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
})