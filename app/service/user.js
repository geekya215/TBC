'use strict';

const { Service } = require('egg');
const bcrypt = require('bcryptjs');

class UserService extends Service {

  async login(user) {
    const { ctx } = this;
    const { username, password } = user;
    const { password: hashed, address, role } = await ctx.model.User.findOne({ attributes: [ 'password', 'address', 'role' ], where: { username } });
    const cmp = await bcrypt.compare(password, hashed);
    return cmp ? { address, role } : '';
  }

  async register(user) {
    const { app, ctx } = this;
    const { password } = user;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    // unlock account for interact with contract
    const address = await app.web3.eth.personal.newAccount(password);
    await app.web3.eth.personal.unlockAccount(address, password, 0);

    const res = ctx.model.User.create({ ...user, password: hashed, address });
    return res;
  }

}

module.exports = UserService;
