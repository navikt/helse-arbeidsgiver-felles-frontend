import React from 'react';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';
import { Container, Row } from 'nav-frontend-grid';
import { useTranslation } from 'react-i18next';
import Side from '../Side/Side';
import { Locale } from '../../locale/Locale';

enum TilgangsfeilSideKeys {
  TILGANGSFEILSIDE_RENEWED = 'TILGANGSFEILSIDE_RENEWED',
  TILGANGSFEILSIDE_INFO = 'TILGANGSFEILSIDE_INFO',
  TILGANGSFEILSIDE_FORNYET = 'TILGANGSFEILSIDE_FORNYET',
  TILGANGSFEILSIDE_LOGIN = 'TILGANGSFEILSIDE_LOGIN'
}

export const TilgangsfeilSideLanguage: Record<TilgangsfeilSideKeys, Locale> = {
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

export const TokenFornyet = () => {
  const { t } = useTranslation();
  return (
    <Side
      bedriftsmeny={false}
      sidetittel={t(TilgangsfeilSideKeys.TILGANGSFEILSIDE_FORNYET)}
      title={t(TilgangsfeilSideKeys.TILGANGSFEILSIDE_RENEWED)}
      subtitle={t(TilgangsfeilSideKeys.TILGANGSFEILSIDE_LOGIN)}
    >
      <Container className={'side__innhold'}>
        <Row>
          <Panel>
            <Innholdstittel>
              {t(TilgangsfeilSideKeys.TILGANGSFEILSIDE_RENEWED)}
            </Innholdstittel>
          </Panel>
          <Panel>
            <Normaltekst>
              {t(TilgangsfeilSideKeys.TILGANGSFEILSIDE_INFO)}
            </Normaltekst>
          </Panel>
        </Row>
      </Container>
    </Side>
  );
};

export default TokenFornyet;
