import zeroPadding from './zeroPadding';

const formatNorskDato = (day: number, month: number, year: number) =>
  `${zeroPadding(day)}.${zeroPadding(month)}.${zeroPadding(year)}`;

export default formatNorskDato;
