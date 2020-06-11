'use strict';

const { Service } = require('egg');

class InformationService extends Service {

  async create(data, address) {
    const { ctx } = this;
    const res = ctx.model.Information.create({ mark_address: address, data });
    return res;
  }

  async update(mark_address, confirm_address) {
    const { ctx } = this;
    const res = ctx.model.Information.update({ confirm_address, confirm_at: new Date(), confirm: true }, { where: { mark_address } });
    return res;
  }

}

module.exports = InformationService;
