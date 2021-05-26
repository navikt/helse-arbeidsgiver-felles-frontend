import React from 'react';
import Alertstripe from 'nav-frontend-alertstriper';
import { useTranslation } from 'react-i18next';
import Side from '../Side/Side';
import { Locale } from '../../locale/Locale';

enum TilgangsfeilSideKeys {
  TILGANGSFEILSIDE_DENIED = 'TILGANGSFEILSIDE_DENIED',
  TILGANGSFEILSIDE_ERROR = 'TILGANGSFEILSIDE_ERROR',
  TILGANGSFEILSIDE_LOGIN = 'TILGANGSFEILSIDE_LOGIN'
}

export const TilgangsfeilSideLanguage: Record<TilgangsfeilSideKeys, Locale> = {
  TILGANGSFEILSIDE_DENIED: {
    nb: 'Du har ikke tilgang',
    en: 'No access'
  },
  TILGANGSFEILSIDE_ERROR: {
    nb: 'Det oppstod en feil',
    en: 'An error occurred'
  },
  TILGANGSFEILSIDE_LOGIN: {
    nb: 'Vi klarte ikke logge deg inn. Vennligst prøv igjen senere.',
    en: 'We were unable to log you in. Please try again later.'
  }
};

export const TilgangsfeilSide = () => {
  const { t } = useTranslation();
  return (
    <Side
      className='tilgangsfeil-side'
      sidetittel={t(TilgangsfeilSideKeys.TILGANGSFEILSIDE_DENIED)}
      subtitle={t(TilgangsfeilSideKeys.TILGANGSFEILSIDE_ERROR)}
      bedriftsmeny={false}
    >
      <Alertstripe type='feil'>
        {t(TilgangsfeilSideKeys.TILGANGSFEILSIDE_LOGIN)}
      </Alertstripe>
    </Side>
  );
};
