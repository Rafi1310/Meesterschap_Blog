const navItems = document.querySelectorAll('.special-nav li');
        const indicator = document.querySelector('.nav-indicator');
        const navUl = document.querySelector('.special-nav ul');
        let activeItem = document.querySelector('.special-nav li.active');

        function moveIndicator(element) {
            if(!element) return;
            const rect = element.getBoundingClientRect();
            const navRect = navUl.getBoundingClientRect();
            
            indicator.style.width = `${rect.width}px`;
            indicator.style.left = `${rect.left - navRect.left}px`;
        }

        // Zet de lijn direct goed bij het laden
        moveIndicator(activeItem);

        // Hover effect
        navItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                moveIndicator(e.target);
            });
        });

        // Terug naar actieve pagina bij verlaten van het menu
        navUl.addEventListener('mouseleave', () => {
            moveIndicator(activeItem);
        });