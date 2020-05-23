'use strict';

const { Service } = require('egg');
const bcrypt = require('bcryptjs');

class UserService extends Service {

  async login(user) {
    const { ctx } = this;
    const { username, password } = user;
    const res = await ctx.model.User.findOne({ attributes: [ 'password' ], where: { username } });
    const cmp = await bcrypt.compare(password, res.password);
    return cmp;
  }

  async register(user) {
    const { ctx } = this;
    const { password } = user;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const res = ctx.model.User.create({ ...user, password: hashed });
    return res;
  }

}

module.exports = UserService;
