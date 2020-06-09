'use strict';

const { Service } = require('egg');
const bcrypt = require('bcryptjs');

class ProfileService extends Service {

  async updateAccountProfile(address, password) {
    const { ctx } = this;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const res = ctx.model.User.update({ password: hashed, updated_at: new Date() }, { where: { address } });
    return res;
  }

  async createBasicProfile(data, address, role) {
    const { ctx } = this;
    let res = null;
    if (role === 'talent') {
      res = ctx.model.Talent.create({ ...data, address, updated_at: new Date() });
    } else if (role === 'enterprise') {
      res = ctx.model.Enterprise.create({ ...data, address, updated_at: new Date() });
    } else {
      res = ctx.model.University.create({ ...data, address, updated_at: new Date() });
    }
    return res;
  }

  async getBasicProfile(address, role) {
    const { ctx } = this;
    let res = null;

    if (role === 'talent') {
      res = ctx.model.Talent.findOne({
        attributes: [ 'sex', 'birthday', 'mobile', 'description' ],
        where: { address },
        raw: true,
      });
    } else if (role === 'enterprise') {
      res = ctx.model.Enterprise.findOne({
        attributes: [ 'site', 'telephone', 'description' ],
        where: { address },
        raw: true,
      });
    } else {
      res = ctx.model.University.findOne({
        attributes: [ 'site', 'telephone', 'description' ],
        where: { address },
        raw: true,
      });
    }
    return res;
  }

  async updateBasicProfile(data, address, role) {
    const { ctx } = this;
    let res = null;
    if (role === 'talent') {
      res = ctx.model.Talent.update({
        ...data, updated_at: new Date(),
      }, {
        where: { address },
      });
    } else if (role === 'enterprise') {
      res = ctx.model.Enterprise.update({
        ...data, updated_at: new Date(),
      }, {
        where: { address },
      });
    } else {
      res = ctx.model.University.update({
        ...data, updated_at: new Date(),
      }, {
        where: { address },
      });
    }
    return res;
  }

}

module.exports = ProfileService;
