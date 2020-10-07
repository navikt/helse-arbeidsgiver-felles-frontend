import React, { createContext, useContext, useState } from 'react';

interface EnvironmentProps {
  children: React.ReactNode;
  loginServiceUrl: string
}

interface EnvironmentInterface {
  loginServiceUrl: string;
  setLoginServiceUrl: any;
}

const EnvironmentContext = createContext({} as EnvironmentInterface);

const EnvironmentProvider = (props: EnvironmentProps) => {
  const [ loginServiceUrl, setLoginServiceUrl ] = useState<string>(props.loginServiceUrl);
  return (<EnvironmentContext.Provider value={{ loginServiceUrl, setLoginServiceUrl }}>{ props.children }</EnvironmentContext.Provider>);
};

const useEnvironment = () => useContext(EnvironmentContext);

export { EnvironmentProvider, useEnvironment };
