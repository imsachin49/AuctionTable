import moment from "moment";

export const formatTime = (time: number) => {
    const formattedDate = moment(time).format('MM DD YYYY, hh:mm:ss');
    const relativeTime = moment(formattedDate).fromNow();
    return relativeTime;
}