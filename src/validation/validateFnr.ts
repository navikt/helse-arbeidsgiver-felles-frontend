import isValidFnr from '../utils/isValidFnr';
import ValidationResult from './ValidationResult';

export interface FnrValidationResult extends ValidationResult {
  key: 'VALIDATE_FNR_MISSING' | 'VALIDATE_FNR_INVALID'
}

export const validateFnr = (orgnr?: string, required: boolean = false): FnrValidationResult | undefined => {
  if (orgnr == undefined || orgnr == '') {
    return required ? { key: 'VALIDATE_FNR_MISSING' } : undefined;
  }
  if (!isValidFnr(orgnr)) {
    return required ? { key: 'VALIDATE_FNR_INVALID' } : undefined;
  }
  return
};
