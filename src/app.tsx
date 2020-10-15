import React from 'react';
import { render } from 'react-dom';
import InnloggetSide from './components/InnloggetSide';
import {ArbeidsgiverProvider, FeatureToggleProvider} from './index';
import FeatureToggleConsumer from './FeatureToggleConsumer';
import {BrowserRouter} from "react-router-dom";

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
