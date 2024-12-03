document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Ambil ID dari href (seperti #home, #about, dll)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Scroll ke target element
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
