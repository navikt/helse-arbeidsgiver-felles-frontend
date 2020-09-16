import React from 'react';
import './Side.sass';

interface SideProps {
    children: React.ReactNode
}

export const dummy = (a:number, b:number) => {
    return a * b + 100;
}

export const Side = (props: SideProps) => {
    return (<div className='side'>{ props.children }</div>);
};
