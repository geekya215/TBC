'use strict';

const { Service } = require('egg');

class UserService extends Service {

  async login(user) {
    const { ctx } = this;
    const res = ctx.model.User.findOne({ where: { ...user } });
    return res;
  }

  async register(user) {
    const { ctx } = this;
    const res = ctx.model.User.create({ ...user });
    return res;
  }

}

module.exports = UserService;
