import { ArbeidsgiverProvider, useArbeidsgiver } from './context/ArbeidsgiverContext';
import ArbeidsgiverAPI, { Status } from './api/ArbeidsgiverAPI';
import LoginExpiryAPI from './api/LoginExpiryAPI';
import InnloggetSide from './components/InnloggetSide';
import DatoVelger from './components/DatoVelger';
import TokenExpiredContext from './context/TokenExpiredContext';
import { fetchFeatureToggles } from './featureToggle/fetchFeatureToggles';
import FeatureToggleProvider from './featureToggle/FeatureToggleContext';
import { EnvironmentProvider, useEnvironment } from './context/EnvironmentContext';
import { LoginProvider, useLogin } from './context/LoginContext';
import 'nav-frontend-core/dist/main.css';
import 'nav-frontend-typografi-style/dist/main.css';
import 'nav-frontend-skjema-style/dist/main.css';
import 'nav-frontend-knapper-style/dist/main.css';
import 'nav-frontend-hjelpetekst-style/dist/main.css';
import 'nav-frontend-alertstriper-style/dist/main.css';
import 'nav-frontend-grid-style/dist/main.css';
import 'nav-frontend-chevron-style/dist/main.css';
import 'nav-frontend-lenker-style/dist/main.css';
import 'nav-frontend-paneler-style/dist/main.css';
import 'nav-frontend-spinner-style/dist/main.css';
import 'nav-frontend-veileder-style/dist/main.css';
import 'nav-frontend-veilederpanel-style/dist/main.css';
import 'nav-frontend-modal-style/dist/main.css';
import 'nav-frontend-popover-style/dist/main.css';
import 'nav-frontend-tabell-style/dist/main.css';

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
