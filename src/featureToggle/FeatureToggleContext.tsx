import React, { createContext, useState, useEffect, useContext } from 'react';
import fetchFeatureToggles from './fetchFeatureToggles';
import { FeatureToggles } from './featureToggleInterface';

interface FeatureToggleProps {
  children: React.ReactNode,
  toggleServerUrl: string
  toggleDefaults: FeatureToggles,
}

const FeatureToggleContext = createContext({});

const FeatureToggleProvider = (props: FeatureToggleProps) => {
  const [ toggleFlags, setToggleFlags ] = useState<FeatureToggles>(props.toggleDefaults);

  useEffect(() => {
    const fetchFlags = async  () => {
      if (props.toggleDefaults) {
        const fetchedToggleFlags: any = await fetchFeatureToggles(props.toggleServerUrl, props.toggleDefaults);
        setToggleFlags(fetchedToggleFlags);
      }
    }

    fetchFlags();
  }, [props.toggleDefaults])

  return (<FeatureToggleContext.Provider value={toggleFlags}>{ props.children }</FeatureToggleContext.Provider>);
};

export default FeatureToggleProvider;

export const useFeatureToggle = () => useContext(FeatureToggleContext);