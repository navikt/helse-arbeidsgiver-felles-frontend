import React, { createContext, useContext, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { setAvailableLanguages, setParams } from '@navikt/nav-dekoratoren-moduler';
import languageInit from './LanguageInit';
import defaultLanguageNav from './DefaultLanguageNav';

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
  useParams: any;
  i18n: any;
  bundle: Record<string, Record<string, string>>;
}

const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = (props: LanguageContextProviderProps) => {
  let lang = '';
  {
    const { language } = props.useParams();
    lang = language;
  }
  const i18n = props.i18n;
  const [language, setLanguage] = useState<string>(lang);
  setAvailableLanguages(props.languages.map((l) => ({ locale: l, url: '/' + l, handleInApp: false })));
  setParams({
    language: defaultLanguageNav(lang)
  });
  languageInit(i18n, lang, props.defaultLanguage, props.languages, props.bundle);
  return (
    <LanguageContext.Provider value={{ language, i18n }}>
      <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
    </LanguageContext.Provider>
  );
};

export { useLanguage, LanguageProvider };
