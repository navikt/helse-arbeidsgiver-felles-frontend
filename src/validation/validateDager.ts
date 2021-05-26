import isNumericString from '../utils/isNumericString';
import { Dato } from '../utils/dato/Dato';
import dayjs from 'dayjs';
import { datoToString } from '../utils/dato/datoToString';
import ValidationResult from './ValidationResult';

export interface ValidateDagerResult extends ValidationResult {
  key: 'VALIDATE_DAGER_MISSING' | 'VALIDATE_DAGER_DIGITS_ONLY' | 'VALIDATE_DAGER_TOO_HIGH' | 'VALIDATE_DAGER_INVALID'
}

const validateDager = (
  dager: string | undefined,
  max: number,
  required: boolean | undefined,
  fra: Dato | undefined,
  til: Dato | undefined
): ValidateDagerResult | undefined => {
  if (!required) {
    return undefined;
  }
  if (dager === undefined || dager.length === 0) {
    return { key: 'VALIDATE_DAGER_MISSING' };
  }

  if (!isNumericString(dager)) {
    return { key: 'VALIDATE_DAGER_DIGITS_ONLY' };
  }

  if (parseInt(dager) > max) {
    return { key: 'VALIDATE_DAGER_TOO_HIGH' };
  }

  if (
    fra &&
    til &&
    parseInt(dager) > dayjs(datoToString(til), 'DD.MM.YYYY').diff(dayjs(datoToString(fra), 'DD.MM.YYYY'), 'day') + 1
  ) {
    return { key: 'VALIDATE_DAGER_INVALID' };
  }
  return undefined
};

export default validateDager;
