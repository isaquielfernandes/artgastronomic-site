import { formatISO, formatDistanceToNow, format } from 'date-fns';

export default function Date({ dateString }) {
  return (
    <time dateTime={dateString}>
      {formatISO(dateString, { representation: 'date' })}
    </time>
  )
}

