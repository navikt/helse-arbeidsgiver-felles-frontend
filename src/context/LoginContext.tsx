import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

export const buildLoginContext = (loggedIn: boolean) => ({
  loggedIn: loggedIn,
  setLoggedIn: (isLoggedIn: boolean) => {}
})

const LoginContext = createContext(buildLoginContext(false));

interface LoginContextProviderProps {
  children: any
  loggedIn?: boolean
  loginServiceUrl: string
}

export const useLogin = () => useContext(LoginContext);

export const isLoggedInFromUrl = () => window.location.search.indexOf('loggedIn=true') > -1;

export const LoginProvider = (props: LoginContextProviderProps) => {
  const [ loggedIn, setLoggedIn ]  = useState<boolean>(props.loggedIn || isLoggedInFromUrl());
  const history: History = useHistory();
  if (!loggedIn) {
    window.location.href = props.loginServiceUrl;
    return <div className="login-context-redirect" />;
  }
  history.push('/');
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      { props.children }
    </LoginContext.Provider>
  )
}
