document.addEventListener('DOMContentLoaded', () => {
    
    const contactBtn = document.getElementById('contactBtn');
    
    if(contactBtn) {
        contactBtn.addEventListener('click', () => {
            window.location.href = "mailto:john.doe@example.com";
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});