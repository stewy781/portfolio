function runTypingEffect() {
    const text = 'I am Heather Larson!';
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, typingDelay) {

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);

         }, typingDelay * i );
    }
}


function userScroll() {
    const navbar = document.querySelector('.navbar');
    const toTopBtn = document.querySelector('#to-top');

        window.addEventListener('scroll', () => {
            if(window.scrollY > 1) {
                navbar.classList.add('bg-secondary');
                navbar.classList.add('navbar-sticky');
                toTopBtn.classList.add('show');
            }
            else {
                navbar.classList.remove('bg-secondary');
                navbar.classList.remove('navbar-sticky');
                toTopBtn.classList.remove('show');
           }
        })
}


function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Event Listeners
document.addEventListener('DOMContentLoaded', runTypingEffect);
document.addEventListener('DOMContentLoaded', userScroll);
document.querySelector('#to-top').addEventListener('click', scrollToTop);
