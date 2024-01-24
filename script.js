// let menu_bar = document.querySelectorAll('.side-menu');
// let nav_list = document.querySelector('.nav-list');
// let menu_btn = document.querySelector('.menu-btn');
// let nav_li = document.querySelectorAll('.nav-li a');
// menu_bar.forEach(element => {
//     element.addEventListener('click', () => {
//         nav_list.classList.toggle('active');
//         menu_btn.classList.toggle('fa-bars');
//         menu_btn.classList.toggle('fa-times');
//         nav_li.forEach(nav_li => {
//             nav_li.classList.toggle('side-menu');
//         })
//     })
// });
function open_menu() {
    let menu_bar = document.querySelector('.menu-bar-div');
    let nav_list = document.querySelector('.nav-list');
    let menu_btn = document.querySelector('.menu-btn');

    nav_list.classList.toggle('active');
    menu_btn.classList.toggle('fa-bars');
    menu_btn.classList.toggle('fa-times');
}
