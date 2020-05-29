'use strict';

const { Service } = require('egg');
const bcrypt = require('bcryptjs');

class UserService extends Service {

  async login(user) {
    const { ctx } = this;
    const { username, password } = user;
    const res = await ctx.model.User.findOne({ attributes: [ 'password', 'address' ], where: { username } });
    const cmp = await bcrypt.compare(password, res.password);
    return cmp ? res.address : '';
  }

  async register(user) {
    const { app, ctx } = this;
    const { password } = user;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const { address, privateKey } = app.web3.eth.accounts.create();
    const res = ctx.model.User.create({ ...user, password: hashed, address, private_key: privateKey });
    return res;
  }

}

module.exports = UserService;
