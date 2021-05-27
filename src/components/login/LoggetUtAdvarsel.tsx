import React from 'react';
import ModalWrapper from 'nav-frontend-modal';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import { Innholdstittel } from 'nav-frontend-typografi';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Oversettelse from '../Oversettelse/Oversettelse';
import InternLenke from '../InternLenke/InternLenke';
import injectRedirectPath from './injectRedirectPath';
import { Locale } from '../../locale/Locale';
import { LanguageParams } from '../../context/language/LanguageContext';

interface LoggetUtAdvarselProps {
  onClose: Function;
  loginServiceUrl: string;
  tokenFornyet: string;
}

enum LoggetUtAdvarselKeys {
  LOGGET_UT_ADVARSEL_LOGGET_UT = 'LOGGET_UT_ADVARSEL_LOGGET_UT',
  LOGGET_UT_ADVARSEL_INFO = 'LOGGET_UT_ADVARSEL_INFO',
  LOGGET_UT_ADVARSEL_LOGIN = 'LOGGET_UT_ADVARSEL_LOGIN'
}

export const LoggetUtAdvarselLanguage: Record<LoggetUtAdvarselKeys, Locale> = {
  LOGGET_UT_ADVARSEL_LOGGET_UT: {
    nb: 'Du er blitt logget ut, følg instruksjonene for ikke å miste data',
    en: 'You have been logged out, follow the instructions to not lose data'
  },

  LOGGET_UT_ADVARSEL_LOGIN: {
    nb: 'Jeg har logget inn på nytt - lukk dette vinduet',
    en: 'I logged in again - close this window'
  },
  LOGGET_UT_ADVARSEL_INFO: {
    nb:
      '-## ' +
      '-- Ikke lukk dette vinduet\n' +
      '-- [Åpne ID-Porten (innlogging) i nytt vindu ved å klikke på denne lenken.]({{ innloggingUrl }})\n' +
      '-- Logg inn på nytt i ID-porten.\n' +
      '-- Returner til dette vinduet.\n' +
      '-- Lukk denne meldingen og klikk igjen på knappen "Send krav om refusjon".\n' +
      '##-\n',
    en:
      '-## ' +
      "-- Don't close this window\n" +
      '-- [Open ID-Porten (to log in) in a new window by clicking this link.]({{ innloggingUrl }})\n' +
      '-- Log in again in ID-porten.\n' +
      '-- Return to this window.\n' +
      '-- Close this message and click again on the button "Submit claim for reimbursement".\n' +
      '##-\n'
  }
};

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
