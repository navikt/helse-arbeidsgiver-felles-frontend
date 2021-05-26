import { render, unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import DatoVelger from './DatoVelger';
import { ArbeidsgiverProvider } from "../../context/arbeidsgiver/ArbeidsgiverContext";
import ArbeidsgiverStatus from "../../context/arbeidsgiver/ArbeidsgiverStatus";

describe('DatoVelger', () => {

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

  it('skal vise datovelger uten feilmelding', () => {

    render(
      <MemoryRouter initialEntries={['/']}>
        <ArbeidsgiverProvider arbeidsgivere={[]} status={ArbeidsgiverStatus.Successfully} baseUrl=''>
          <DatoVelger label='dato-velger-label' onChange={() => {}} feilmelding={''}/>
        </ArbeidsgiverProvider>
      </MemoryRouter>
      , container
    );
    expect(container.textContent).toContain('dato-velger-label');
    expect(container.textContent).not.toContain('feilmelding');
  })

  it('skal vise datovelger med feilmelding', () => {

    render(
      <MemoryRouter initialEntries={['/']}>
        <ArbeidsgiverProvider arbeidsgivere={[]} status={ArbeidsgiverStatus.Successfully} baseUrl=''>
          <DatoVelger label='dato-velger-label' onChange={() => {}} feilmelding={'feilmelding'}/>
        </ArbeidsgiverProvider>
      </MemoryRouter>
      , container
    );
    expect(container.textContent).toContain('dato-velger-label');
    expect(container.textContent).toContain('feilmelding');
  })

});
