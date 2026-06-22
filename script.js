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


// ==========================================
// 2. THEMA SCHAKELAAR 
// ==========================================
const themeBtn = document.getElementById('theme-btn');

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        // 1. Voeg de animatie-class toe vóórdat we het thema wisselen
        document.body.classList.add('theme-in-transition');
        
        // 2. Wissel de 'light-theme' class aan of uit
        document.body.classList.toggle('light-theme');
        
        // 3. Sla de keuze op
        if (document.body.classList.contains('light-theme')) {
            localStorage.setItem('websiteThema', 'light');
        } else {
            localStorage.setItem('websiteThema', 'ocean');
        }
    });
}

// ==========================================
// 3. LEES MEER KNOPPEN (Voor de sprekers)
// ==========================================
const leesMeerKnoppen = document.querySelectorAll('.lees-meer-btn');

leesMeerKnoppen.forEach(knop => {
    knop.addEventListener('click', function() {
        const infoDiv = this.closest('.speaker-info');
        const extraTekst = infoDiv.querySelector('.extra-tekst');
        
        // Zoek de hele kaart op (zodat we weten waar we naartoe moeten scrollen)
        const speakerCard = this.closest('.speaker-card'); 

        if (extraTekst.classList.contains('toon')) {
            // Verberg de tekst
            extraTekst.classList.remove('toon');
            this.textContent = 'Lees meer';
            
            // Scroll direct weer soepel naar de bovenkant van deze spreker!
            speakerCard.scrollIntoView({ behavior: 'instant' });
            
        } else {
            // Toon de tekst
            extraTekst.classList.add('toon');
            this.textContent = 'Lees minder';
        }
    });
});