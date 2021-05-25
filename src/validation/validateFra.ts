import { Dato } from '../utils/dato/Dato';
import isBeforeMinDate from '../utils/isBeforeMinDate';
import ValidationResult from './ValidationResult';

export interface ValidateFraResult extends ValidationResult {
  key: 'VALIDATE_FRA_MISSING' | 'VALIDATE_FRA_FOM_INVALID' | 'VALIDATE_FRA_FOM_ERROR'
}

export const validateFra = (fra: Dato | undefined, minDate: Date, required: boolean = false): ValidateFraResult | undefined => {
  if (required && !fra?.value) {
    return { key: 'VALIDATE_FRA_MISSING' };
  }

  if (required && fra?.value && isBeforeMinDate(fra, minDate)) {
    return {
      key: 'VALIDATE_FRA_FOM_INVALID',
      value: minDate.toLocaleDateString('nb')
    };
  }

  if (fra && fra.error) {
    return required ? { key: 'VALIDATE_FRA_FOM_ERROR' } : undefined;
  }
  return
};

export default validateFra;
