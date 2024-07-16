// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//     }
// }

// module.exports={asyncHandler};

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        // console.log('Request received:', req.method, req.url);
        // console.log('Next function:', next);
        Promise.resolve(requestHandler(req, res, next)).catch((err) => {
            console.error('Error caught in asyncHandler:', err);
            next(err);
        });
    };
};

module.exports = { asyncHandler };
