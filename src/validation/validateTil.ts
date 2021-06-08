import Dato from '../utils/dato/Dato';
import isBeforeDate from '../utils/dato/isBeforeDate';
import ValidationResult from './ValidationResult';

export interface ValidateTilResult extends ValidationResult {
  key: 'VALIDATE_TIL_MISSING' | 'VALIDATE_TIL_INVALID' | 'VALIDATE_TIL_FOM_ERROR' | 'VALIDATE_TIL_ERROR'| 'VALIDATE_TIL_TOO_EARLY'
}

const validateTil = (
  fra: Dato | undefined,
  til: Dato | undefined,
  minDate: Date,
  required: boolean = false
): ValidateTilResult | undefined => {
  if (!til?.value) {
    return required ? { key: 'VALIDATE_TIL_MISSING' } : undefined;
  }

  if (required && til?.value && isBeforeDate(til, minDate)) {
    return {
      key: 'VALIDATE_TIL_INVALID',
      value: minDate.toLocaleDateString('nb')
    };
  }

  if (!fra || !til) {
    return undefined;
  }

  if (!required) {
    return;
  }
  if (fra.error || !fra.millis) {
    return { key: 'VALIDATE_TIL_FOM_ERROR' };
  }
  if (til.error || !til.millis) {
    return { key: 'VALIDATE_TIL_ERROR' };
  }
  if (fra.millis > til.millis) {
    return { key: 'VALIDATE_TIL_TOO_EARLY' };
  }
  return undefined
};

export default validateTil;
