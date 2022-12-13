import ValidationResult from './ValidationResult';
import { i18n } from 'i18next';

const formatValidation = (
  validationResult: ValidationResult | undefined,
  translate: i18n
): string | undefined => {
  if (!validationResult) {
    return;
  }
  if (validationResult.value === undefined) {
    const retval = translate.t(validationResult.key);

    return retval || undefined;
  }
  const retval = translate.t(validationResult.key, validationResult.value);
  return (retval as unknown as string) || undefined;
};

export default formatValidation;
