// ---------------- Nav Menu ------------

const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

hamburger.addEventListener('click', function(){
    navMenu.classList.add('close-menu');
})

close.addEventListener('click', function(){
    navMenu.classList.remove('close-menu');
})


//---------------- Nav Items -------------------

const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(function(item){
    item.addEventListener('click', function(){
        navMenu.classList.remove('close-menu');
    })
})