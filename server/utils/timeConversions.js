const convertTimeToTimestamp = (time) => {
    const date = new Date(time);
    return date.getTime();
}

const convertTimeStampToTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toISOString();
}

// const currentTime=new Date().getTime();
// console.log(convertTimeToTimestamp("2021-09-17T17:00:00.000Z"));
// console.log(convertTimeStampToTime(1631892000000));  

module.exports={
    convertTimeToTimestamp,
    convertTimeStampToTime
};