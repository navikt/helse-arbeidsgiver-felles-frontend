import React from 'react';
import { translateUrl } from './LanguageContext';

describe('LanguageContext', () => {
  it('skal vise oversette url', () => {
    expect(
      translateUrl(
        'http://localhost:3000/grensekomp/nb/innsending?bedrift=810007842',
        'en'
      )
    ).toContain(
      'http://localhost:3000/grensekomp/en/innsending?bedrift=810007842'
    );
  });
});
