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
import i18n from 'i18next';
import BekreftOpplysningerPanel from './components/BekreftOpplysningerPanel/BekreftOpplysningerPanel';
import Side from './components/Side/Side';
import { buildBundle } from "./locale/buildBundle";

const App = () => (
  <BrowserRouter>
    <LanguageProvider
      defaultLanguage={Language.nb}
      languages={[Language.nb, Language.en]}
      useParams={() => {
        return {};
      }}
      i18n={i18n}
      bundle={LanguageBundle}
    >
        <Side
          sidetittel={''}
          bedriftsmeny={false}
          subtitle={'helse-arbeidsgiver-frontend-felles'}
        >
          <BekreftOpplysningerPanel checked={false} onChange={() => {}} />
        </Side>
    </LanguageProvider>
  </BrowserRouter>
);

export default App;
