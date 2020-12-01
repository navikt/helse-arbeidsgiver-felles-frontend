import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from './LoginContext';

describe('LoginContext', () => {
  it('should redirect when not logged in', async () => {
    const rendered = render(
      <BrowserRouter>
        <LoginProvider loginServiceUrl="" loggedIn={false}>
          children
        </LoginProvider>
      </BrowserRouter>
    );
    expect(rendered.container).not.toContainHTML('children')
    expect(rendered.container).toContainHTML('login-context-redirect')
  });

  it('should show children when logged in', async () => {
    const rendered = render(
      <BrowserRouter>
        <LoginProvider loginServiceUrl="" loggedIn={true}>
          children
        </LoginProvider>
      </BrowserRouter>
    );
    expect(rendered.container).toContainHTML('children')
    expect(rendered.container).not.toContainHTML('login-context-redirect')
  });

});
