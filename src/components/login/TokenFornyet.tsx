import React from 'react';
import { Innholdstittel, Normaltekst } from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';
import { Container, Row } from 'nav-frontend-grid';
import { useTranslation } from 'react-i18next';
import Side from '../Side/Side';
import { TokenFornyetKeys } from './TokenFornyetKeys';

export const TokenFornyet = () => {
  const { t } = useTranslation();
  return (
    <Side
      bedriftsmeny={false}
      sidetittel={t(TokenFornyetKeys.TILGANGSFEILSIDE_FORNYET)}
      title={t(TokenFornyetKeys.TILGANGSFEILSIDE_RENEWED)}
      subtitle={t(TokenFornyetKeys.TILGANGSFEILSIDE_LOGIN)}
    >
      <Container className={'side__innhold'}>
        <Row>
          <Panel>
            <Innholdstittel>
              {t(TokenFornyetKeys.TILGANGSFEILSIDE_RENEWED)}
            </Innholdstittel>
          </Panel>
          <Panel>
            <Normaltekst>
              {t(TokenFornyetKeys.TILGANGSFEILSIDE_INFO)}
            </Normaltekst>
          </Panel>
        </Row>
      </Container>
    </Side>
  );
};

export default TokenFornyet;
