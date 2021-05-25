import isNumericString from '../utils/isNumericString';
import ValidationResult from './ValidationResult';

export interface BeloepValidationResult extends ValidationResult {
  key: 'VALIDATEBELOEP_AMOUNT_MISSING' | 'VALIDATEBELOEP_AMOUNT_NOT_NUMERIC' | 'VALIDATEBELOEP_AMOUNT_TOO_HIGH'
}

const validateBeloep = (
  beloep: string | undefined,
  max: number,
  required: boolean = false
): BeloepValidationResult | undefined => {
  if (beloep === undefined || beloep.length === 0) {
    return required ? { key: 'VALIDATEBELOEP_AMOUNT_MISSING' } : undefined;
  }

  if (!isNumericString(beloep)) {
    return required ? { key: 'VALIDATEBELOEP_AMOUNT_NOT_NUMERIC' } : undefined;
  }

  if (parseInt(beloep) > max) {
    return required ? { key: 'VALIDATEBELOEP_AMOUNT_TOO_HIGH' } : undefined;
  }
  return
};

export default validateBeloep;
