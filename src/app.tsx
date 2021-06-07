import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
import { LanguageProvider } from './context/language/LanguageContext';
import Language from './locale/Language';
import LanguageBundle from './config/LanguageBundle';
// import i18n from './config/i18n';
import BekreftOpplysningerPanel from './components/BekreftOpplysningerPanel/BekreftOpplysningerPanel';
import Side from './components/Side/Side';
import { Column, Row } from 'nav-frontend-grid';
import Feilmeldingspanel from './components/Feilmeldingspanel/Feilmeldingspanel';
import { lagFeil } from './components/Feilmeldingspanel/lagFeil';
import ServerFeilAdvarsel from './components/ServerFeilAdvarsel/ServerFeilAdvarsel';
import DatoVelger from './components/DatoVelger/DatoVelger';
import Fnr from './components/Fnr/Fnr';
import HjelpeLabel from './components/HjelpeLabel/HjelpeLabel';
import Kvittering from './components/kvittering/Kvittering';
import i18next from 'i18next';

const App = () => (
  <BrowserRouter>
    <LanguageProvider
      defaultLanguage={Language.nb}
      languages={[Language.nb, Language.en]}
      i18n={i18next}
      bundle={LanguageBundle}
    >
        <Side
          sidetittel={''}
          bedriftsmeny={false}
          subtitle={'helse-arbeidsgiver-frontend-felles'}
        >
          <Row>
            <Column md='3'>
              <DatoVelger  label={<HjelpeLabel label={'Dato'}>Lang tekst</HjelpeLabel>} onChange={() => {}} />
            </Column>
            <Column md='3'>
              <Fnr label='Label' placeholder='11 siffer' onChange={() => {}}/>
            </Column>
          </Row>
          <Row>
            <Column>
              <Kvittering />
            </Column>
          </Row>
          <Row>
            <Column>
              <Feilmeldingspanel feilmeldinger={[lagFeil('dato', 'Feil i et komponent')]} />
            </Column>
          </Row>
          <Row>
            <Column>
              <BekreftOpplysningerPanel checked={false} onChange={() => {}} />
            </Column>
          </Row>
          <Row>
            <Column>
              <ServerFeilAdvarsel isOpen={false} onClose={() => {}} />
            </Column>
          </Row>
        </Side>
    </LanguageProvider>
  </BrowserRouter>
);

export default App;
