import { format } from 'date-fns';

const Date = ({ dateString }) => {
    return (
        <time>
            {format(new Date(dataString), 'LLLL    d, yyyy')}
        </time>
    )
}

export default Date;