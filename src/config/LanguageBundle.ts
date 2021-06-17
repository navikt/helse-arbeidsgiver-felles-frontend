import { Locale } from '../locale/Locale';

export const bundle: Record<string, Locale> = {
  KVITTERING_TITTEL: {
    nb: 'Norsk',
    en: 'Engelsk'
  },
  KVITTERING_INFO: {
    nb: 'Litt infor',
    en: 'Some info'
  },
  SIDE_MIN_SIDE_ARBEIDSGIVER: {
    en: 'My page',
    nb: 'Min side arbeidsgiver'
  },
  BEKREFTOPPLYSNINGER_BEKREFT_LABEL: {
    en: 'I confirm that...',
    nb: 'Jeg bekrefter...'
  },
  BEKREFTOPPLYSNINGER_BEKREFT_OPPLYSNINGER: {
    en: 'Information',
    nb: 'Opplysninger'
  },
  FEILMELDINGSPANEL: {
    nb: 'For å gå videre må du rette opp følgende:',
    en: 'To proceed, you must correct the following:'
  },
  SERVER_FEIL_ADVARSEL_TEXT: {
    nb:
      '_Det har desverre oppstått en teknisk feil hos oss_\n\n' +
      'Prøv igjen litt senere, og [kontakt oss gjerne dersom det ikke ordner seg.](https://arbeidsgiver.nav.no/kontakt-oss/)',
    en:
      '_Unfortunately, a technical error has occurred_\n\n' +
      'Please try again later and [feel free to contact us if it does not work out.](https://arbeidsgiver.nav.no/kontakt-oss/)'
  },
  SERVER_FEIL_ADVARSEL_HIDE: {
    nb: 'Skjul denne meldingen.',
    en: 'Hide this message.'
  }
};

export default bundle;
