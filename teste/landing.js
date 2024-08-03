document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const closeNav = document.getElementById('close-nav');
    const nav = document.getElementById('nav');

    // Toggle menu visibility
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });

    // Close menu when clicking on close button
    closeNav.addEventListener('click', () => {
        nav.classList.remove('nav-open');
    });
});
