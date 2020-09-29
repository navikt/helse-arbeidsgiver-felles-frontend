import fetchFeatureToggles, { getFeatureToggleUrl, fetchToJson } from './fetchFeatureToggles';
import { FeatureToggles } from '../featureToggle/featureToggleInterface';
import FetchMock, { SpyMiddleware } from 'yet-another-fetch-mock';
import 'isomorphic-fetch';


describe('getFeatureToggleUrl', () => {
    it('returnerer riktig path med to flagg', () => {
        const toggles: FeatureToggles = {
            'toggle': true,
            'another': false
        };
        expect(getFeatureToggleUrl(toggles)).toBe('?feature=toggle&feature=another');
    })

    it('returnerer riktig path med et flagg', () => {
        const toggles: FeatureToggles = {
            'flagg': true,
        };
        expect(getFeatureToggleUrl(toggles)).toBe('?feature=flagg');
    })

    it('returnerer riktig path uten', () => {
        const toggles: FeatureToggles = {};
        expect(getFeatureToggleUrl(toggles)).toBe('');
    })
})

describe('fetchToJson', () => {
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

    it('returnerer riktig testdata som json objekt', async () => {
        const dataSomSendes = { data: { test: true } };
        const config: RequestInit = { credentials: 'include' };

        mock.get('http://url', (req, res, ctx) => res(ctx.json(dataSomSendes)));

        expect(await fetchToJson('http://url', config)).toStrictEqual(dataSomSendes);
    })


    it('kaster en feil når serveren feiler', async () => {
        const config: RequestInit = { credentials: 'include' };

        mock.get('http://url', (req, res, ctx) => res(ctx.status(500), ctx.statusText('Server error')));

        const testFn = async () => {
            await fetchToJson('http://url', config);
        }

        await expect(testFn).rejects.toThrow('Server error');
    })
})

describe('fetchFeatureToggles', () => {
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

    it('returnerer riktig testdata som json objekt', async () => {
        const toggles: FeatureToggles = { 'toggle': false, 'flagg' : true };
        const testValues = { 'toggle': false, 'flagg' : true };

        mock.get('http://url/feature-toggles', (req, res, ctx) => res(ctx.json(testValues)));

        expect(await fetchFeatureToggles('http://url', toggles)).toStrictEqual(testValues);
    })


    it('kaster en feil når serveren feiler', async () => {
        const params: FeatureToggles = { 'toggle': false, 'flagg' : true };

        mock.get('http://url/feature-toggles', (req, res, ctx) => res(ctx.status(500), ctx.statusText('Server error')));

        const testFn = async () => {
            await fetchFeatureToggles('http://url', params);
        }

        await expect(testFn).rejects.toThrow('Server error');
    })
})