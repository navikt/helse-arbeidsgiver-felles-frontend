import fetchFeatureToggles, { getFeatureToggleUrl, fetchToJson } from './fetchFeatureToggles';
import { FeatureToggles } from '../featureToggle/featureToggleInterface';
import 'whatwg-fetch'


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

    it('returnerer riktig testdata som json objekt', async () => {
        const dataSomSendes = { data: { test: true } };
        const config: RequestInit = { credentials: 'include' };

      jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(dataSomSendes)
      } as Response));

        expect(await fetchToJson('http://url', config)).toStrictEqual(dataSomSendes);
    })


    it('kaster en feil når serveren feiler', async () => {
        const config: RequestInit = { credentials: 'include' };

      jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.resolve({
        status: 500,
        statusText: 'Server error'
      } as Response));

        const testFn = async () => {
            await fetchToJson('http://url', config);
        }

        await expect(testFn).rejects.toThrow('Server error');
    })
})

describe('fetchFeatureToggles', () => {

    it('returnerer riktig testdata som json objekt', async () => {
        const toggles: FeatureToggles = { 'toggle': false, 'flagg' : true };
        const testValues = { 'toggle': false, 'flagg' : true };

      jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(testValues)
      } as Response));

        expect(await fetchFeatureToggles('http://url', toggles)).toStrictEqual(testValues);
    })


    it('kaster en feil når serveren feiler', async () => {
        const params: FeatureToggles = { 'toggle': false, 'flagg' : true };

      jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.resolve({
        status: 500,
        statusText: 'Server error'
      } as Response));

        const testFn = async () => {
            await fetchFeatureToggles('http://url', params);
        }

        await expect(testFn).rejects.toThrow('Server error');
    })
})
