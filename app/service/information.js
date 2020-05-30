'use strict';

const { Service } = require('egg');

class InformationService extends Service {

  async create(data) {
    const { ctx } = this;
    const { address } = ctx.state.user;
    const res = ctx.model.Information.create({ address, data });
    return res;
  }

  async update(data) {
    const { ctx } = this;
    const { address } = ctx.state.user;
    const res = ctx.model.Information.update({ data }, { where: { address } });
    return res;
  }

}

module.exports = InformationService;
