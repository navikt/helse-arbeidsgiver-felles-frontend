import Environment from './Environment';

describe('Environment', () => {

    it('should have correct loginService', async () => {
        expect(new Environment('https://arbeidsgiver.nav.no/nettrefusjon/').loginServiceUrl).toEqual('https://loginservice.nav.no/login?redirect=https://arbeidsgiver.nav.no/nettrefusjon/');
        expect(new Environment('http://localhost').loginServiceUrl).toEqual('http://localhost:8080/local/cookie-please?subject=12321&redirect=http://localhost:3000/nettrefusjon/');
    })

});