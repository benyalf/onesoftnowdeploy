document.getElementById('burguer').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('expanded');
    if (navLinks.classList.contains('expanded')) {
        navLinks.style.display = 'block';
    } else {
        navLinks.style.display = 'none';
    }
    console.log('gola')
})
