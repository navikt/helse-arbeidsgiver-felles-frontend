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
import DatoVelger from './components/DatoVelger/DatoVelger';
import Feilmeldingspanel from './components/Feilmeldingspanel/Feilmeldingspanel';
import lagFeil from './components/Feilmeldingspanel/lagFeil';
import pushFeilmelding from './components/Feilmeldingspanel/pushFeilmelding';
import Fnr from './components/Fnr/Fnr';
import HjelpeLabel from './components/HjelpeLabel/HjelpeLabel';
import InternLenke from './components/InternLenke/InternLenke';
import SlettKravKnapp from './components/knapper/SlettKravKnapp/SlettKravKnapp';
import LeggTilKnapp from './components/knapper/LeggTilKnapp';
import Slettknapp from './components/knapper/Slettknapp';
import Kvittering from './components/kvittering/Kvittering';
import IngenTilgangAdvarsel from './components/login/IngenTilgangAdvarsel';
import LoggetUtAdvarsel from './components/login/LoggetUtAdvarsel';
import TilgangsfeilSide from './components/login/TilgangsfeilSide';
import TokenFornyet from './components/login/TokenFornyet';
import Oversettelse from './components/Oversettelse/Oversettelse';
import PageNotFound from './components/PageNotFound/PageNotFound';
import RadNr from './components/RadNr/RadNr';
import ServerFeilAdvarsel from './components/ServerFeilAdvarsel/ServerFeilAdvarsel';
import InnloggetSide from './components/Side/InnloggetSide';
import Side from './components/Side/Side';
import SideIndentering from './components/Side/SideIndentering';
import SideRamme from './components/Side/SideRamme';
import SoknadTittel from './components/Side/SoknadTittel';
import Skillelinje from './components/Skillelinje/Skillelinje';
import Upload from './components/Upload/Upload';

// Context
import { ArbeidsgiverProvider, useArbeidsgiver, buildArbeidsgiver } from './context/arbeidsgiver/ArbeidsgiverContext';
import ArbeidsgiverInterface from './context/arbeidsgiver/ArbeidsgiverInterface';
import ArbeidsgiverStatus from './context/arbeidsgiver/ArbeidsgiverStatus';
import { LanguageProvider, useLanguage } from './context/language/LanguageContext';
import isLoggedInFromUrl from './context/login/isLoggedInFromUrl';
import LoginChecking from './context/login/LoginChecking';
import { LoginProvider } from './context/login/LoginContext';
import LoginRedirect from './context/login/LoginRedirect';
import LoginStatus from './context/login/LoginStatus';
import redirectUrl from './context/login/redirectUrl';
import redirectWithoutParams from './context/login/redirectWithoutParams';

// Locale
import buildBundle from './locale/buildBundle';
import buildLocalePath from './locale/buildLocalePath';
import Language from './locale/Language';
import Locale from './locale/Locale';

// Mock
import mockFetch from './mock/mockFetch';
import mockHistory from './mock/mockHistory';
// import mockWindowLocation from './mock/mockWindowLocation';
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
import formatNorsk from './utils/dato/formatNorsk';
import isBeforeDate from './utils/dato/isBeforeDate';
import parseDato from './utils/dato/parseDato';
import parseDatoVerify from './utils/dato/parseDatoVerify';
import parseISODato from './utils/dato/parseISODato';
import toDate from './utils/dato/toDate';
import toDato from './utils/dato/toDato';
import zeroPadding from './utils/dato/zeroPadding';
import formatIsoDateAsNoDate from './utils/formatIsoDateAsNoDate';
import formatIsoTimestampAsNoTimestamp from './utils/formatIsoTimestampAsNoTimestamp';
import formatNumberAsCurrency from './utils/formatNumberAsCurrency';
import isNumericString from './utils/isNumericString';
import statens_grunnbeloep from './utils/statens_grunnbeloep';
import stringishToNumber from './utils/stringishToNumber';

// Validation
import formatValidation from './validation/formatValidation';
import isValidFnr from './validation/isValidFnr';
import isValidOrgnr from './validation/isValidOrgnr';
import validateBekreft from './validation/validateBekreft';
import validateBeloep from './validation/validateBeloep';
import validateDager from './validation/validateDager';
import validateFnr from './validation/validateFnr';
import validateFra from './validation/validateFra';
import validateOrgnr from './validation/validateOrgnr';
import validateTil from './validation/validateTil';
import ValidationResult from './validation/ValidationResult';
import LanguageInit from './context/language/LanguageInit';

/**
 * Alle klasser som skal eksponeres utad via pakkesystemet til NPM skal legges
 * inn som en komma separert liste som export neders i denne file.
 *
 * app.tsx blir ikke eksponert utad og skal kun demonstrere bruksmønster internt.
 *
 */
export {
  // API
  ArbeidsgiverAPI, mapArbeidsgiver, LoginExpiryAPI, ParseExpiryDate, HttpStatus,
  // Components
  BekreftOpplysningerPanel, DatoVelger, Feilmeldingspanel, lagFeil,
  pushFeilmelding, Fnr, HjelpeLabel, InternLenke, SlettKravKnapp,
  LeggTilKnapp, Slettknapp, Kvittering, IngenTilgangAdvarsel, LoggetUtAdvarsel,
  TilgangsfeilSide, TokenFornyet, Oversettelse, PageNotFound, RadNr,
  ServerFeilAdvarsel, InnloggetSide, Side, SideIndentering, SideRamme,
  SoknadTittel, Skillelinje, Upload,
  // Context
  ArbeidsgiverProvider, useArbeidsgiver, buildArbeidsgiver, ArbeidsgiverStatus,
  LanguageProvider, useLanguage, LanguageInit,
  isLoggedInFromUrl, LoginChecking,
  LoginProvider,
  LoginRedirect,
  LoginStatus,
  redirectUrl,
  redirectWithoutParams,
  // Locale,
  buildBundle,
  buildLocalePath,
  Language,
  // Mock
  mockFetch, mockHistory,
  testBackendOrganisasjoner, testFnr, testOrganisasjoner, testOrgnr,
  // State
  map200, map201, map400, map401, map422, map500, mapResponse,
  // Utils
  datoToString, diffDato, formatDate, formatDato, formatISO, formatNorsk,
  isBeforeDate, parseDato, parseDatoVerify, parseISODato,
  toDate, toDato, zeroPadding,
  formatIsoDateAsNoDate, formatIsoTimestampAsNoTimestamp, formatNumberAsCurrency,
  isNumericString, statens_grunnbeloep, stringishToNumber,
  // Validation
  formatValidation,
  isValidFnr, isValidOrgnr,
  validateBekreft, validateBeloep, validateDager, validateFnr,
  validateFra, validateOrgnr, validateTil,


};

export type {
  // API
  ArbeidsgivereResponse, BackendOrganisasjon, LoginExpiryResponse,


  // Context
  ArbeidsgiverInterface,

  // Locale
  Locale,

  // State
  ValidationResponse, ValidationState,

  // Utils
  Dato,

  // Validation
  ValidationResult
};
