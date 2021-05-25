import React from 'react';
import ModalWrapper from 'nav-frontend-modal';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import { Innholdstittel } from 'nav-frontend-typografi';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { PathParams } from '../../locale/LocaleProvider';
import Oversettelse from '../Oversettelse/Oversettelse';
import InternLenke from '../InternLenke/InternLenke';
import injectRedirectPath from './injectRedirectPath';

interface LoggetUtAdvarselProps {
  onClose: Function;
  loginServiceUrl: string
  tokenFornyet: string
}

enum LoggetUtAdvarselKeys {
  LOGGET_UT = 'LOGGET_UT',
  LOGGETUTADVARSEL_INFO = 'LOGGETUTADVARSEL_INFO',
  LOGGET_INN = 'LOGGET_INN',
}

const LoggetUtAdvarsel = ({ onClose, loginServiceUrl, tokenFornyet }: LoggetUtAdvarselProps) => {
  const { t } = useTranslation();
  let { language } = useParams<PathParams>();
  const loginServiceUrlAfterRedirect = injectRedirectPath(loginServiceUrl, tokenFornyet, language);
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <ModalWrapper
      isOpen={true}
      onRequestClose={() => handleCloseModal()}
      closeButton={false}
      className={'logget-ut-advarsel'}
      contentLabel=''
      shouldCloseOnOverlayClick={false}
    >
      <AlertStripeFeil className='logget-ut-advarsel__innhold'>
        <Innholdstittel>{t(LoggetUtAdvarselKeys.LOGGET_UT)}</Innholdstittel>
        <Oversettelse
          langKey={LoggetUtAdvarselKeys.LOGGETUTADVARSEL_INFO}
          variables={{ innloggingUrl: loginServiceUrlAfterRedirect }}
        />
        <InternLenke onClick={() => handleCloseModal()}>{t(LoggetUtAdvarselKeys.LOGGET_INN)}</InternLenke>
      </AlertStripeFeil>
    </ModalWrapper>
  );
};

export default LoggetUtAdvarsel;
