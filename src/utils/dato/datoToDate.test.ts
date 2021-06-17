import { datoToDate } from './datoToDate';
import Dato from './Dato';

describe('datoToDate', () => {
  it('should map toString', () => {
    expect(
      datoToDate({ year: 2020, month: 10, day: 5 } as Dato)!.getTime()
    ).toBe(new Date(2020, 9, 5).getTime());
  });

  it('should not allow missing day', () => {
    expect(datoToDate({ year: 2020, month: 10 } as Dato)).toBeUndefined();
  });
  it('should not allow missing month', () => {
    expect(datoToDate({ year: 2020, day: 10 } as Dato)).toBeUndefined();
  });
  it('should not allow missing year', () => {
    expect(datoToDate({ day: 5, month: 10 } as Dato)).toBeUndefined();
  });
  it('should not allow missing', () => {
    expect(datoToDate({} as Dato)).toBeUndefined();
  });
});
