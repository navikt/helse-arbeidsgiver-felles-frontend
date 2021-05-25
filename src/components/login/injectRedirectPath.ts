import Language from '../../locale/Language';

function injectRedirectPath(loginServiceUrl:string, injectedPath: string, lang: Language): string {
  const host = window.location.origin;
  const injectedUrl = loginServiceUrl.replace('XXX', host + injectedPath);
  if (!!lang) {
    return injectedUrl.replace(':language', lang);
  }
  return injectedUrl;
}

export default injectRedirectPath;
