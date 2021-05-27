import { Locale } from "../locale/Locale";

const LanguageBundle: Record<string, any> = {
  en: {
    translation: {
      BEKREFTOPPLYSNINGER_BEKREFT_LABEL: 'I confirm that...',
      BEKREFTOPPLYSNINGER_BEKREFT_OPPLYSNINGER: 'Information'
    }
  },
  nb: {
    translation: {
      BEKREFTOPPLYSNINGER_BEKREFT_LABEL: 'Jeg bekrefter...',
      BEKREFTOPPLYSNINGER_BEKREFT_OPPLYSNINGER: 'Opplysninger'
    }
  }
}

const original: Record<string, Locale> = {
  BEKREFTOPPLYSNINGER_BEKREFT_LABEL: {
    en: 'Label',
    nb: 'Felt'
  },
  BEKREFTOPPLYSNINGER_BEKREFT_OPPLYSNINGER: {
    en: 'Information',
    nb: 'Opplysninger'
  }
};

export default LanguageBundle
