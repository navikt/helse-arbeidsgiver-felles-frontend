import React from 'react';

interface ArbeidsgiverProviderProps {
    children: React.ReactNode
}

export const ArbeidsgiverProvider = (props: ArbeidsgiverProviderProps) => {
    return (<div>{ props.children }</div>);
};
