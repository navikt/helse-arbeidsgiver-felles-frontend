import React from 'react';
import ModalWrapper from 'nav-frontend-modal';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import { Innholdstittel } from 'nav-frontend-typografi';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Oversettelse from '../Oversettelse/Oversettelse';
import InternLenke from '../InternLenke/InternLenke';
import injectRedirectPath from './injectRedirectPath';
import { LanguageParams } from '../../context/language/LanguageContext';
import { LoggetUtAdvarselKeys } from './LoggetUtAdvarselKeys';

interface LoggetUtAdvarselProps {
  onClose: Function;
  loginServiceUrl: string;
  tokenFornyet: string;
}

const LoggetUtAdvarsel = ({
  onClose,
  loginServiceUrl,
  tokenFornyet
}: LoggetUtAdvarselProps) => {
  const { t } = useTranslation();
  let { language } = useParams<LanguageParams>();
  const loginServiceUrlAfterRedirect = injectRedirectPath(
    loginServiceUrl,
    tokenFornyet,
    language
  );
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
        <Innholdstittel>
          {t(LoggetUtAdvarselKeys.LOGGET_UT_ADVARSEL_LOGGET_UT)}
        </Innholdstittel>
        <Oversettelse
          langKey={LoggetUtAdvarselKeys.LOGGET_UT_ADVARSEL_INFO}
          variables={{ innloggingUrl: loginServiceUrlAfterRedirect }}
        />
        <InternLenke onClick={() => handleCloseModal()}>
          {t(LoggetUtAdvarselKeys.LOGGET_UT_ADVARSEL_LOGIN)}
        </InternLenke>
      </AlertStripeFeil>
    </ModalWrapper>
  );
};

export default LoggetUtAdvarsel;
