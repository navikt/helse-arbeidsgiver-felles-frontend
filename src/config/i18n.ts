import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'KVITTERING_TITTEL': 'Kvittering...'
    }
  },
  nb: {
    translation: {
      'KVITTERING_TITTEL': 'Receipt...'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'nb',
    react: {
      wait: true,
    }
  });

export default i18n;
