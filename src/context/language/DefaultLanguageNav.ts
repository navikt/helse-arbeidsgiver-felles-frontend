import { SupportedLanguages } from './SupportedLanguages';

const defaultLanguageNav = (lang: string): SupportedLanguages => {
    switch (lang) {
        case 'nn':
            return 'nn';
        case 'en':
            return 'en';
        case 'se':
            return 'se';
        case 'pl':
            return 'pl';
        default:
            return 'nb';
    }
};

export default defaultLanguageNav
