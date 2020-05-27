'use strict';

const { Controller } = require('egg');
class UserController extends Controller {

  async login() {
    const { app, ctx } = this;
    const { username, password } = ctx.request.body;
    const res = await ctx.service.user.login({ username, password });
    if (res) {
      const token = app.jwt.sign({
        username,
      }, app.config.jwt.secret);
      ctx.body = { token };
    } else {
      ctx.status = 401;
    }
  }

  async register() {
    const { ctx } = this;
    const { username, password, role } = ctx.request.body;
    try {
      await ctx.service.user.register({ username, password, role });
      ctx.status = 201;
    } catch (e) {
      ctx.status = 409;
    }
  }
}

module.exports = UserController;
