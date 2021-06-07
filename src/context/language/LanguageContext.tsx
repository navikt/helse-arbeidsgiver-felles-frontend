import React, { createContext, useContext, useState } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import {
  setAvailableLanguages,
  onLanguageSelect
} from '@navikt/nav-dekoratoren-moduler';
import Language from '../../locale/Language';
import buildResources from '../../locale/buildResources';
import Locale from '../../locale/Locale';

export interface LanguageParams {
  language: Language;
}

interface LanguageContextInterface {
  language: string;
  i18n: any;
}

const LanguageContext = createContext({
  language: ''
} as LanguageContextInterface);

interface LanguageContextProviderProps {
  children: any;
  defaultLanguage: 'nb' | 'nn' | 'en' | 'se' | 'pl';
  languages: Array<string>;
  i18n: any;
  bundle: Record<string, Locale>;
}

const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = (props: LanguageContextProviderProps) => {
  const href = window.location.pathname;
  const lang = href.indexOf('/en/') > -1 ? 'en' : 'nb';
  const i18n = props.i18n;
  const [language, setLanguage] = useState<string>(lang);
  i18n
    .use(initReactI18next)
    .init({
      resources: buildResources(props.bundle),
      lng: 'nb',
      react: {
        wait: true,
      }
    });
  setAvailableLanguages(
    props.languages.map((l) => ({
      locale: l,
      url: '/' + l + '/',
      handleInApp: true
    }))
  );
  onLanguageSelect((language) => {
    i18n.changeLanguage(language.locale);
    const href = window.location.pathname;
    window.history.pushState({}, 'Title', translateUrl(href, language.locale) + window.location.search);
  })
  i18n.changeLanguage(lang);
  return (
    <LanguageContext.Provider value={{ language, i18n }}>
      <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
    </LanguageContext.Provider>
  );
};

export const translateUrl = (href: string, locale: string) => {
  const lang = href.indexOf('/en/') > -1 ? 'en' : 'nb';
  return href.replace('/' + lang + '/', '/' + locale + '/')
}

export { useLanguage, LanguageProvider };
