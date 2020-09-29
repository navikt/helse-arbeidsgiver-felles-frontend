import React from 'react';
import { render } from 'react-dom';
import { ArbeidsgiverProvider } from './context/ArbeidsgiverContext';
import InnloggetSide from './components/InnloggetSide';
import { FeatureToggleProvider } from './index';
import FeatureToggleConsumer from './FeatureToggleConsumer';

const App = () => {
    const featureToggleUrl = 'https://www.nav.no/person/pb-unleash-proxy';
    const featureDefaults = {
        'helse-arbeidsgiver.sporenstreks.ekstravisning': false,
        'msa.visRefusjon': false,
        'pus-decorator.csp-reporting': false
        };
    return (
        <div>
          <FeatureToggleProvider toggleServerUrl={featureToggleUrl} toggleDefaults={featureDefaults}>
              <ArbeidsgiverProvider>
                  <InnloggetSide>
                      <h1>helse-arbeidsgiver-frontend-felles</h1>
                  </InnloggetSide>
              </ArbeidsgiverProvider>
              <FeatureToggleConsumer/>
          </FeatureToggleProvider>
        </div>
    );
};

render(<App />, document.getElementById('app'));
