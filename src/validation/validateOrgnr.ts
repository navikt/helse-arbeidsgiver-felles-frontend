import ValidationResult from './ValidationResult';
import isValidOrgnr from './isValidOrgnr';

export interface ValidateOrgNrResult extends ValidationResult {
  key: 'VALIDATE_ORGNR_MISSSING' | 'VALIDATE_ORGNR_INVALID'
}

export const validateOrgnr = (orgnr?: string, required: boolean = false): ValidateOrgNrResult | undefined => {
  if (orgnr == undefined || orgnr == '') {
    return required ? { key: 'VALIDATE_ORGNR_MISSSING' } : undefined;
  }
  if (!isValidOrgnr(orgnr)) {
    return required ? { key: 'VALIDATE_ORGNR_INVALID' } : undefined;
  }
  return undefined
};

export default validateOrgnr
