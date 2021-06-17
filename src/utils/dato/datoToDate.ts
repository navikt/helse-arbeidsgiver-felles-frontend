import Dato from './Dato';

export const datoToDate = (dato: Dato | undefined): Date | undefined => {
  if (!dato) {
    return;
  }
  if (!dato.month || !dato.day || !dato.year) {
    return;
  }
  return new Date(dato.year, dato.month - 1, dato.day);
};

export default datoToDate;
