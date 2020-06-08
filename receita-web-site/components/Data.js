import { parseISO, formatISO, formatDistanceToNow, format } from 'date-fns';

import { , format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
