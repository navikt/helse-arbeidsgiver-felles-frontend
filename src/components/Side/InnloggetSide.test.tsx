import InnloggetSide from './InnloggetSide';
import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { ArbeidsgiverProvider } from '../../context/arbeidsgiver/ArbeidsgiverContext';
import ArbeidsgiverStatus from '../../context/arbeidsgiver/ArbeidsgiverStatus';
import testOrganisasjoner from '../../mock/testOrganisasjoner';

describe('InnloggetSide', () => {
  let container: Element = document.createElement('div');

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = document.createElement('div');
  });

  it('skal kun vise feilmelding dersom man ikke har rettigheter', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ArbeidsgiverProvider
          arbeidsgivere={[]}
          status={ArbeidsgiverStatus.Successfully}
          baseUrl={''}
        >
          <InnloggetSide sideTittel={'Sidetittel'}>
            Barna
          </InnloggetSide>
        </ArbeidsgiverProvider>
      </MemoryRouter>,
      container
    );
    expect(container.textContent).toContain('INGENTILGANGADVARSEL');
    expect(container.textContent).not.toContain('INNLOGGET_SIDE_MIN_SIDE');
    expect(container.textContent).not.toContain('Barna');
  });

  it('skal vise innhold dersom man har rettigheter', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ArbeidsgiverProvider
          arbeidsgivere={testOrganisasjoner}
          status={ArbeidsgiverStatus.Successfully}
          baseUrl={''}
        >
          <InnloggetSide sideTittel={'InnloggetSideTittel'}>
            Barna
          </InnloggetSide>
        </ArbeidsgiverProvider>
      </MemoryRouter>,
      container
    );
    expect(container.textContent).not.toContain('INGENTILGANGADVARSEL');
    expect(container.textContent).toContain('INNLOGGET_SIDE_MIN_SIDE');
    expect(container.textContent).toContain('Barna');
  });
});
