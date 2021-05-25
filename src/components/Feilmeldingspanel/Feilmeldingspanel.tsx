import Panel from 'nav-frontend-paneler';
import { Feiloppsummering, FeiloppsummeringFeil } from 'nav-frontend-skjema';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface FeilmeldingspanelProps {
  feilmeldinger: Array<FeiloppsummeringFeil>;
}

const Feilmeldingspanel = (props: FeilmeldingspanelProps) => {
  const { t } = useTranslation();
  if (props.feilmeldinger && props.feilmeldinger.length > 0) {
    return (
      <Panel>
        <Feiloppsummering tittel={t('FEILMELDINGSPANEL')} feil={props.feilmeldinger} />
      </Panel>
    );
  } else {
    return null;
  }
};

export default Feilmeldingspanel;
