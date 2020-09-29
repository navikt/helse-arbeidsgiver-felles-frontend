import React from 'react';
import { render } from 'react-dom';
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
        <FeatureToggleProvider toggleServerUrl={featureToggleUrl} toggleDefaults={featureDefaults}>
            <div>
                <h1>helse-arbeidsgiver-frontend-felles</h1>
            </div>
            <FeatureToggleConsumer/>
        </FeatureToggleProvider>
    );
};

render(<App />, document.getElementById('app'));
