import React from 'react';
import '@testing-library/jest-dom';
import { act, render, screen, wait } from '@testing-library/react';
import FeatureToggleProvider from './FeatureToggleContext';
import FetchMock, { SpyMiddleware } from 'yet-another-fetch-mock';
import 'isomorphic-fetch';
import { FeatureToggles } from './featureToggleInterface';
import FeatureToggleConsumer from '../FeatureToggleConsumer';

describe('FeatureToggleProvider', () => {
    let mock: FetchMock;
    let spy: SpyMiddleware;

    beforeEach(() => {
        spy = new SpyMiddleware();
        mock = FetchMock.configure({
          middleware: spy.middleware
        });
        expect(spy.size()).toBe(0);
    });
    
    afterEach(() => {
        mock.restore();
    });

    it('should show children', async () => {
        const params: FeatureToggles = { 'helse-arbeidsgiver.sporenstreks.ekstravisning' : false };
        const testValues = { 'helse-arbeidsgiver.sporenstreks.ekstravisning' : true };

        mock.get('http://url/feature-toggles', (req, res, ctx) => res(ctx.json(testValues)));
        act(() => {
        render(<FeatureToggleProvider toggleServerUrl="http://url" toggleDefaults={params}>
            Barn
            <FeatureToggleConsumer/>
            </FeatureToggleProvider>);
        });
        expect(screen.getByText('Barn'));
        await wait(() => {
            expect(screen.getByText(/Satt/));
        });
    })

})
