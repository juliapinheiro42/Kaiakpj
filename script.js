const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];

window.addEventListener('scroll',toggleNavBar,false);
function toggleNavBar() {
    if (window.scrollY >= $logo.offsetHeight && $navBar.classList.contains('pos-fixed')) {
        $navBar.classList.remove('pos-fixed');
        $navBar.classList.add('pos-scroll');
}else if (window.scrollY <= 0 && $navBar.classList.contains('pos-scroll')) {
            $navBar.classList.remove ('pos-scroll');
            $navBar.classList.add('pos-fixed');
        }
    }
    
