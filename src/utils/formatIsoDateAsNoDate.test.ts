import formatIsoDateAsNoDate from './formatIsoDateAsNoDate';

describe('formatIsoDateAsNoDate', () => {
  it('shold format ISO date to NO', () => {
    expect(formatIsoDateAsNoDate('2022-11-22')).toBe('22.11.2022');
  });

  it('shold return an empty string when a non ISO string is given as param', () => {
    expect(formatIsoDateAsNoDate('12345')).toBe('');
  });
});
