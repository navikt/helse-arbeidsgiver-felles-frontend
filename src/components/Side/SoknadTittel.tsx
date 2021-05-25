import Panel from 'nav-frontend-paneler';
import { Undertittel, Innholdstittel } from 'nav-frontend-typografi';
import React from 'react';
import './SoknadTittel.sass';
import { useTranslation } from 'react-i18next';

interface SoknadTittelProps {
  children: any;
  subtitle?: string;
}


const SOKNAD_TITTEL = 'SOEKNADSSKJEMA'

const SoknadTittel = (props: SoknadTittelProps) => {
  const { t } = useTranslation();
  return (
    <Panel className='panel--heading'>
      <Undertittel>{props.subtitle ? props.subtitle.toUpperCase() : t(SOKNAD_TITTEL)}</Undertittel>
      <Innholdstittel>{props.children}</Innholdstittel>
    </Panel>
  );
};

export default SoknadTittel;
