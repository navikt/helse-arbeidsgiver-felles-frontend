import Dato from '../utils/dato/Dato';
import isBeforeDate from '../utils/dato/isBeforeDate';
import ValidationResult from './ValidationResult';

export interface ValidateFraResult extends ValidationResult {
  key: 'VALIDATE_FRA_MISSING' | 'VALIDATE_FRA_FOM_INVALID' | 'VALIDATE_FRA_FOM_ERROR'
}

export const validateFra = (fra: Dato | undefined, minDate: Date, required: boolean = false): ValidateFraResult | undefined => {
  if (required && !fra?.value) {
    return { key: 'VALIDATE_FRA_MISSING' };
  }

  if (required && fra?.value && isBeforeDate(fra, minDate)) {
    return {
      key: 'VALIDATE_FRA_FOM_INVALID',
      value: minDate.toLocaleDateString('nb')
    };
  }

  if (fra && fra.error) {
    return required ? { key: 'VALIDATE_FRA_FOM_ERROR' } : undefined;
  }
  return undefined
};

export default validateFra;
