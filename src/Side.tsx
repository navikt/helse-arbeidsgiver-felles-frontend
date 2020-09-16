import React from 'react';
import './Side.sass';

interface SideProps {
    children: React.ReactNode
}

export const tull = () => {
    return 'Tullete';
}

export const Side = (props: SideProps) => {
    return (<div className='side'>{ props.children ? props.children : 'Tull' }</div>);
};
