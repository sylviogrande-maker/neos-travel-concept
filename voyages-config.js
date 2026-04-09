/* ═══════════════════════════════════════════════════════════════════
   NEOS VOYAGES — FICHIER DE CONFIGURATION DU CONTENU
   ═══════════════════════════════════════════════════════════════════

   Ce fichier contrôle TOUT le contenu modifiable du site.
   Pour ajouter ou modifier une offre / destination / coup de cœur :
   → Éditez simplement ce fichier, sauvegardez, et rafraîchissez.

   ⚠️  RÈGLES IMPORTANTES :
   - Ne pas supprimer les virgules en fin de ligne
   - Les textes contenant des apostrophes doivent utiliser des "guillemets doubles"
   - Les URLs d'images doivent commencer par https://
   - Pour les images Unsplash : https://images.unsplash.com/photo-XXXXXXX?w=900&q=80&fit=crop
   ═══════════════════════════════════════════════════════════════════ */

const NEOS_CONFIG = {

  /* ──────────────────────────────────────────────────────────────────
     1. DESTINATIONS EN VEDETTE (grille bento sur la page d'accueil)
     ─ Ordre : la 1ère carte est la plus grande (vedette principale)
     ─ regionFilter : ocean-indien | pacifique | caraibes | mer-rouge |
                      mediterranee | atlantique | afrique | asie | polaires
     ────────────────────────────────────────────────────────────────── */
  destinations: [
    {
      nom: "Indonésie",
      region: "Océan Indien — Pacifique",
      regionFilter: "ocean-indien",
      description: "Raja Ampat, Komodo, Bali — plongée, croisières et safari sous-marin",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=80&fit=crop",
      lien: "plongee.html#ocean-indien"
    },
    {
      nom: "Maroc & Sahara",
      region: "Afrique",
      regionFilter: "afrique",
      description: "Treks, culture et désert infini",
      image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=900&q=80&fit=crop",
      lien: "alacarte.html#afrique"
    },
    {
      nom: "Maldives",
      region: "Océan Indien",
      regionFilter: "ocean-indien",
      description: "Croisières plongée dans les atolls",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&q=80&fit=crop",
      lien: "plongee.html#ocean-indien"
    },
    {
      nom: "Namibie",
      region: "Afrique",
      regionFilter: "afrique",
      description: "Sossusvlei, Etosha — l'Afrique sauvage",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&fit=crop",
      lien: "alacarte.html#afrique"
    },
    {
      nom: "Bhoutan",
      region: "Asie",
      regionFilter: "asie",
      description: "Le royaume du bonheur — Tiger's Nest, monastères et randonnées",
      image: "https://images.pexels.com/photos/17505615/pexels-photo-17505615.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
      lien: "alacarte.html#asie"
    },
    {
      nom: "Antarctique",
      region: "Régions Polaires",
      regionFilter: "polaires",
      description: "Icebergs et faune extraordinaire",
      image: "https://images.pexels.com/photos/219837/pexels-photo-219837.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
      lien: "plongee.html#polaires"
    },
    {
      nom: "Égypte",
      region: "Mer Rouge",
      regionFilter: "mer-rouge",
      description: "Croisières, épaves mythiques, récifs du sud",
      image: "https://images.pexels.com/photos/3100361/pexels-photo-3100361.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
      lien: "plongee.html#mer-rouge"
    },
    {
      nom: "Bahamas",
      region: "Caraïbes",
      regionFilter: "caraibes",
      description: "Requins, eaux cristallines et épaves",
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=80&fit=crop",
      lien: "plongee.html#caraibes"
    },
    {
      nom: "Polynésie",
      region: "Pacifique",
      regionFilter: "pacifique",
      description: "Rangiroa, Fakarava — passes et requins",
      image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=900&q=80&fit=crop",
      lien: "plongee.html#pacifique"
    },
    {
      nom: "Malte",
      region: "Méditerranée",
      regionFilter: "mediterranee",
      description: "Grottes, épaves, eaux limpides à 3h de Genève",
      image: "https://images.pexels.com/photos/31977873/pexels-photo-31977873.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
      lien: "plongee.html#mediterranee"
    },
    {
      nom: "Les Açores",
      region: "Atlantique",
      regionFilter: "atlantique",
      description: "Requins bleus, raies manta, cachalots",
      image: "https://images.pexels.com/photos/29141706/pexels-photo-29141706.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
      lien: "plongee.html#atlantique"
    },
    {
      nom: "Thaïlande",
      region: "Asie",
      regionFilter: "asie",
      description: "Temples dorés, plages de rêve et cuisine légendaire",
      image: "https://images.pexels.com/photos/5585153/pexels-photo-5585153.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
      lien: "alacarte.html#asie"
    }
  ],

  /* ──────────────────────────────────────────────────────────────────
     2. COUPS DE CŒUR (carrousel horizontal sur la page d'accueil)
     ─ Mettez ici vos recommandations du moment
     ─ badge : texte affiché sur l'image (ex: "Coup de cœur", "Plongée")
     ─ prix : "Sur demande" ou "Dès CHF 1'150 / pers."
     ────────────────────────────────────────────────────────────────── */
  coupsDeCoeur: [
    {
      id: "acores",
      pays: "Les Açores",
      titre: "Découverte des îles",
      teaser: "Paysages volcaniques, lacs de cratère et rencontres marines.",
      image: "https://images.pexels.com/photos/29141706/pexels-photo-29141706.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      badge: "Coup de cœur",
      prix: "Sur demande",
      lien: "plongee.html#atlantique"
    },
    {
      id: "laos",
      pays: "Laos",
      titre: "Au Cœur du Laos",
      teaser: "Temples millénaires, croisière sur le Mékong.",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80&fit=crop",
      badge: "Coup de cœur",
      prix: "Sur demande",
      lien: "alacarte.html#asie"
    },
    {
      id: "namibie",
      pays: "Namibie",
      titre: "Enchanteresse Namibie",
      teaser: "Dunes de Sossusvlei, faune d'Etosha.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80&fit=crop",
      badge: "Coup de cœur",
      prix: "Sur demande",
      lien: "alacarte.html#afrique"
    },
    {
      id: "egypte",
      pays: "Égypte — Mer Rouge",
      titre: "Croisière St John's",
      teaser: "Nautile Evo, Nitrox offert, récifs immaculés.",
      image: "https://images.pexels.com/photos/3100361/pexels-photo-3100361.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      badge: "Plongée",
      prix: "Dès CHF 1'150 / pers.",
      lien: "plongee.html#mer-rouge"
    },
    {
      id: "costarica",
      pays: "Costa Rica",
      titre: "Nature à l'état brut",
      teaser: "Volcans, forêts tropicales, biodiversité.",
      image: "https://images.pexels.com/photos/11181988/pexels-photo-11181988.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      badge: "Coup de cœur",
      prix: "Sur demande",
      lien: "alacarte.html#amerique"
    }
  ],

  /* ──────────────────────────────────────────────────────────────────
     3. OFFRES DU MOMENT (section "À ne pas manquer")
     ─ Mettez ici vos offres spéciales et tarifs exceptionnels
     ─ tag : étiquette colorée (ex: "Tarif exceptionnel", "Caraïbes")
     ────────────────────────────────────────────────────────────────── */
  offres: [
    {
      tag: "Tarif exceptionnel",
      titre: "Croisière St John's",
      description: "Sud Mer Rouge, Nautile Evo. Nitrox offert.",
      prix: "Dès CHF 1'150",
      prixSuffix: "/ pers.",
      image: "https://images.pexels.com/photos/3100361/pexels-photo-3100361.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      lien: "plongee.html"
    },
    {
      tag: "Requins baleines",
      titre: "À la rencontre des géants",
      description: "Nager avec les plus grands poissons du monde.",
      prix: "Sur demande",
      prixSuffix: "",
      image: "https://images.pexels.com/photos/4671472/pexels-photo-4671472.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      lien: "plongee.html"
    },
    {
      tag: "Caraïbes",
      titre: "Sous le soleil des Caraïbes",
      description: "Bonaire, Curaçao, Bahamas.",
      prix: "Sur demande",
      prixSuffix: "",
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80&fit=crop",
      lien: "plongee.html#caraibes"
    },
    {
      tag: "Méditerranée",
      titre: "Malte — Plongée",
      description: "Épaves, grottes, à 3h de Genève.",
      prix: "Sur demande",
      prixSuffix: "",
      image: "https://images.pexels.com/photos/31977873/pexels-photo-31977873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      lien: "plongee.html#mediterranee"
    }
  ]

};

