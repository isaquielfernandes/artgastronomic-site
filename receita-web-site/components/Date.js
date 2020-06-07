import { formatDistanceToNow, format } from 'date-fns';

const Date = ({ dateString }) => {
    return (
        <time dateTime={dateString}>
            {formatDistanceToNow(new Date(dataString))}
        </time>
    )
}

export default Date;
