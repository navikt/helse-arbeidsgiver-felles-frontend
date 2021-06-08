import React from 'react';
import Panel from 'nav-frontend-paneler';
import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { Column, Row } from 'nav-frontend-grid';
import { useTranslation } from 'react-i18next';
import Oversettelse from '../Oversettelse/Oversettelse';
import { KvitteringKeys } from './KvitteringKeys';

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
              <Lenke href='https://loginservice.nav.no/slo'>
                {t(KvitteringKeys.LOGG_UT)}
              </Lenke>
            </div>
            <div>
              <Lenke href='/min-side-arbeidsgiver/'>
                {t(KvitteringKeys.MIN_SIDE)}
              </Lenke>
            </div>
          </Panel>
        </Column>
      </Row>
    </div>
  );
};

export default Kvittering;
