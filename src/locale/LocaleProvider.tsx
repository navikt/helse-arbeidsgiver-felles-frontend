import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import { useParams } from 'react-router-dom';
import Language from './Language';
import {
  setAvailableLanguages,
  setParams
} from '@navikt/nav-dekoratoren-moduler';
import { buildLocalePath } from './buildLocalePath';

export interface Resource {
  [language: string]: ResourceLanguage;
}

export interface ResourceLanguage {
  [namespace: string]: ResourceKey;
}

export type ResourceKey =
  | string
  | {
  [key: string]: any;
};

interface LocaleProviderProps {
  lang?: Language;
  resources: Resource,
  children: any;
  base: string
  path: string
}

export interface PathParams {
  language: Language;
}

export const languageInit = (lang: Language, resources: Resource) => {
  i18n.init({
    resources: resources,
    fallbackLng: Language.nb,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  });
  i18n.changeLanguage(lang);
  return i18n;
};

const LocaleProvider = ({ children, lang, resources, base, path }: LocaleProviderProps) => {
  let { language } = useParams<PathParams>();
  if (lang) {
    language = lang;
  }
  setAvailableLanguages([
    { locale: Language.nb, url: buildLocalePath(base, Language.nb, path, location.search) },
    { locale: Language.en, url: buildLocalePath(base, Language.en, path, location.search) }
  ]);
  setParams({
    language: language
  });
  languageInit(language, resources);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default LocaleProvider;
