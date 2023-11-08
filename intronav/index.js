
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const menu_close = document.querySelector('.openhamburger')

menu_btn.addEventListener("click", function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    menu_close.classList.toggle('is-active');
})

menu_close.addEventListener("click", function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    menu_close.classList.toggle('is-active');
})


