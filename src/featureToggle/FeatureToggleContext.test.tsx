import React from 'react';
import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import FeatureToggleProvider from './FeatureToggleContext';
import { FeatureToggles } from './featureToggleInterface';
import FeatureToggleConsumer from '../FeatureToggleConsumer';

describe('FeatureToggleProvider', () => {

    it('should show children', async () => {
        const params: FeatureToggles = { 'helse-arbeidsgiver.sporenstreks.ekstravisning' : false };
        const testValues = { 'helse-arbeidsgiver.sporenstreks.ekstravisning' : true };

        jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve(testValues)
        } as Response));

        act(() => {
        render(<FeatureToggleProvider toggleServerUrl="http://url" toggleDefaults={params}>
            Barn
            <FeatureToggleConsumer/>
            </FeatureToggleProvider>);
        });
        expect(screen.getByText('Barn'));
        await waitFor(() => {
            expect(screen.getByText(/Satt/));
        });
    })

})