/* ═══════════════════════════════════════════════════════════════════
   RENDU AUTOMATIQUE — Ne pas modifier cette partie
   ═══════════════════════════════════════════════════════════════════ */
(function() {
  'use strict';
  if (typeof window === 'undefined') return;
  window.NEOS_CONFIG = NEOS_CONFIG;

  // Helper: make elements visible right away (bypasses IntersectionObserver timing)
  function revealAll(container) {
    // 2-frame RAF ensures the DOM is painted before we add .visible
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        container.querySelectorAll('.reveal').forEach(function(el) {
          el.classList.add('visible');
          // Also register with the observer so future off-screen elements animate in
          if (window._revealObs) window._revealObs.observe(el);
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {

    // ── Render destination grid ──────────────────────────────────
    var destGrid = document.getElementById('dest-grid-dynamic');
    if (destGrid && NEOS_CONFIG.destinations) {
      destGrid.innerHTML = NEOS_CONFIG.destinations.map(function(d) {
        return '<a href="' + d.lien + '" class="dest-card" data-region="' + d.regionFilter + '">'
          + '<div class="dest-card-bg" style="background-image:url(\'' + d.image + '\');background-size:cover;background-position:center"></div>'
          + '<div class="dest-info">'
          + '<p class="dest-region">' + d.region + '</p>'
          + '<h3 class="dest-name">' + d.nom + '</h3>'
          + '<p class="dest-desc">' + d.description + '</p>'
          + '</div>'
          + '</a>';
      }).join('');

      // Show all cards immediately — no invisible state
      requestAnimationFrame(function() {
        destGrid.querySelectorAll('.dest-card').forEach(function(card, i) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.97)';
          setTimeout(function() {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 60 * i);
        });
      });
    }

    // ── Render coups de cœur ─────────────────────────────────────
    var favScroll = document.getElementById('favs-dynamic');
    if (favScroll && NEOS_CONFIG.coupsDeCoeur) {
      favScroll.innerHTML = NEOS_CONFIG.coupsDeCoeur.map(function(f) {
        var priceHtml = f.prix.indexOf('CHF') !== -1
          ? f.prix.replace('/ pers.', '') + '<small> / pers.</small>'
          : f.prix;
        return '<article class="fav-card">'
          + '<div class="fav-img">'
          + '<div class="dest-card-bg" style="background-image:url(\'' + f.image + '\');background-size:cover;background-position:center;position:absolute;inset:0"></div>'
          + '<span class="fav-badge">' + f.badge + '</span>'
          + '<button class="fav-heart" data-id="' + f.id + '" aria-label="Favoris">'
          + '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
          + '</button>'
          + '</div>'
          + '<div class="fav-body">'
          + '<p class="fav-country">' + f.pays + '</p>'
          + '<h3 class="fav-title">' + f.titre + '</h3>'
          + '<p class="fav-teaser">' + f.teaser + '</p>'
          + '<div class="fav-footer">'
          + '<span class="fav-price">' + priceHtml + '</span>'
          + '<a href="' + f.lien + '" class="exp-link" style="font-size:.72rem">Détails →</a>'
          + '</div>'
          + '</div>'
          + '</article>';
      }).join('');
      if (window._updateFavBtns) window._updateFavBtns();
    }

    // ── Render offres du moment ──────────────────────────────────
    var offresGrid = document.getElementById('offres-dynamic');
    if (offresGrid && NEOS_CONFIG.offres) {
      offresGrid.innerHTML = NEOS_CONFIG.offres.map(function(o) {
        return '<a href="' + o.lien + '" class="special-card reveal" style="text-decoration:none">'
          + '<div class="special-img">'
          + '<div class="dest-card-bg" style="background-image:url(\'' + o.image + '\');background-size:cover;background-position:center;position:absolute;inset:0"></div>'
          + '</div>'
          + '<div class="special-body">'
          + '<span class="special-tag">' + o.tag + '</span>'
          + '<h3 class="special-title">' + o.titre + '</h3>'
          + '<p class="special-desc">' + o.description + '</p>'
          + '<span class="special-price">' + o.prix + (o.prixSuffix ? ' <small>' + o.prixSuffix + '</small>' : '') + '</span>'
          + '</div>'
          + '</a>';
      }).join('');
      revealAll(offresGrid);
    }
  });

})();
