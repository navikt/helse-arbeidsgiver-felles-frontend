import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import LoggetUtAdvarsel from './LoggetUtAdvarsel';
import { Router } from 'react-router-dom';
import mockHistory from '../../mock/mockHistory';

describe('LoggetUtAdvarsel', () => {
  it('should display the modal if the token is invalid', () => {
    render(
      <Router history={mockHistory('/')}>
        <LoggetUtAdvarsel
          onClose={jest.fn()}
          loginServiceUrl={''}
          tokenFornyet={''}
        />
      </Router>
    );
    expect(
      screen.getByText('LOGGET_UT_ADVARSEL_LOGGET_UT')
    ).toBeInTheDocument();
  });

  it('should display the modal if the token is invalid and close it when close is clicked', () => {
    const mockCallback = jest.fn();
    render(
      <Router history={mockHistory('/')}>
        <LoggetUtAdvarsel
          onClose={mockCallback}
          loginServiceUrl={''}
          tokenFornyet={''}
        />
      </Router>
    );
    const closeLink = screen.getByText('LOGGET_UT_ADVARSEL_LOGIN');
    expect(
      screen.getByText('LOGGET_UT_ADVARSEL_LOGGET_UT')
    ).toBeInTheDocument();
    fireEvent.click(closeLink);
    expect(mockCallback).toHaveBeenCalled();
  });
});
