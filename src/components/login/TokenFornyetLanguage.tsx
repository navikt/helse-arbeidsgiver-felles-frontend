import { TokenFornyetKeys } from './TokenFornyetKeys';
import { Locale } from '../../locale/Locale';

export const TokenFornyetLanguage: Record<TokenFornyetKeys, Locale> = {
  TILGANGSFEILSIDE_RENEWED: {
    nb: 'Innloggingen er fornyet',
    en: 'Login renewed'
  },
  TILGANGSFEILSIDE_INFO: {
    nb:
      'Du har nå fornyet innloggingen med en time.\n' +
      'Dette vinduet kan nå lukkes.',
    en:
      'You have now renewed your login by one hour.\n' +
      'This window can now be closed.'
  },
  TILGANGSFEILSIDE_FORNYET: {
    nb: 'Token er fornyet',
    en: 'Token is renewed'
  },
  TILGANGSFEILSIDE_LOGIN: {
    nb: 'Innlogging',
    en: 'Login'
  }
};
