import Panel from 'nav-frontend-paneler';
import { BekreftCheckboksPanel, SkjemaGruppe } from 'nav-frontend-skjema';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Oversettelse from '../Oversettelse/Oversettelse';
import { BekreftOpplysningerKeys } from './BekreftOpplysningerKeys';

interface BekreftOpplysningerPanelProps {
  checked: boolean;
  onChange: () => void;
  feil?: string;
  labelKey?: string;
  textKey?: string;
}

const BekreftOpplysningerPanel = ({
  checked,
  onChange,
  feil,
  labelKey = BekreftOpplysningerKeys.LABEL,
  textKey = BekreftOpplysningerKeys.OPPLYSNINGER
}: BekreftOpplysningerPanelProps) => {
  const { t } = useTranslation();

  return (
    <Panel className='bekreft-opplysninger-panel'>
      <SkjemaGruppe feilmeldingId='bekreftFeilmeldingId'>
        <BekreftCheckboksPanel
          label={t(labelKey)}
          checked={checked}
          feil={feil}
          onChange={onChange}
        >
          <Oversettelse langKey={textKey} />
        </BekreftCheckboksPanel>
      </SkjemaGruppe>
    </Panel>
  );
};

export default BekreftOpplysningerPanel;
