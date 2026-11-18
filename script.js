document.addEventListener('DOMContentLoaded', () => {
  // 1. Set current copyright year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Download vCard (.vcf) matching his business card
  function downloadVCard() {
    const vcardLines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Tomsej;Xavier;;;',
      'FN:Xavier Tomsej',
      'ORG:Gallium Global',
      'TITLE:Global Health Supply Chain Lead',
      'TEL;TYPE=WORK,VOICE:+1-301-979-0678',
      'EMAIL;TYPE=PREF,INTERNET:xmtoms@gmail.com',
      'NOTE:Advancing Pharmaceutical Value Chains',
      'END:VCARD'
    ].join('\n');

    const blob = new Blob([vcardLines], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Xavier_Tomsej_Gallium_Global.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const vcardBtnTop = document.getElementById('vcardBtnTop');
  const vcardBtnHero = document.getElementById('vcardBtnHero');
  if (vcardBtnTop) vcardBtnTop.addEventListener('click', downloadVCard);
  if (vcardBtnHero) vcardBtnHero.addEventListener('click', downloadVCard);

  // 3. Bilingual EN / FR Switcher
  const frTranslations = {
    nav_about: 'Parcours',
    nav_focus: 'Domaines',
    nav_publications: 'Conférences & Publications',
    nav_contact: 'Contact',
    btn_vcard: 'Enregistrer',
    hero_tagline: 'Faire Progresser les Chaînes de Valeur Pharmaceutiques',
    hero_role: "Responsable Chaîne d'Approvisionnement Santé Mondiale • Gallium Global",
    hero_summary:
      "Spécialiste international des chaînes d'approvisionnement en santé publique, engagé dans le renforcement des chaînes de valeur pharmaceutiques, la lutte contre les médicaments falsifiés et l'amélioration de la disponibilité des produits de santé.",
    hero_cta_primary: 'Envoyer un Message',
    hero_cta_secondary: 'Télécharger la Carte (.vcf)',
    card_title: "Responsable Chaîne d'Approvisionnement Santé Mondiale",
    strip_label: 'Expérience Documentée & Forums Internationaux',
    about_kicker: 'Synthèse de Carrière',
    about_heading: "Leadership en Chaînes d'Approvisionnement de Santé Publique",
    fact_1:
      "Gallium Global : Occupe actuellement le poste de Global Health Supply Chain Lead pour faire progresser les chaînes de valeur pharmaceutiques.",
    fact_2:
      "Leadership à l'USAID : A exercé à l'Agence des États-Unis pour le développement international (USAID) à Washington, D.C., en tant que Supply Chain Lead au sein du Bureau de la Santé Mondiale.",
    fact_3:
      "Supervision de Programmes : A servi en tant que Contracting Officer's Representative (COR) pour le programme phare USAID GHSC-PSM.",
    about_p1:
      "Xavier Tomsej possède une solide expérience dans la logistique internationale de santé publique, la gestion des approvisionnements pharmaceutiques et le renforcement des systèmes de santé à travers Gallium Global.",
    about_p2:
      "Au cours de son parcours à l'USAID, il a assuré un leadership technique et programmatique sur la modélisation des réseaux nationaux d'approvisionnement et l'optimisation de la distribution des produits de santé.",
    about_p3:
      "Il a également contribué aux dialogues internationaux sur la coopération entre autorités de réglementation pharmaceutique et forces de l'ordre contre les médicaments falsifiés, ainsi que sur le financement direct des établissements de santé.",
    focus_kicker: "Domaines d'Expertise",
    focus_heading: 'Axes Principaux',
    focus_1_title: 'Chaînes de Valeur Pharmaceutiques & Modélisation',
    focus_1_desc:
      "Modélisation, simulation et optimisation des réseaux d'approvisionnement afin d'améliorer la disponibilité des médicaments.",
    focus_2_title: 'Lutte Contre les Médicaments Falsifiés',
    focus_2_desc:
      "Renforcement de la coordination entre les régulateurs pharmaceutiques et les organismes d'application de la loi.",
    focus_3_title: 'Financement des Établissements & Disponibilité',
    focus_3_desc:
      "Analyse des liens entre le financement direct des formations sanitaires et la disponibilité des produits de santé essentiels.",
    focus_4_title: 'Vaccination & Logistique Innovante',
    focus_4_desc:
      "Contribution aux visions à long terme des systèmes d'approvisionnement vaccinal et aux solutions logistiques pour les zones isolées.",
    pub_kicker: 'Publications & Interventions',
    pub_heading: 'Forums, Panels et Publications Sélectionnés',
    contact_kicker: 'Correspondance',
    contact_heading: 'Contacter Xavier Tomsej',
    contact_desc:
      'Pour toute demande professionnelle concernant les chaînes de valeur pharmaceutiques ou une invitation à intervenir, veuillez utiliser les coordonnées ci-dessous ou le formulaire.',
    form_name: 'Nom Complet *',
    form_org: 'Organisation / Institution',
    form_email: 'Adresse E-mail *',
    form_msg: 'Message *',
    form_submit: 'Envoyer le Message'
  };

  // Save original English text so toggling back is exact
  const enTranslations = {};
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    enTranslations[key] = el.innerHTML;
  });

  let currentLang = 'en';
  const langToggle = document.getElementById('langToggle');

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'fr' : 'en';
      langToggle.textContent = currentLang === 'en' ? 'FR' : 'EN';
      document.documentElement.lang = currentLang;

      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (currentLang === 'fr' && frTranslations[key]) {
          el.textContent = frTranslations[key];
        } else if (enTranslations[key]) {
          el.innerHTML = enTranslations[key];
        }
      });
    });
  }
});