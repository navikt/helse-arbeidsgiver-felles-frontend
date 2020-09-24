import React from 'react';
import { render } from 'react-dom';
import { ArbeidsgiverProvider } from './context/ArbeidsgiverContext';
import InnloggetSide from './components/InnloggetSide';

const App = () => {
    return (
        <div>
            <ArbeidsgiverProvider>
                <InnloggetSide>
                    <h1>helse-arbeidsgiver-frontend-felles</h1>
                </InnloggetSide>
            </ArbeidsgiverProvider>
        </div>
    );
};

render(<App />, document.getElementById('app'));
