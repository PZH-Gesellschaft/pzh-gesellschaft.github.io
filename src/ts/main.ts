// ********************************
// *** Author: PZH Gesellschaft ***
// *** Date: 13. Mai. 2026      ***
// *** Update: 13. Mai. 2026    ***
// *** License: AGPL-3-or-later ***
// ********************************

document.getElementById('menuToggle').addEventListener('click', function () {
    const m = document.getElementById('mobileMenu');
    m.style.display = m.style.display === 'none' ? 'block' : 'none';
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const t = document.querySelector(this.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
});