'use strict';

const { Controller } = require('egg');
class UserController extends Controller {

  async login() {
    const { app, ctx } = this;
    const { username, password } = ctx.request.body;
    const address = await ctx.service.user.login({ username, password });
    if (address) {
      const token = app.jwt.sign({
        username,
        address,
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

  async info() {
    const { ctx } = this;
    const { username, address } = ctx.state.user;
    ctx.body = { username, address };
  }

}

module.exports = UserController;
