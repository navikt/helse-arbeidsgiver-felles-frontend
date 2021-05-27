import { Locale } from './Locale';

export interface Translation {
  translation: Record<string, any>
}

const buildLanguage = (lang: string, bundle: Record<string, any>) => {
  const values = {}
  const keys = Object.keys(bundle);
  keys.forEach(k => {
    values[ k ] = bundle[ k ][ lang ];
  })
  return values;
}

export const buildBundle = (bundle: Record<string, Locale>) : Record<string, Translation> => {
  return {
    en: {
      translation: buildLanguage('en', bundle)
    },
    nb: {
      translation: buildLanguage('nb', bundle)
    }
  };
};
