import dateToDato from './dateToDato';

describe('dateToDato', () => {
  it('should ', () => {
    const dato = dateToDato(new Date(2020, 4, 17));
    expect(dato.year).toBe(2020);
    expect(dato.month).toBe(5);
    expect(dato.day).toBe(17);
  });
});
