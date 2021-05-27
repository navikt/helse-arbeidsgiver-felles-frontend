import { Locale } from "../locale/Locale";
import { buildBundle } from "../locale/buildBundle";



export const bundle: Record<string, Locale> = {
  SIDE_MIN_SIDE_ARBEIDSGIVER: {
    en: 'My page',
    nb: 'Min side arbeidsgiver',
  },
  BEKREFTOPPLYSNINGER_BEKREFT_LABEL: {
    en: 'I confirm that...',
    nb: 'Jeg bekrefter...'
  },
  BEKREFTOPPLYSNINGER_BEKREFT_OPPLYSNINGER: {
    en: 'Information',
    nb: 'Opplysninger'
  }
};

export default buildBundle(bundle)
