import React from 'react';
import { useHistory } from 'react-router-dom';
import Bedriftsmeny from '@navikt/bedriftsmeny';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import { History } from 'history';
import { Column, Container, Row } from 'nav-frontend-grid';
import Lenke from 'nav-frontend-lenker';
import './InnloggetSide.css';
import { useArbeidsgiver } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../locale/Locale';
import { IngenTilgangAdvarsel } from '../login/IngenTilgangAdvarsel';

interface SideProps {
  children: React.ReactNode;
  className?: string;
  sideTittel: string;
}

enum InnloggetSideKeys {
  MIN_SIDE = 'INNLOGGET_SIDE_MIN_SIDE'
}

export const InnloggetSideLanguage: Record<InnloggetSideKeys, Locale> = {
  INNLOGGET_SIDE_MIN_SIDE: {
    nb: 'Min side arbeidsgiver',
    en: 'My page employer'
  }
};

const InnloggetSide = (props: SideProps) => {
  const { t } = useTranslation();
  const { arbeidsgivere, setArbeidsgiverId, setFirma } = useArbeidsgiver();
  const history: History = useHistory();
  return (
    <main className={'innloggetside ' + props.className}>
      {arbeidsgivere.length === 0 && <IngenTilgangAdvarsel />}
      {arbeidsgivere.length > 0 && (
        <>
          <Bedriftsmeny
            history={history}
            onOrganisasjonChange={(org: Organisasjon) => {
              setArbeidsgiverId(org.OrganizationNumber);
              setFirma(org.Name);
            }}
            sidetittel={props.sideTittel}
            organisasjoner={arbeidsgivere}
          />

          <Container>
            <Row>
              <Column>
                <div className={'innloggetside__minside_arbeidsgiver'}>
                  <Lenke href='/min-side-arbeidsgiver/'>
                    &lt;&lt; {t(InnloggetSideKeys.MIN_SIDE)}
                  </Lenke>
                </div>
              </Column>
            </Row>
          </Container>

          <Container className={'innloggetside__innhold'}>
            {props.children}
          </Container>
        </>
      )}
    </main>
  );
};

export default InnloggetSide;
