import ValidationResult from './ValidationResult';

const validateBekreft = (bekreft?: boolean, required: boolean = false): ValidationResult | undefined => {
  if (required === false) {
    return;
  }
  if (bekreft !== true) {
    return {
      key: 'VALIDATE_BEKREFT_NOT_CHECKED'
    };
  }
  return undefined
};

export default validateBekreft;
