# 🍺 Muse Bar - Site Web Officiel

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://musebar.fr)

Site web pour le **Muse Bar**, un établissement de restauration d'exception situé au cœur de Rouen. Découvrez une expérience culinaire unique avec nos planches à partager, cocktails originaux et cave privatisable.

**Version actuelle : 1.0.0** - Site complet et fonctionnel

## 📁 Structure du Projet

```
MuseBar/
├── 📄 index.html              # Page principale (753 lignes)
├── 📁 css/
│   └── 🎨 style.css           # Styles CSS optimisés (2017 lignes)
├── 📁 js/
│   └── ⚡ script.js           # JavaScript principal (374 lignes)
├── 📁 images/                 # Assets visuels
│   ├── 🍺 bière.png           # Favicon du site
│   ├── 🏠 bar-interior.png    # Photo intérieur
│   ├── 🏰 cave.png            # Photo cave
│   ├── 🏰 cave-privatisation.jpg
│   ├── 🌳 dehors.png          # Photo extérieur
│   ├── 🎨 logo.svg            # Logo principal
│   ├── 🎭 muse.svg            # Logo Muse
│   ├── 🍊 orange.svg          # Icône orange
│   └── 🌿 terrasse.png        # Photo terrasse
├── ⚙️ config.js               # Configuration principale (141 lignes)
├── 🍽️ menu-config.js          # Configuration du menu (252 lignes)
└── 📖 README.md               # Documentation complète
```

## 🎨 Design System

### **Palette de Couleurs**

```css
:root {
  --primary-color: #f0775a; /* Orange signature */
  --secondary-color: #0b1a39; /* Bleu sophistiqué */
  --accent-color: #ebe7ca; /* Beige élégant */
  --text-color: #000000; /* Texte principal */
  --light-text: #333333; /* Texte secondaire */
  --background: #ffffff; /* Fond principal */
  --dark-bg: #0b1a39; /* Fond sombre */
  --border-color: #ebe7ca; /* Bordures */
  --shadow: rgba(11, 26, 57, 0.1); /* Ombres */
}
```

## 🎨 Typographie

### **Polices Principales**

- **Playfair Display**

- **Poppins**

- **Funnel Display**

### **Breakpoints Responsive**

```css
/* Desktop Large */
@media (min-width: 1200px) {
  /* ... */
}

/* Desktop Standard */
@media (max-width: 1199px) {
  /* ... */
}

/* Tablette */
@media (max-width: 991px) {
  /* ... */
}

/* Mobile Large */
@media (max-width: 767px) {
  /* ... */
}

/* Mobile Standard */
@media (max-width: 575px) {
  /* ... */
}

/* Mobile Petit */
@media (max-width: 479px) {
  /* ... */
}
```

## 🔧 Configuration

### **Fichier Principal (`config.js`)**

```javascript
const SITE_CONFIG = {
  site: {
    name: "Muse",
    tagline: "Bar et cuisine à partager",
    version: "2.0.0",
  },
  contact: {
    address: "4 impasse des Hauts Mariages",
    city: "76000 Rouen, France",
    hours: {
      /* Horaires d'ouverture */
    },
  },
  social: {
    instagram: "https://www.instagram.com/muse_bar_rouen/",
  },
};
```

### **Configuration du Menu (`menu-config.js`)**

```javascript
const MENU_CONFIG = {
  categories: [
    {
      id: "grignotages",
      name: "Grignotages",
      items: [
        /* Items du menu */
      ],
    },
    // ... autres catégories
  ],
};
```

## 🚀 Installation & Déploiement

### **Prérequis**

- Navigateur moderne (Chrome 90+, Firefox 88+, Safari 14+)
- Serveur web (Apache, Nginx, ou serveur local)

### **Installation Locale**

```bash
# Ouvrir le projet dans un navigateur
# ou utiliser un serveur local
python -m http.server 8000
# ou
npx serve .
```

## 📱 Compatibilité

### **Navigateurs Supportés**

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Mobile Safari** iOS 14+
- ✅ **Chrome Mobile** Android 8+

### **Appareils Testés**

- 📱 **Mobile** : iPhone, Android (portrait et paysage)
- 📱 **Tablette** : iPad, Android (portrait et paysage)
- 💻 **Desktop** : Windows, macOS, Linux
- 🖥️ **Écrans** : 320px à 4K+

## 🔍 Maintenance

### **Mises à Jour Régulières**

- **Images** : Remplacer les photos temporaires
- **Contenu** : Mettre à jour le menu et horaires
- **Configuration** : Ajuster les paramètres

## 📞 Contact

### **Muse Bar**

- **📍 Adresse** : 4 impasse des Hauts Mariages, 76000 Rouen
- **📱 Instagram** : [@muse_bar_rouen](https://www.instagram.com/muse_bar_rouen/)
- **🌐 Site** : [musebar.fr](https://musebar.fr)

---

---

**Développé avec pour le Muse Bar**

_© 2025 Muse Bar. Tous droits réservés._
