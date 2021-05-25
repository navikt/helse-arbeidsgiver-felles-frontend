import React from 'react';
import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import { Link, useHistory } from 'react-router-dom';
import Bedriftsmeny from '@navikt/bedriftsmeny';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import { History } from 'history';
import { Column, Container, Row } from 'nav-frontend-grid';
import Lenke from 'nav-frontend-lenker';
import './InnloggetSide.css';
import { useEnvironment } from '../../index';
import { useArbeidsgiver } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import { useTranslation } from "react-i18next";
import Oversettelse from "../Oversettelse/Oversettelse";
import { Locale } from "../../locale/Locale";

interface SideProps {
  children: React.ReactNode,
  className?: string
}

enum InnloggetSideKeys {
  UTEN_RETTIGHETER= 'INNLOGGET_SIDE_UTEN_RETTIGHETER',
  MIN_SIDE= 'INNLOGGET_SIDE_MIN_SIDE'
}

export const InnloggetSideLanguage: Record<InnloggetSideKeys, Locale> = {
  INNLOGGET_SIDE_UTEN_RETTIGHETER: {
    nb: 'Du har ikke rettigheter til å søke om refusjon for noen bedrifter.' +
      'Tildeling av roller foregår i Altinn.' +
      '[Les mer om roller og tilganger.](/min-side-arbeidsgiver/informasjon-om-tilgangsstyring)',
    en: 'Entry ban - reimbursement for compensation'
  },
  INNLOGGET_SIDE_MIN_SIDE: {
    nb: 'Min side arbeidsgiver',
    en: 'My page employer'
  }
}

const InnloggetSide = (props: SideProps) => {
  const { t } = useTranslation();
  const { sideTittel } = useEnvironment();
  const { arbeidsgivere, setArbeidsgiverId, setFirma } = useArbeidsgiver();
  const history: History = useHistory();
  return (
    <main className={'innloggetside ' + props.className}>
        {arbeidsgivere.length === 0 &&
          <AlertStripeAdvarsel>
            <Oversettelse langKey={InnloggetSideKeys.UTEN_RETTIGHETER}/>

            <p>Du har ikke rettigheter til å søke om refusjon for noen bedrifter</p>
            <p>Tildeling av roller foregår i Altinn</p>
            <Link to="/min-side-arbeidsgiver/informasjon-om-tilgangsstyring">
              Les mer om roller og tilganger.
            </Link>
          </AlertStripeAdvarsel>
        }
        {arbeidsgivere.length > 0 &&
          <>
            <Bedriftsmeny
              history={history}
              onOrganisasjonChange={(org: Organisasjon) => {
                setArbeidsgiverId(org.OrganizationNumber);
                setFirma(org.Name);
              }}
              sidetittel={sideTittel}
              organisasjoner={arbeidsgivere}
            />

            <Container>
              <Row>
                <Column>
                  <div className={'innloggetside__minside_arbeidsgiver'}>
                    <Lenke href="/min-side-arbeidsgiver/">&lt;&lt; {t(InnloggetSideKeys.MIN_SIDE)}</Lenke>
                  </div>
                </Column>
              </Row>
            </Container>

            <Container className={'innloggetside__innhold'}>
                { props.children }
            </Container>

          </>
        }
    </main>
  )
}

export default InnloggetSide
