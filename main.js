document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.link-items');
    const indicator = document.querySelector('.indicator');

    function updateIndicator(activeItem) {
        const index = Array.from(navItems).indexOf(activeItem);
        indicator.style.left = `${index * 65 + 48}px`;
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            
            navItems.forEach(nav => nav.classList.remove('active'));

            item.classList.add('active');

            updateIndicator(item);
        });
    });

    const activeItem = document.querySelector('.link-items.active');
    if (activeItem) {
        updateIndicator(activeItem);
    }
});
window.addEventListener('scroll', function() {
    const introSection = document.getElementById('intro');
    const introPosition = introSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (introPosition < screenPosition) {
        introSection.classList.add('active');
    }
});



