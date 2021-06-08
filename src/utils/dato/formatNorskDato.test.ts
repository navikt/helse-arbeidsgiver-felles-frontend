import formatNorskDato from './formatNorskDato';

describe('formatNorskDato', () => {
  it('should format correctly', () => {
    expect(formatNorskDato(19, 3, 2021)).toBe('19.03.2021');
    expect(formatNorskDato(1, 1, 2001)).toBe('01.01.2001');
  });
});
