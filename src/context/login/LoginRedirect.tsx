import React from 'react';
import { redirectUrl } from './redirectUrl';

export const LoginRedirect = (loginServiceUrl: string) => {
  window.location.href = redirectUrl(loginServiceUrl, window.location.href);
  return <div className='login-redirect' />;
};
