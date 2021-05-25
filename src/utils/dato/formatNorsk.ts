import zeroPadding from './zeroPadding';

const formatNorsk = (day: number, month: number, year: number) => `${zeroPadding(day)}.${zeroPadding(month)}.${zeroPadding(year)}`;

export default formatNorsk;
