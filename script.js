document.addEventListener('DOMContentLoaded', function() {

    // Efeito de digitação com Typed.js
    // A biblioteca já está linkada no HTML via CDN
    if (document.getElementById('typed-text')) {
        var options = {
            strings: ['Python.', 'Análise de Dados.'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        };

        var typed = new Typed('#typed-text', options);
    }
    
    // Suavizar a rolagem para âncoras
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Considera a altura do header fixo
                const headerOffset = 80; 
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});