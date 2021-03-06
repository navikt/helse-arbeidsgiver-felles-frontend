// API
import ArbeidsgiverAPI from './api/arbeidsgiver/ArbeidsgiverAPI';
import ArbeidsgivereResponse from './api/arbeidsgiver/ArbeidsgivereResponse';
import BackendOrganisasjon from './api/arbeidsgiver/BackendOrganisasjon';
import mapArbeidsgiver from './api/arbeidsgiver/mapArbeidsgiver';
import LoginExpiryAPI from './api/loginexpiry/LoginExpiryAPI';
import LoginExpiryResponse from './api/loginexpiry/LoginExpiryResponse';
import ParseExpiryDate from './api/loginexpiry/ParseExpiryDate';
import HttpStatus from './api/HttpStatus';

// Components
import BekreftOpplysningerPanel from './components/BekreftOpplysningerPanel/BekreftOpplysningerPanel';
import { BekreftOpplysningerKeys } from './components/BekreftOpplysningerPanel/BekreftOpplysningerKeys';
import DatoVelger from './components/DatoVelger/DatoVelger';
import Feilmeldingspanel from './components/Feilmeldingspanel/Feilmeldingspanel';
import { FeilmeldingspanelKeys } from './components/Feilmeldingspanel/FeilmeldingspanelKeys';
import lagFeil from './components/Feilmeldingspanel/lagFeil';
import pushFeilmelding from './components/Feilmeldingspanel/pushFeilmelding';
import Fnr from './components/Fnr/Fnr';
import HjelpeLabel from './components/HjelpeLabel/HjelpeLabel';
import InternLenke from './components/InternLenke/InternLenke';
import SlettKravKnapp from './components/knapper/SlettKravKnapp/SlettKravKnapp';
import LeggTilKnapp from './components/knapper/LeggTilKnapp/LeggTilKnapp';
import Slettknapp from './components/knapper/slett/Slettknapp';
import Kvittering from './components/kvittering/Kvittering';
import { KvitteringKeys } from './components/kvittering/KvitteringKeys';
import IngenTilgangAdvarsel from './components/login/IngenTilgangAdvarsel';
import { IngenTilgangAdvarselKeys } from './components/login/IngenTilgangAdvarselKeys';
import LoggetUtAdvarsel from './components/login/LoggetUtAdvarsel';
import { LoggetUtAdvarselKeys } from './components/login/LoggetUtAdvarselKeys';
import TilgangsfeilSide from './components/login/TilgangsfeilSide';
import { TilgangsfeilSideKeys } from './components/login/TilgangsfeilSideKeys';
import TokenFornyet from './components/login/TokenFornyet';
import { TokenFornyetKeys } from './components/login/TokenFornyetKeys';
import Oversettelse from './components/Oversettelse/Oversettelse';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { PageNotFoundKeys } from './components/PageNotFound/PageNotFoundKeys';
import ServerFeilAdvarsel from './components/ServerFeilAdvarsel/ServerFeilAdvarsel';
import { ServerFeilAdvarselKeys } from './components/ServerFeilAdvarsel/ServerFeilAdvarselKeys';
import InnloggetSide from './components/Side/InnloggetSide';
import Side from './components/Side/Side';
import SideIndentering from './components/Side/SideIndentering';
import SideRamme from './components/Side/SideRamme';
import SoknadTittel from './components/Side/SoknadTittel';
import Skillelinje from './components/Skillelinje/Skillelinje';
import Upload from './components/Upload/Upload';
import { UploadKeys } from './components/Upload/UploadKeys';

// Context
import {
  ArbeidsgiverProvider,
  useArbeidsgiver,
  buildArbeidsgiver
} from './context/arbeidsgiver/ArbeidsgiverContext';
import ArbeidsgiverInterface from './context/arbeidsgiver/ArbeidsgiverInterface';
import ArbeidsgiverStatus from './context/arbeidsgiver/ArbeidsgiverStatus';
import {
  LanguageProvider,
  useLanguage
} from './context/language/LanguageContext';
import isLoggedInFromUrl from './context/login/isLoggedInFromUrl';
import LoginChecking from './context/login/LoginChecking';
import { LoginProvider } from './context/login/LoginContext';
import LoginRedirect from './context/login/LoginRedirect';
import LoginStatus from './context/login/LoginStatus';
import redirectUrl from './context/login/redirectUrl';
import redirectWithoutParams from './context/login/redirectWithoutParams';

// Locale
import buildResources from './locale/buildResources';
import Language from './locale/Language';
import Locale from './locale/Locale';

// Mock
import mockFetch from './mock/mockFetch';
import mockHistory from './mock/mockHistory';
import testBackendOrganisasjoner from './mock/testBackendOrganisasjoner';
import testFnr from './mock/testFnr';
import testOrganisasjoner from './mock/testOrganisasjoner';
import testOrgnr from './mock/testOrgnr';

// State
import map200 from './state/validation/map200';
import map201 from './state/validation/map201';
import map400 from './state/validation/map400';
import map401 from './state/validation/map401';
import map422 from './state/validation/map422';
import map500 from './state/validation/map500';
import mapResponse from './state/validation/mapResponse';
import ValidationResponse from './state/validation/ValidationResponse';
import ValidationState from './state/validation/ValidationState';

