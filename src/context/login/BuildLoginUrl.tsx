export const buildLoginUrl = (loginServiceUrl: String) => {
  return (
    loginServiceUrl +
    '=' +
    document.location.href +
    (document.location.href.indexOf('?') ? '&' : '?') +
    'loggedIn=true'
  );
};
