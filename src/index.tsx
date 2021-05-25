import { ArbeidsgiverProvider, useArbeidsgiver } from './context/ArbeidsgiverContext';
import ArbeidsgiverAPI, { Status } from './api/ArbeidsgiverAPI';
import InnloggetSide from './components/Side/InnloggetSide';
import DatoVelger from './components/DatoVelger/DatoVelger';
import TokenExpiredContext from './context/TokenExpiredContext';
import { fetchFeatureToggles } from './featureToggle/fetchFeatureToggles';
import FeatureToggleProvider from './featureToggle/FeatureToggleContext';
import { EnvironmentProvider, useEnvironment } from './context/EnvironmentContext';
import { LoginProvider, useLogin } from './context/LoginContext';
import LoginExpiryAPI from './api/loginexpiry/LoginExpiryAPI';

/**
 * Alle klasser som skal eksponeres utad via pakkesystemet til NPM skal legges
 * inn som en komma separert liste som export neders i denne file.
 *
 * app.tsx blir ikke eksponert utad og skal kun demonstrere bruksmønster internt.
 *
 */

export {
  InnloggetSide,
  DatoVelger,
  ArbeidsgiverProvider, useArbeidsgiver,
  ArbeidsgiverAPI, Status,
  LoginExpiryAPI, TokenExpiredContext,
  fetchFeatureToggles, FeatureToggleProvider,
  EnvironmentProvider, useEnvironment,
  LoginProvider, useLogin
}
