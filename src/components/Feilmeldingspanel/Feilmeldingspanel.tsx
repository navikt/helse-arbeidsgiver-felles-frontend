import Panel from 'nav-frontend-paneler';
import { Feiloppsummering, FeiloppsummeringFeil } from 'nav-frontend-skjema';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../locale/Locale';

interface FeilmeldingspanelProps {
  feilmeldinger: Array<FeiloppsummeringFeil>;
}

enum FeilmeldingspanelKeys {
  FEILMELDINGSPANEL = 'FEILMELDINGSPANEL'
}

export const FeilmeldingspanelLanguage: Record<FeilmeldingspanelKeys, Locale> =
  {
    FEILMELDINGSPANEL: {
      nb: 'For å gå videre må du rette opp følgende:',
      en: 'To proceed, you must correct the following:'
    }
  };

const Feilmeldingspanel = (props: FeilmeldingspanelProps) => {
  const { t } = useTranslation();
  if (props.feilmeldinger && props.feilmeldinger.length > 0) {
    return (
      <Panel>
        <Feiloppsummering
          tittel={t(FeilmeldingspanelKeys.FEILMELDINGSPANEL)}
          feil={props.feilmeldinger}
        />
      </Panel>
    );
  } else {
    return null;
  }
};

export default Feilmeldingspanel;
