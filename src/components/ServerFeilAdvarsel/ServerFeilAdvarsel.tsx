import React from 'react';
import ModalWrapper from 'nav-frontend-modal';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import Oversettelse from '../Oversettelse/Oversettelse';
import { useTranslation } from 'react-i18next';
import InternLenke from '../InternLenke/InternLenke';
import { ServerFeilAdvarselKeys } from './ServerFeilAdvarselKeys';

interface ServerFeilAdvarselProps {
  onClose: () => void;
  isOpen?: boolean;
}

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
        <div>
          <Oversettelse
            langKey={ServerFeilAdvarselKeys.SERVER_FEIL_ADVARSEL_TEXT}
          />
        </div>
        <div>
          <InternLenke onClick={() => props.onClose()}>
            {t(ServerFeilAdvarselKeys.SERVER_FEIL_ADVARSEL_HIDE)}
          </InternLenke>
        </div>
      </AlertStripeFeil>
    </ModalWrapper>
  );
};

export default ServerFeilAdvarsel;
