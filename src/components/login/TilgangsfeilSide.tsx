import React from 'react';
import Alertstripe from 'nav-frontend-alertstriper';
import { useTranslation } from 'react-i18next';
import Side from '../Side/Side';
import { Locale } from '../../locale/Locale';

enum TilgangsfeilSideKeys {
  TILGANGSFEILSIDE = 'TILGANGSFEILSIDE',
  ERROR_GENERIC = 'ERROR_GENERIC',
  ERROR_LOGIN = 'ERROR_LOGIN'
}

export const TilgangsfeilSideLanguage: Record<TilgangsfeilSideKeys, Locale> = {
  TILGANGSFEILSIDE: {
    nb: 'Du har ikke tilgang',
    en: 'No access'
  },
  ERROR_GENERIC: {
    nb: 'Det oppstod en feil',
    en: 'An error occurred'
  },

  ERROR_LOGIN: {
    nb: 'Vi klarte ikke logge deg inn. Vennligst prøv igjen senere.',
    en: 'We were unable to log you in. Please try again later.'
  }
};

export const TilgangsfeilSide = () => {
  const { t } = useTranslation();
  return (
    <Side
      className='tilgangsfeil-side'
      sidetittel={t(TilgangsfeilSideKeys.TILGANGSFEILSIDE)}
      subtitle={t(TilgangsfeilSideKeys.ERROR_GENERIC)}
      bedriftsmeny={false}
    >
      <Alertstripe type='feil'>
        {t(TilgangsfeilSideKeys.ERROR_LOGIN)}
      </Alertstripe>
    </Side>
  );
};
