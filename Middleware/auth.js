const allRoutesMiddleware = (req, res, next) => {
    console.log('This middleware is applicable to all routes.');
    next();
};

const specificRoutesMiddleware = (req, res, next) => {
    console.log('This middleware is applicable to specific routes.');
    next();
};
  
module.exports = [allRoutesMiddleware, specificRoutesMiddleware];
  