import { formatDistanceToNow, format } from 'date-fns';

const Date = ({ dateString }) => {
    return (
        <time>
            {formatDistanceToNow(new Date(dataString))}
        </time>
    )
}

export default Date;
