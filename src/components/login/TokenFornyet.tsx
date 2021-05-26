import React from 'react';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';
import { Container, Row } from 'nav-frontend-grid';
import { useTranslation } from 'react-i18next';
import Side from '../Side/Side';
import { Locale } from '../../locale/Locale';

enum TilgangsfeilSideKeys {
  LOGIN_RENEWED = 'LOGIN_RENEWED',
  LOGIN_RENEWED_INFO = 'LOGIN_RENEWED_INFO',
  TOKEN_FORNYET = 'TOKEN_FORNYET',
  LOGIN = 'LOGIN'
}

export const TilgangsfeilSideLanguage: Record<TilgangsfeilSideKeys, Locale> = {
  LOGIN_RENEWED: {
    nb: 'Innloggingen er fornyet',
    en: 'Login renewed'
  },

  LOGIN_RENEWED_INFO: {
    nb:
      'Du har nå fornyet innloggingen med en time.\n' +
      'Dette vinduet kan nå lukkes.',
    en:
      'You have now renewed your login by one hour.\n' +
      'This window can now be closed.'
  },
  TOKEN_FORNYET: {
    nb: 'Token er fornyet',
    en: 'Token is renewed'
  },
  LOGIN: {
    nb: 'Innlogging',
    en: 'Login'
  }
};

export const TokenFornyet = () => {
  const { t } = useTranslation();
  return (
    <Side
      bedriftsmeny={false}
      sidetittel={t(TilgangsfeilSideKeys.TOKEN_FORNYET)}
      title={t(TilgangsfeilSideKeys.LOGIN_RENEWED)}
      subtitle={t(TilgangsfeilSideKeys.LOGIN)}
    >
      <Container className={'side__innhold'}>
        <Row>
          <Panel>
            <Innholdstittel>
              {t(TilgangsfeilSideKeys.LOGIN_RENEWED)}
            </Innholdstittel>
          </Panel>
          <Panel>
            <Normaltekst>
              {t(TilgangsfeilSideKeys.LOGIN_RENEWED_INFO)}
            </Normaltekst>
          </Panel>
        </Row>
      </Container>
    </Side>
  );
};

export default TokenFornyet;
