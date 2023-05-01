const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e) => observer.observe(e));