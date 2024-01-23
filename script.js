let menu_bar = document.querySelector('.menu-bar-div');
let nav_list = document.querySelector('.nav-list');
let menu_btn = document.querySelector('.menu-btn');
menu_bar.addEventListener('click', () => {
    nav_list.classList.toggle('active');
    menu_btn.classList.toggle('fa-bars');
    menu_btn.classList.toggle('fa-times');
})
