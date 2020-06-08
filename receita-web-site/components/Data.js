import { parseISO, formatISO, formatDistanceToNow, format } from 'date-fns';
import pt from 'date-fns/locales/pt';

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	dd, yyyy')}</time>
}
