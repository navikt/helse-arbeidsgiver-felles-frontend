import isNumericString from '../utils/isNumericString';
import ValidationResult from './ValidationResult';

export enum validateBeloepKeys {
  VALIDATE_BELOEP_AMOUNT_MISSING = 'VALIDATE_BELOEP_AMOUNT_MISSING',
  VALIDATE_BELOEP_AMOUNT_NOT_NUMERIC = 'VALIDATE_BELOEP_AMOUNT_NOT_NUMERIC',
  VALIDATE_BELOEP_AMOUNT_TOO_HIGH = 'VALIDATE_BELOEP_AMOUNT_TOO_HIGH'
}

export interface BeloepValidationResult extends ValidationResult {
  key:
    | validateBeloepKeys.VALIDATE_BELOEP_AMOUNT_MISSING
    | validateBeloepKeys.VALIDATE_BELOEP_AMOUNT_NOT_NUMERIC
    | validateBeloepKeys.VALIDATE_BELOEP_AMOUNT_TOO_HIGH;
}

const validateBeloep = (
  beloep: string | undefined,
  max: number,
  required: boolean = false
): BeloepValidationResult | undefined => {
  if (beloep === undefined || beloep.length === 0) {
    return required
      ? { key: validateBeloepKeys.VALIDATE_BELOEP_AMOUNT_MISSING }
      : undefined;
  }

  if (!isNumericString(beloep)) {
    return required
      ? { key: validateBeloepKeys.VALIDATE_BELOEP_AMOUNT_NOT_NUMERIC }
      : undefined;
  }

  if (parseInt(beloep) > max) {
    return required
      ? { key: validateBeloepKeys.VALIDATE_BELOEP_AMOUNT_TOO_HIGH }
      : undefined;
  }
  return undefined;
};

export default validateBeloep;
