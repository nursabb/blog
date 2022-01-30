var scrollPosition = window.scrollY;
var logoContainer = document.getElementById("navBar") 

window.addEventListener('scroll', function() { 

    scrollPosition = window.scrollY;

    if (scrollPosition >= 30) {
        logoContainer.classList.add('noTransparrent');
    } else {
        logoContainer.classList.remove('noTransparrent');
    }

});
