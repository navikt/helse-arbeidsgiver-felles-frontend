import React, { createContext, useContext, useState } from 'react';

interface TokenExpired {
  tokenExpired: boolean,
  setTokenExpired
}

export const buildAppStoreContext = () => ({
  tokenExpired: false,
  setTokenExpired: function(tokenExpired: boolean) {}
}) as TokenExpired

const TokenExpiredContext = createContext(buildAppStoreContext());

interface AppStoreContextProviderProps {
  children: any,
  tokenExpired?: boolean
}

export const useTokenExpired = () => useContext(TokenExpiredContext);

const AppStoreProvider = (props: AppStoreContextProviderProps) => {
  const [ tokenExpired, setTokenExpired ] = useState<boolean>(props.tokenExpired || false);
  return (
    <TokenExpiredContext.Provider value={{ tokenExpired, setTokenExpired }}>
      { props.children }
    </TokenExpiredContext.Provider>
  )
}

export default AppStoreProvider;
