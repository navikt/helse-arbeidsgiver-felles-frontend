import React from 'react';
import Panel from 'nav-frontend-paneler';
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { Row, Column } from 'nav-frontend-grid';
import { useTranslation } from 'react-i18next';
import Oversettelse from '../Oversettelse/Oversettelse';
import { Locale } from '../../locale/Locale';

enum KvitteringKeys {
  TITTEL = 'KVITTERING_TITTEL',
  INFO = 'KVITTERING_INFO',
  LOGG_UT = 'KVITTERING_LOGG_UT',
  MIN_SIDE = 'KVITTERING_MIN_SIDE',
  FOOTER = 'KVITTERING_FOOTER'
}

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
    nb: '[Logg ut](https://loginservice.nav.no/slo)' +
      '[Min side arbeidsgiver](/min-side-arbeidsgiver/)',
    en: ''
  }
}

const Kvittering = () => {
  const { t } = useTranslation();
  return (
    <div className='kvittering'>
      <Row>
        <Column>
          <Panel>
            <Sidetittel>{t(KvitteringKeys.TITTEL)}</Sidetittel>
          </Panel>
        </Column>
      </Row>

      <Row>
        <Column>
          <Panel>
            <Normaltekst>
              <Oversettelse langKey={KvitteringKeys.INFO} />
            </Normaltekst>
          </Panel>
        </Column>
      </Row>

      <Row>
        <Column>
          <Panel>
            <Oversettelse langKey={KvitteringKeys.FOOTER} />
            <div>
              <Lenke href='https://loginservice.nav.no/slo'>{t(KvitteringKeys.LOGG_UT)}</Lenke>
            </div>
            <div>
              <Lenke href='/min-side-arbeidsgiver/'>{t(KvitteringKeys.MIN_SIDE)}</Lenke>
            </div>
          </Panel>
        </Column>
      </Row>
    </div>
  );
};

export default Kvittering;
