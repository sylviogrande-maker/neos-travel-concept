/* ═══════════════════════════════════════════════════════
   NEOS VOYAGES — MAIN.JS v1.0
   Animations, interactions, fonctionnalités
   ═══════════════════════════════════════════════════════ */

(function() {
'use strict';

// ─── PRELOADER ───
window.addEventListener('load', () => {
    setTimeout(() => {
        const p = document.getElementById('preloader');
        if (p) p.classList.add('hidden');
    }, 1800);
});

// ─── NAV SCROLL ───
const nav = document.getElementById('nav');
if (nav) {
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', scrollY > 60);
    }, { passive: true });
}

// ─── HAMBURGER ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// ─── CUSTOM CURSOR ───
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (!isTouch) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add('cursor-active');

    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    function animateCursor() {
        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.addEventListener('mouseover', e => {
        const interactive = e.target.closest('a, button, .dest-card, .fav-card, .theme-card, .special-card, .exp-card, input, textarea, select');
        if (interactive) { dot.classList.add('hover'); ring.classList.add('hover'); }
    });
    document.addEventListener('mouseout', e => {
        const interactive = e.target.closest('a, button, .dest-card, .fav-card, .theme-card, .special-card, .exp-card, input, textarea, select');
        if (interactive) { dot.classList.remove('hover'); ring.classList.remove('hover'); }
    });
}

// ─── MAGNETIC BUTTONS ───
if (!isTouch) {
    document.querySelectorAll('.magnetic').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// ─── SCROLL REVEAL ───
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ─── WORD REVEAL ───
document.querySelectorAll('.word-reveal').forEach(el => {
    const text = el.textContent.trim();
    el.innerHTML = text.split(' ').map((w, i) =>
        `<span class="word" style="transition-delay:${i * 0.06}s">${w}</span>`
    ).join(' ');
});
const wordObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.3 });
document.querySelectorAll('.word-reveal').forEach(el => wordObs.observe(el));

// ─── COUNTER ANIMATION ───
const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const el = e.target;
            const target = parseInt(el.dataset.count);
            if (!target) return;
            let current = 0;
            const step = target / 50;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) { el.textContent = target + '+'; clearInterval(timer); }
                else el.textContent = Math.floor(current);
            }, 30);
            counterObs.unobserve(el);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number[data-count]').forEach(el => counterObs.observe(el));

// ─── HERO SLIDESHOW ───
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
if (slides.length > 1) {
    let cur = 0, heroInt;
    function goSlide(n) {
        slides[cur].classList.remove('active');
        if (dots[cur]) dots[cur].classList.remove('active');
        cur = n;
        slides[cur].classList.add('active');
        if (dots[cur]) dots[cur].classList.add('active');
    }
    function nextSlide() { goSlide((cur + 1) % slides.length); }
    heroInt = setInterval(nextSlide, 6000);
    dots.forEach(d => d.addEventListener('click', () => {
        clearInterval(heroInt);
        goSlide(parseInt(d.dataset.slide));
        heroInt = setInterval(nextSlide, 6000);
    }));
}

// ─── SEARCH ───
const searchBtn = document.querySelector('.nav-search-btn');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const DESTINATIONS = [
    {name:'Indonésie',type:'Plongée',region:'Océan Indien'},{name:'Égypte',type:'Plongée',region:'Mer Rouge'},
    {name:'Maldives',type:'Plongée',region:'Océan Indien'},{name:'Namibie',type:'Circuit',region:'Afrique'},
    {name:'Bhoutan',type:'Trek',region:'Asie'},{name:'Costa Rica',type:'Circuit',region:'Amérique'},
    {name:'Antarctique',type:'Expédition',region:'Polaires'},{name:'Les Açores',type:'Plongée',region:'Atlantique'},
    {name:'Malte',type:'Plongée',region:'Méditerranée'},{name:'Thaïlande',type:'Plongée',region:'Océan Indien'},
    {name:'Japon',type:'Circuit',region:'Asie'},{name:'Mexique',type:'Plongée',region:'Pacifique'},
    {name:'Seychelles',type:'Plongée',region:'Océan Indien'},{name:'Jordanie',type:'Circuit',region:'Mer Rouge'},
    {name:'Tanzanie',type:'Safari',region:'Afrique'},{name:'Madagascar',type:'Plongée',region:'Océan Indien'},
    {name:'Polynésie',type:'Plongée',region:'Pacifique'},{name:'Cuba',type:'Plongée',region:'Caraïbes'},
    {name:'Bahamas',type:'Plongée',region:'Caraïbes'},{name:'Philippines',type:'Plongée',region:'Pacifique'},
    {name:'Cambodge',type:'Circuit',region:'Asie'},{name:'Vietnam',type:'Circuit',region:'Asie'},
    {name:'Laos',type:'Circuit',region:'Asie'},{name:'Népal',type:'Trek',region:'Asie'},
    {name:'Pérou',type:'Circuit',region:'Amérique'},{name:'Argentine',type:'Circuit',region:'Amérique'},
    {name:'Australie',type:'Circuit',region:'Océanie'},{name:'Islande',type:'Trek',region:'Europe'},
    {name:'Maroc',type:'Circuit',region:'Afrique'},{name:'Oman',type:'Plongée',region:'Océan Indien'},
    {name:'Sri Lanka',type:'Circuit',region:'Asie'},{name:'Inde',type:'Circuit',region:'Asie'},
    {name:'Chine',type:'Circuit',region:'Asie'},{name:'Kenya',type:'Safari',region:'Afrique'},
    {name:'Écosse',type:'Trek',region:'Europe'},{name:'Colombie',type:'Plongée',region:'Pacifique'},
    {name:'Mongolie',type:'Circuit',region:'Asie'},{name:'Botswana',type:'Safari',region:'Afrique'},
    {name:'Grèce',type:'Plongée',region:'Méditerranée'},{name:'Turquie',type:'Circuit',region:'Méditerranée'},
    {name:'Iran',type:'Circuit',region:'Asie'},{name:'Ouzbékistan',type:'Circuit',region:'Asie'},
];

