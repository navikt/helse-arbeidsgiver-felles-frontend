import React from 'react';

interface ArbeidsgiverProviderProps {
    children: React.ReactNode
}

export const ArbeidsgiverContext = (props: ArbeidsgiverProviderProps) => {
    return (<div>{ props.children }</div>);
};
