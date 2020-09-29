import React from 'react'
import InnloggetSide from './InnloggetSide';
import { render, unmountComponentAtNode } from 'react-dom';
import { ArbeidsgiverProvider } from '..';
import { Status } from '../api/ArbeidsgiverAPI';
import { MemoryRouter } from 'react-router-dom';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';

describe('InnloggetSide', () => {

  let container:Element = document.createElement('div');

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = document.createElement('div');
  });

  const ARBEIDSGIVERE = [
    {
      'Name' : 'STADLANDET OG SINGSÅS',
      'Type' : 'Enterprise',
      'OrganizationForm' : 'AS',
      'OrganizationNumber' : '911366940',
      'Status' : 'Active'
    } as Organisasjon, {
      'Name' : 'HØNEFOSS OG ØLEN',
      'Type' : 'Enterprise',
      'OrganizationForm' : 'AS',
      'OrganizationNumber' : '910020102',
      'Status' : 'Active'
    } as Organisasjon];

  it('skal kun vise feilmelding dersom man ikke har rettigheter', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ArbeidsgiverProvider arbeidsgivere={[]} status={Status.Successfully}>
          <InnloggetSide>Barna</InnloggetSide>
        </ArbeidsgiverProvider>
      </MemoryRouter>
      , container
    );
    expect(container.textContent).toContain('Du har ikke rettigheter til å søke om refusjon for noen bedrifter');
    expect(container.textContent).not.toContain('Min side arbeidsgiver');
    expect(container.textContent).not.toContain('Barna');
    expect(container.textContent).not.toContain('Sidetittel');
  })

  it('skal vise innhold dersom man har rettigheter', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
          <ArbeidsgiverProvider arbeidsgivere={ARBEIDSGIVERE} status={Status.Successfully}>
            <InnloggetSide>Barna</InnloggetSide>
          </ArbeidsgiverProvider>
        </MemoryRouter>
        , container
    );
    expect(container.textContent).not.toContain('Du har ikke rettigheter til å søke om refusjon for noen bedrifter');
    expect(container.textContent).toContain('Min side arbeidsgiver');
    expect(container.textContent).toContain('Barna');
    expect(container.textContent).toContain('Sidetittel');
  })

});