import React from 'react';
import { buildLoginUrl } from './BuildLoginUrl';

describe('BuildLoginUrl', () => {
  beforeEach(() => {
    document.location.href =
      'https://arbeidsgiver.nav.no/fritak-agp/nb/gravid/soknad';
  });

  it('should redirect to loginProvider', () => {
    expect(buildLoginUrl('https://loginservice.nav.no/login?redirect')).toBe(
      'https://loginservice.nav.no/login?redirect=http://localhost/&loggedIn=true'
    );
  });
});
