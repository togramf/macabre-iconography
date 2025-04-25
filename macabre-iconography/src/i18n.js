import { createI18n } from 'vue-i18n';

// Définition des traductions
const messages = {
  en: {
    ldgwelcome: "Welcome to my site",
    ldgdescription: "An immersive experience",
    ldgbuttonseemore: "See More",
    changeLanguage: "Change language"
  },
  es: {
    ldgwelcome: "Bienvenido a mi sitio",
    ldgdescription: "Una experiencia inmersiva",
    ldgbuttonseemore: "See More",
    changeLanguage: "Cambiar idioma"
  }
};

// Création de l'instance i18n
const i18n = createI18n({
  locale: 'en', // Langue par défaut
  fallbackLocale: 'en',
  messages
});

export default i18n;
