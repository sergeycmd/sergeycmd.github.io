document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuList = document.querySelector('.menu-list');

    menuIcon.addEventListener('click', function() {
        menuList.classList.toggle('show-menu');
    });
});
