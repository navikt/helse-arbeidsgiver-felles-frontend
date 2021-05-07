import buildResources from './BuildResources';

const languageInit = (i18n, lang: string, defaultLanguage: string, languages: Array<string>, languages2: Record<string, Record<string, string>>) => {
    i18n.init({
        resources: buildResources(lang, languages, languages2),
        fallbackLng: defaultLanguage,
        ns: ['translation'],
        defaultNS: 'translation',
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

export default languageInit
