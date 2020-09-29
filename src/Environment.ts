
class Environment {

  base: string;
  localhost: boolean;

  constructor(hostname?: string) {
    this.base = hostname || (window.location.protocol + '//' + window.location.hostname);
    this.localhost = 'http://localhost' === hostname;
  }

  get loginServiceUrl() {
    if (this.localhost) {
      return 'http://localhost:8080/local/cookie-please?subject=12321&redirect=http://localhost:3000/nettrefusjon/';
    }
    return 'https://loginservice.nav.no/login?redirect=' + this.base;
  }
  
}

export default Environment;
