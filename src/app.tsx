import React from 'react';
import { render } from 'react-dom';
import InnloggetSide from './components/Side/InnloggetSide';
import { ArbeidsgiverProvider, FeatureToggleProvider } from './index';
import FeatureToggleConsumer from './FeatureToggleConsumer';
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

const App = () => {
    const featureToggleUrl = 'https://www.nav.no/person/pb-unleash-proxy';
    const featureDefaults = {
        'helse-arbeidsgiver.sporenstreks.ekstravisning': false,
        'msa.visRefusjon': false,
        'pus-decorator.csp-reporting': false
        };
    return (
        <BrowserRouter>
          <FeatureToggleProvider toggleServerUrl={featureToggleUrl} toggleDefaults={featureDefaults}>
              <ArbeidsgiverProvider>
                  <InnloggetSide>
                      <h1>helse-arbeidsgiver-frontend-felles</h1>
                  </InnloggetSide>
              </ArbeidsgiverProvider>
              <FeatureToggleConsumer/>
          </FeatureToggleProvider>
        </BrowserRouter>
    );
};

render(<App />, document.getElementById('app'));