// Utils
import Dato from './utils/dato/Dato';
import datoToString from './utils/dato/datoToString';
import diffDato from './utils/dato/diffDato';
import formatDate from './utils/dato/formatDate';
import formatDato from './utils/dato/formatDato';
import formatISO from './utils/dato/formatISO';
import formatNorskDato from './utils/dato/formatNorskDato';
import isBeforeDate from './utils/dato/isBeforeDate';
import parseDato from './utils/dato/parseDato';
import parseDatoVerify from './utils/dato/parseDatoVerify';
import parseISODato from './utils/dato/parseISODato';
import datoToDate from './utils/dato/datoToDate';
import dateToDato from './utils/dato/dateToDato';
import zeroPadding from './utils/dato/zeroPadding';
import formatIsoDateAsNoDate from './utils/formatIsoDateAsNoDate';
import formatIsoTimestampAsNoTimestamp from './utils/formatIsoTimestampAsNoTimestamp';
import formatNumberAsCurrency from './utils/formatNumberAsCurrency';
import isNumericString from './utils/isNumericString';
import statens_grunnbeloep from './utils/statens_grunnbeloep';
import stringishToNumber from './utils/stringishToNumber';
import formatFilesize from './utils/formatFilesize';

// Validation
import formatValidation from './validation/formatValidation';
import isValidFnr from './validation/isValidFnr';
import isValidOrgnr from './validation/isValidOrgnr';
import validateBekreft, {
  validateBekreftKeys
} from './validation/validateBekreft';
import validateBeloep, {
  validateBeloepKeys
} from './validation/validateBeloep';
import validateDager from './validation/validateDager';
import validateFnr, { validateFnrKeys } from './validation/validateFnr';
import validateFra, { validateFraKeys } from './validation/validateFra';
import validateOrgnr, { validateOrgnrKeys } from './validation/validateOrgnr';
import validateTil, { validateTilKeys } from './validation/validateTil';
import ValidationResult from './validation/ValidationResult';

/**
 * Alle klasser som skal eksponeres utad via pakkesystemet til NPM skal legges
 * inn som en komma separert liste som export neders i denne file.
 *
 * app.tsx blir ikke eksponert utad og skal kun demonstrere bruksmønster internt.
 *
 */
export {
  // API
  ArbeidsgiverAPI,
  mapArbeidsgiver,
  LoginExpiryAPI,
  ParseExpiryDate,
  HttpStatus,
  // Components
  BekreftOpplysningerPanel,
  DatoVelger,
  Feilmeldingspanel,
  lagFeil,
  pushFeilmelding,
  Fnr,
  HjelpeLabel,
  InternLenke,
  SlettKravKnapp,
  LeggTilKnapp,
  Slettknapp,
  Kvittering,
  IngenTilgangAdvarsel,
  LoggetUtAdvarsel,
  TilgangsfeilSide,
  TokenFornyet,
  Oversettelse,
  PageNotFound,
  ServerFeilAdvarsel,
  InnloggetSide,
  Side,
  SideIndentering,
  SideRamme,
  SoknadTittel,
  Skillelinje,
  Upload,
  // Context
  ArbeidsgiverProvider,
  useArbeidsgiver,
  buildArbeidsgiver,
  ArbeidsgiverStatus,
  LanguageProvider,
  useLanguage,
  isLoggedInFromUrl,
  LoginChecking,
  LoginProvider,
  LoginRedirect,
  LoginStatus,
  redirectUrl,
  redirectWithoutParams,
  // Locale,
  buildResources,
  Language,
  // Mock
  mockFetch,
  mockHistory,
  testBackendOrganisasjoner,
  testFnr,
  testOrganisasjoner,
  testOrgnr,
  // State
  map200,
  map201,
  map400,
  map401,
  map422,
  map500,
  mapResponse,
  // Utils
  datoToString,
  diffDato,
  formatDate,
  formatDato,
  formatISO,
  formatNorskDato,
  isBeforeDate,
  parseDato,
  parseDatoVerify,
  parseISODato,
  datoToDate,
  dateToDato,
  zeroPadding,
  formatIsoDateAsNoDate,
  formatIsoTimestampAsNoTimestamp,
  formatNumberAsCurrency,
  isNumericString,
  statens_grunnbeloep,
  stringishToNumber,
  formatFilesize,
  // Validation
  formatValidation,
  isValidFnr,
  isValidOrgnr,
  validateBekreft,
  validateBeloep,
  validateDager,
  validateFnr,
  validateFra,
  validateOrgnr,
  validateTil
};

export type {
  // API
  ArbeidsgivereResponse,
  BackendOrganisasjon,
  LoginExpiryResponse,
  // Context
  ArbeidsgiverInterface,
  // Locale
  Locale,
  // State
  ValidationResponse,
  ValidationState,
  // Utils
  Dato,
  // Validation
  ValidationResult,
  // Components
  BekreftOpplysningerKeys,
  FeilmeldingspanelKeys,
  KvitteringKeys,
  IngenTilgangAdvarselKeys,
  LoggetUtAdvarselKeys,
  TilgangsfeilSideKeys,
  TokenFornyetKeys,
  PageNotFoundKeys,
  ServerFeilAdvarselKeys,
  UploadKeys,
  validateBekreftKeys,
  validateBeloepKeys,
  validateFnrKeys,
  validateFraKeys,
  validateTilKeys,
  validateOrgnrKeys
};
