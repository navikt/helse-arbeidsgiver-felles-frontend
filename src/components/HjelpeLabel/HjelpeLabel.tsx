import React from 'react';
import Hjelpetekst from 'nav-frontend-hjelpetekst';

interface HjelpeLabelProps {
  label: string;
  children: any;
}

const HjelpeLabel = (props: HjelpeLabelProps) => (
  <div style={{ display: 'flex' }}>
    {props.label}
    <Hjelpetekst style={{ marginLeft: '0.5rem' }}>{props.children}</Hjelpetekst>
  </div>
);

export default HjelpeLabel;
