import moment from 'moment';

export const formatTime = (time: number) => {
    const relativeTime = moment(time).fromNow();
    return relativeTime;
}

export function formatDate(milliseconds:number) {
    const date = new Date(milliseconds);

    // Array of month names
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Get individual components of the date
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Format the date and time
    return `${day} ${month} ${year} ${hours}-${minutes}-${seconds}`;
}