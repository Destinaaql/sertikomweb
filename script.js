// Toggle class active 
const navbarNav = document.querySelector
('.navbar-nav')
// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
navbarNav.classList.toggle('active')
}: 

// Klik di luar sidebar untuk menhilangkan nav 
const hamburger= document.querySelector
('hamburger-menu');

Document.addEventListener('click, function(e)'{
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
};