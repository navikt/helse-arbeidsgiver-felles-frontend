import React from 'react';
import './Side.sass';

interface SideProps {
    children: React.ReactNode
}

export const tull = () => {
    return 'Tullete';
}

export const tull2 = () => {
    return 'Tullete';
}

export const tull3 = () => {
    return 'Tullete';
}

export const ganging = (a: number, b: number) => {
    return a * b;
}

export const Side = (props: SideProps) => {
    return (<div className='side'>{ props.children ? props.children : 'Tull' }</div>);
};
