import React from 'react';
import { EnvironmentProvider, useEnvironment } from './EnvironmentContext';
import { render, screen } from '@testing-library/react';

describe('EnvironmentContext', () => {

  const LoginServiceComponent = () => {
    return (<div>{useEnvironment().loginServiceUrl}</div>);
  }

  it('should show correct URL', async () => {
    render(<EnvironmentProvider loginServiceUrl="http://www.nav.no" sideTittel={"Dummy"}><LoginServiceComponent/></EnvironmentProvider>);
    expect(screen.getByText('http://www.nav.no'));
  })

  const TittelComponent = () => {
    return (<div>{useEnvironment().sideTittel}</div>);
  }


  it('should show correct URL', async () => {
    render(<EnvironmentProvider loginServiceUrl="Dummy" sideTittel={"Hello NAV"}><TittelComponent/></EnvironmentProvider>);
    expect(screen.getByText('Hello NAV'));
  })

})
