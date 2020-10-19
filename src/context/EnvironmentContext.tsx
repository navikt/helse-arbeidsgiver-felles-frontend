import React, { createContext, useContext, useState } from 'react';

interface EnvironmentProps {
  children: React.ReactNode
  loginServiceUrl: string
  sideTittel: string
}

interface EnvironmentInterface {
  loginServiceUrl: string
  setLoginServiceUrl: any
  sideTittel: string
  setSideTittel: any
}

const EnvironmentContext = createContext({} as EnvironmentInterface);

const EnvironmentProvider = (props: EnvironmentProps) => {
  const [ loginServiceUrl, setLoginServiceUrl ] = useState<string>(props.loginServiceUrl);
  const [ sideTittel, setSideTittel ] = useState<string>(props.sideTittel);
  return (<EnvironmentContext.Provider value={{ loginServiceUrl, setLoginServiceUrl, sideTittel, setSideTittel }}>{ props.children }</EnvironmentContext.Provider>);
};

const useEnvironment = () => useContext(EnvironmentContext);

export { EnvironmentProvider, useEnvironment };
