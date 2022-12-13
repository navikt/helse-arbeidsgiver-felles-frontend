import formatValidation from './formatValidation';
import ValidationResult from './ValidationResult';
import { i18n } from 'i18next';

const translationMock = {
  t: (...param: any) => param
};
describe('formatValidation', () => {
  it('should hopp for bare key', () => {
    const result: ValidationResult = {
      key: 'hopp'
    };

    expect(
      formatValidation(result, translationMock as unknown as i18n)
    ).toEqual(['hopp']);
  });

  it('should return undefined for undefined inn', () => {
    const result = undefined;

    expect(
      formatValidation(result, translationMock as unknown as i18n)
    ).toBeUndefined();
  });

  it('should return hopp for key + value inn', () => {
    const result: ValidationResult = {
      key: 'hopp',
      value: 'sprett'
    };

    expect(
      formatValidation(result, translationMock as unknown as i18n)
    ).toEqual(['hopp', 'sprett']);
  });
});
