import React from 'react';
import ModalWrapper from 'nav-frontend-modal';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import './ServerFeilAdvarsel.sass';
import Oversettelse from '../Oversettelse/Oversettelse';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../locale/Locale';
import InternLenke from '../InternLenke/InternLenke';

interface ServerFeilAdvarselProps {
  onClose: () => void;
  isOpen?: boolean;
}

enum ServerFeilAdvarselKeys {
  SERVER_FEIL_ADVARSEL_TEXT = 'SERVER_FEIL_ADVARSEL_TEXT',
  SERVER_FEIL_ADVARSEL_HIDE = 'SERVER_FEIL_ADVARSEL_HIDE'
}

export const PageNotFoundLanguage: Record<ServerFeilAdvarselKeys, Locale> = {
  SERVER_FEIL_ADVARSEL_TEXT: {
    nb:
      '_Det har desverre oppstått en teknisk feil hos oss_\n\n' +
      'Prøv igjen litt senere, og [kontakt oss gjerne dersom det ikke ordner seg.](https://arbeidsgiver.nav.no/kontakt-oss/)',
    en:
      '_Unfortunately, a technical error has occurred_\n\n' +
      'Please try again later and [feel free to contact us if it does not work out.](https://arbeidsgiver.nav.no/kontakt-oss/)'
  },
  SERVER_FEIL_ADVARSEL_HIDE: {
    nb: 'Skjul denne meldingen.',
    en: 'Hide this message.'
  }
};

const ServerFeilAdvarsel = (props: ServerFeilAdvarselProps) => {
  const { t } = useTranslation();
  return (
    <ModalWrapper
      isOpen={props.isOpen!}
      onRequestClose={() => props.onClose()}
      closeButton={false}
      className='server-feil-advarsel'
      contentLabel=''
      shouldCloseOnOverlayClick={false}
    >
      <AlertStripeFeil className='server-feil-advarsel--innhold'>
        <Oversettelse
          langKey={ServerFeilAdvarselKeys.SERVER_FEIL_ADVARSEL_TEXT}
        />
        <InternLenke onClick={() => props.onClose()}>
          {t(ServerFeilAdvarselKeys.SERVER_FEIL_ADVARSEL_HIDE)}
        </InternLenke>
      </AlertStripeFeil>
    </ModalWrapper>
  );
};

export default ServerFeilAdvarsel;
