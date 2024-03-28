function testMiddleware(req, res, next) {
    console.log('Testing Middleware...');
    next();
}

module.exports = testMiddleware;