if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        setTimeout(() => searchInput?.focus(), 300);
    });
    document.querySelector('.search-close')?.addEventListener('click', () => searchOverlay.classList.remove('active'));
    searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) searchOverlay.classList.remove('active'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') searchOverlay.classList.remove('active'); });
}
if (searchInput && searchResults) {
    searchInput.addEventListener('input', () => {
        const q = searchInput.value.toLowerCase().trim();
        if (q.length < 2) { searchResults.innerHTML = ''; return; }
        const results = DESTINATIONS.filter(d =>
            d.name.toLowerCase().includes(q) || d.type.toLowerCase().includes(q) || d.region.toLowerCase().includes(q)
        ).slice(0, 8);
        searchResults.innerHTML = results.length
            ? results.map(d => `<a href="destination.html" class="search-result"><span class="search-result-type">${d.type}</span><span class="search-result-name">${d.name}</span></a>`).join('')
            : '<div style="color:rgba(244,232,209,.3);padding:1rem 0;font-size:.85rem">Aucune destination trouvée</div>';
    });
}

// ─── FILTER BUTTONS ───
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.region-filters')?.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ─── FAVORITES ───
function getFavorites() { try { return JSON.parse(localStorage.getItem('neos_fav') || '[]'); } catch { return []; } }
function toggleFavorite(id) {
    let f = getFavorites();
    f = f.includes(id) ? f.filter(x => x !== id) : [...f, id];
    localStorage.setItem('neos_fav', JSON.stringify(f));
    updateFavBtns();
}
function updateFavBtns() {
    const f = getFavorites();
    document.querySelectorAll('.fav-heart').forEach(b => b.classList.toggle('active', f.includes(b.dataset.id)));
}
document.addEventListener('click', e => { const h = e.target.closest('.fav-heart'); if (h) { e.preventDefault(); toggleFavorite(h.dataset.id); } });
updateFavBtns();

// ─── COOKIE BANNER ───
const cb = document.getElementById('cookieBanner');
if (cb && !localStorage.getItem('neos_cookies')) setTimeout(() => cb.classList.add('visible'), 2500);
document.addEventListener('click', e => {
    if (e.target.id === 'cookieAccept' || e.target.id === 'cookieReject') {
        localStorage.setItem('neos_cookies', e.target.id === 'cookieAccept' ? 'yes' : 'no');
        cb?.classList.remove('visible');
    }
});

// ─── FORM ───
document.querySelectorAll('.contact-form').forEach(form => {
    const btn = form.querySelector('.btn-primary');
    if (!btn) return;
    btn.addEventListener('click', e => {
        e.preventDefault();
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let valid = true;
        inputs.forEach(i => { if (!i.value.trim()) { i.style.borderColor = '#ef4444'; valid = false; } else i.style.borderColor = ''; });
        const fb = form.querySelector('.form-feedback');
        if (valid) {
            const orig = btn.textContent;
            btn.textContent = 'Envoi en cours...'; btn.disabled = true;
            setTimeout(() => {
                btn.textContent = orig; btn.disabled = false;
                if (fb) { fb.className = 'form-feedback success'; fb.textContent = 'Merci ! Nous vous rappellerons dans les plus brefs délais.'; }
                inputs.forEach(i => i.value = '');
                form.querySelectorAll('textarea').forEach(t => t.value = '');
            }, 1500);
        } else if (fb) { fb.className = 'form-feedback error'; fb.textContent = 'Veuillez remplir tous les champs obligatoires.'; }
    });
});

// ─── SMOOTH SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const t = document.querySelector(href);
        if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' }); }
    });
});

// ─── TILT 3D ───
if (!isTouch) {
    document.querySelectorAll('.dest-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s ease';
            setTimeout(() => card.style.transition = '', 500);
        });
    });
}

// ─── PARALLAX ───
const philoImg = document.querySelector('.philo-img .dest-card-bg');
if (philoImg && !isTouch) {
    window.addEventListener('scroll', () => {
        const r = philoImg.closest('.philo-img')?.getBoundingClientRect();
        if (r && r.top < innerHeight && r.bottom > 0) {
            const p = (innerHeight - r.top) / (innerHeight + r.height);
            philoImg.style.transform = `translateY(${(p - 0.5) * -40}px) scale(1.1)`;
        }
    }, { passive: true });
}

// ─── INIT IMAGES ───
function initImages() {
    if (typeof NEOS_IMAGES === 'undefined') return;
    document.querySelectorAll('[data-img]').forEach(el => {
        const key = el.dataset.img;
        if (NEOS_IMAGES[key]) {
            if (el.tagName === 'IMG') el.src = NEOS_IMAGES[key];
            else el.style.backgroundImage = `url("${NEOS_IMAGES[key]}")`;
        }
    });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initImages);
else initImages();

})();
