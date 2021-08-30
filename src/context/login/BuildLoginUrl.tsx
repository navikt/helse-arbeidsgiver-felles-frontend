export const buildLoginUrl = (loginServiceUrl: String) => {
  if (document.location.href.indexOf('?')) {
    return loginServiceUrl + '=' + document.location.href + '&loggedIn=true';
  } else {
    return loginServiceUrl + '=' + document.location.href + '?loggedIn=true';
  }
};
