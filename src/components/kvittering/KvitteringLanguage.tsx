import { KvitteringKeys } from './KvitteringKeys';
import { Locale } from '../../locale/Locale';

export const KvitteringLanguage: Record<KvitteringKeys, Locale> = {
  KVITTERING_TITTEL: {
    nb: 'Refusjon for kompensasjon ved innreiseforbud',
    en: 'Entry ban - reimbursement for compensation'
  },
  KVITTERING_INFO: {
    nb: 'Kravet er mottatt',
    en: 'The claim has been received'
  },
  KVITTERING_LOGG_UT: {
    nb: 'Logg ut',
    en: 'Logout'
  },
  KVITTERING_MIN_SIDE: {
    nb: 'Min side arbeidsgiver',
    en: 'My page employer'
  },
  KVITTERING_FOOTER: {
    nb:
      '[Logg ut](https://loginservice.nav.no/slo)' +
      '[Min side arbeidsgiver](/min-side-arbeidsgiver/)',
    en: ''
  }
};
