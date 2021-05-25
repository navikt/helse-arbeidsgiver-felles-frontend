import React from 'react';
import Alertstripe from 'nav-frontend-alertstriper';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locale/LangKey';
import Side from '../Side/Side';

export const TilgangsfeilSide = () => {
  const { t } = useTranslation();
  return (
    <Side
      className='tilgangsfeil-side'
      sidetittel={t(LangKey.TILGANGSFEILSIDE)}
      subtitle={t(LangKey.ERROR_GENERIC)}
      bedriftsmeny={false}
    >
      <Alertstripe type='feil'>{t(LangKey.ERROR_LOGIN)}</Alertstripe>
    </Side>
  );
};
