const languageInit = (i18n: any, lang: string, defaultLanguage: string, bundle: Record<string, Record<string, string>>) => {
    i18n.init({
        resources: bundle,
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
