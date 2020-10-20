import React from 'react';
import { ArbeidsgiverProvider } from './ArbeidsgiverContext';
import { render, unmountComponentAtNode } from 'react-dom';
import { Status } from '../api/ArbeidsgiverAPI';
import { MemoryRouter } from 'react-router-dom';

describe('ArbeidsgiverContext', () => {

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

  const mockWindowLocation = jest.fn();
  Object.defineProperty(window, 'location', {
    value: {
      hash: {
        endsWith: mockWindowLocation,
        includes: mockWindowLocation
      },
      assign: mockWindowLocation
    },
    writable: true
  });

  it('should show spinner immediately', async () => {
    render(<ArbeidsgiverProvider arbeidsgivere={[]} status={Status.NotStarted}>Barn</ArbeidsgiverProvider>, container);
    expect(container.textContent).toBe('Venter...');
    expect(container.textContent).not.toContain('Barn');
  })

  it('should show spinner when loading', async () => {
    render(<ArbeidsgiverProvider status={Status.Started}>Barn</ArbeidsgiverProvider>, container);
    expect(container.textContent).toBe('Venter...');
    expect(container.textContent).not.toContain('Barn');
  })


  it('should show error message', async () => {
    render(<ArbeidsgiverProvider status={Status.Error}>Barn</ArbeidsgiverProvider>, container);
    expect(container.textContent).toContain('Vi får akkurat nå ikke hentet alle data. (Kode 500)');
    expect(container.textContent).not.toContain('Barn');
  })

  it('should show alert when request timeout', async () => {
    render(
        <MemoryRouter initialEntries={['/']}>
          <ArbeidsgiverProvider status={Status.Timeout}>Barn</ArbeidsgiverProvider>
        </MemoryRouter>, container
    )
    expect(container.textContent).toContain('Vi får akkurat nå ikke hentet alle data. (Kode -1)');
    expect(container.textContent).not.toContain('Barn');
  })

  it('should show children when successful', async () => {
    render(
        <MemoryRouter initialEntries={['/']}>
          <ArbeidsgiverProvider status={Status.Successfully}>Barn</ArbeidsgiverProvider>
        </MemoryRouter>, container
    )
    expect(container.textContent).toBe('Barn');
  })

  it('should redirect to login page when unauthorized', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ArbeidsgiverProvider status={Status.Unauthorized}>Barn</ArbeidsgiverProvider>
      </MemoryRouter>, container
    )
    // @ts-ignore
    expect(container.firstChild.className).toBe('arbeidsgiver-provider-redirect');
    expect(container.textContent).not.toContain('Barn');
  })

})
