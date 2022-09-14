/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import DatoVelger from './DatoVelger';
import { ArbeidsgiverProvider } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import ArbeidsgiverStatus from '../../context/arbeidsgiver/ArbeidsgiverStatus';

describe('DatoVelger', () => {
  it('skal vise datovelger uten feilmelding', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ArbeidsgiverProvider
          arbeidsgivere={[]}
          status={ArbeidsgiverStatus.Successfully}
          baseUrl=''
        >
          <DatoVelger
            label='dato-velger-label'
            onChange={() => {}}
            feilmelding={''}
          />
        </ArbeidsgiverProvider>
      </MemoryRouter>
    );
    expect(screen.getByLabelText('dato-velger-label')).toBeInTheDocument();
    expect(screen.queryByText('feilmelding')).not.toBeInTheDocument();
  });

  it('skal vise datovelger med feilmelding', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ArbeidsgiverProvider
          arbeidsgivere={[]}
          status={ArbeidsgiverStatus.Successfully}
          baseUrl=''
        >
          <DatoVelger
            label='dato-velger-label'
            onChange={() => {}}
            feilmelding={'feilmelding'}
          />
        </ArbeidsgiverProvider>
      </MemoryRouter>
    );
    expect(screen.getByLabelText('dato-velger-label')).toBeInTheDocument();
    expect(screen.getByText('feilmelding')).toBeInTheDocument();
  });
});
