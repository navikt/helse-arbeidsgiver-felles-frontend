import React from 'react';
import { render } from 'react-dom';
import {Side} from "./felles/Side";

const App = () => {
    return (<Side>Helse-Arbeidsgiver-felles.frontend</Side>);
};

render(<App />, document.getElementById('app'));
