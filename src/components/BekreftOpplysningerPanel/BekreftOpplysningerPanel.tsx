import Panel from 'nav-frontend-paneler';
import { BekreftCheckboksPanel, SkjemaGruppe } from 'nav-frontend-skjema';
import React from 'react';
import './BekreftOpplysningerPanel.scss';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../locale/Locale';
import Oversettelse from '../Oversettelse/Oversettelse';

enum BekreftOpplysningerKeys {
  LABEL = 'BEKREFTOPPLYSNINGER_BEKREFT_LABEL',
  OPPLYSNINGER = 'BEKREFTOPPLYSNINGER_BEKREFT_OPPLYSNINGER'
}

export const BekreftOpplysningerLanguage: Record<BekreftOpplysningerKeys, Locale> = {
  BEKREFTOPPLYSNINGER_BEKREFT_LABEL: {
    nb:
      'Jeg bekrefter at jeg har satt meg inn i reglene, og at opplysningene jeg har gitt, er riktige og fullstendige. ' +
      'Jeg vet at NAV kan trekke tilbake retten til å få dekket lønnsutgiftene ved feil eller mangelfulle opplysninger, ' +
      'og at NAV kan gjøre kontroller i ettertid for å hindre misbruk av ordningen.',
    en:
      'I hereby confirm that I have read and understood the rules and that the information I have provided is correct ' +
      'and complete. I know that NAV can withdraw my right to have my payroll expenses reimbursed in the event of incorrect ' +
      'or incomplete information, and that NAV may verify the information afterwards to prevent misuse of the scheme.'
  },
  BEKREFTOPPLYSNINGER_BEKREFT_OPPLYSNINGER: {
    nb:
      'Jeg har utbetalt lønn til de ansatte jeg søker om refusjon for ovenfor.\n' +
      'Hver enkelt ansatt taper inntekt fordi de ikke kan møte på jobb på grunn av innreiseforbudet. ' +
      '[Reglene som gjelder for kompensasjon ved innreiseforbudet.](https://www.nav.no/no/bedrift/refusjon-ved-innreiseforbud-under-pandemien)',
    en:
      'I have paid the employees listed above for whom I am applying for reimbursement.\n' +
      'Each individual employee is losing money because they cannot show up for work due to the entry ban.' +
      '[The rules for compensation in connection with the entry ban.](https://www.nav.no/en/home/benefits-and-services/entry-ban-during-the-pandemic--compensation-for-lost-income/entry-ban-during-the-pandemic-reimbursement-for-compensation)'
  },
};

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
