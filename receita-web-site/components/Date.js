import { formatDistanceToNow, format } from 'date-fns';

const Date = ({ dateString }) => {
    return (
        <time dateTime={dateString}>
            {formatDistanceToNow(dataString)}
        </time>
    )
}

export default Date;
