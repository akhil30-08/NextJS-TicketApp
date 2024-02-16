import { format } from 'date-fns';

export const BASE_URL = process.env.NEXTJS_URL ?? 'http://localhost:3000';

export const formatDate = (date) => {
  const result = format(date, 'dd/MM/yyyy hh:mm a');
  return result;
};
