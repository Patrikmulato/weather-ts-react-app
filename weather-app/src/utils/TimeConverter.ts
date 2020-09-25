import moment from 'moment';
export const covertUnixToDate = (value: number) =>
  moment.unix(value).format('MMMM DD');
