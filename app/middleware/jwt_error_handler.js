'use strict';

module.exports = (options, app) => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      if (err instanceof app.jwt.UnauthorizedError) {
        ctx.status = 401;
        ctx.body = err;
      } else {
        throw err;
      }
    }
  };
};
