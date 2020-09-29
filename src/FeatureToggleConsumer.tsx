import React from 'react';

import { useFeatureToggle } from './featureToggle/FeatureToggleContext';
import { FeatureToggles } from './featureToggle/featureToggleInterface';


const FeatureToggleConsumer = () => {
    const featureFlags:FeatureToggles = useFeatureToggle();

    const ekstravisning = featureFlags['helse-arbeidsgiver.sporenstreks.ekstravisning'];

    return (<div>
            Ekstravisningsflagg: {ekstravisning ? 'Satt': 'Ikke satt'}
        </div>
    )
}

export default FeatureToggleConsumer;