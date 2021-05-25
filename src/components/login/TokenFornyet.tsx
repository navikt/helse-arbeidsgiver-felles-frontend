import React from 'react';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';
import { Container, Row } from 'nav-frontend-grid';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locale/LangKey';
import Side from '../Side/Side';

const TOKEN_FORNYET_RENEWED = 'LOGIN_RENEWED'
const TOKEN_FORNYET_RENEWED_INFO = 'LOGIN_RENEWED_INFO'

export const TokenFornyet = () => {
  const { t } = useTranslation();
  return (
    <Side
      bedriftsmeny={false}
      sidetittel={t(LangKey.TOKEN_FORNYET)}
      title={t(LangKey.LOGIN_RENEWED)}
      subtitle={t(LangKey.LOGIN)}
    >
      <Container className={'side__innhold'}>
        <Row>
          <Panel>
            <Innholdstittel>{t(TOKEN_FORNYET_RENEWED)}</Innholdstittel>
          </Panel>
          <Panel>
            <Normaltekst>{t(TOKEN_FORNYET_RENEWED_INFO)}</Normaltekst>
          </Panel>
        </Row>
      </Container>
    </Side>
  );
};

export default TokenFornyet;
