import React from 'react';
import { EnvironmentProvider, useEnvironment } from './EnvironmentContext';
import { render, screen } from '@testing-library/react';

describe('EnvironmentContext', () => {

  const Test = () => {
    return (<div>{useEnvironment().loginServiceUrl}</div>);
  }

  it('should show correct URL', async () => {
    render(<EnvironmentProvider loginServiceUrl="http://www.nav.no"><Test/></EnvironmentProvider>);
    expect(screen.getByText('http://www.nav.no'));
  })

})
