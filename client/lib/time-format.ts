import moment from 'moment';

export const formatTime = (time: number) => {
    const relativeTime = moment(time).fromNow();
    return relativeTime;
}