import InnloggetSide from './InnloggetSide';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Organisasjon } from '@navikt/bedriftsmeny/lib/organisasjon';
import { ArbeidsgiverProvider } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import ArbeidsgiverStatus from '../../context/arbeidsgiver/ArbeidsgiverStatus';

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

  const ARBEIDSGIVERE: Organisasjon[] = [
    {
      Name : 'STADLANDET OG SINGSÅS',
      Type : 'Enterprise',
      OrganizationForm : 'AS',
      OrganizationNumber : '911366940',
      Status : 'Active',
      ParentOrganizationNumber: ''
    },{
      Name : 'HØNEFOSS OG ØLEN',
      Type : 'Enterprise',
      OrganizationForm : 'AS',
      OrganizationNumber : '910020102',
      Status : 'Active',
      ParentOrganizationNumber: ''
    }];

  it('skal kun vise feilmelding dersom man ikke har rettigheter', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ArbeidsgiverProvider arbeidsgivere={[]} status={ArbeidsgiverStatus.Successfully} baseUrl={''}>
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
            <ArbeidsgiverProvider arbeidsgivere={ARBEIDSGIVERE} status={ArbeidsgiverStatus.Successfully} baseUrl={''}>
              <InnloggetSide>Barna</InnloggetSide>
            </ArbeidsgiverProvider>
        </MemoryRouter>
        , container
    );
    expect(container.textContent).not.toContain('Du har ikke rettigheter til å søke om refusjon for noen bedrifter');
    expect(container.textContent).toContain('INNLOGGET_SIDE_MIN_SIDE');
    expect(container.textContent).toContain('Barna');
    expect(container.textContent).toContain('InnloggetSideTittel');
  })

});
