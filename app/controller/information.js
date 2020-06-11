'use strict';

const { Controller } = require('egg');

class InformationController extends Controller {

  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    const { address } = ctx.state.user;
    try {
      await ctx.service.information.create(data, address);
      // use bonus later
      // await app.contract.methods.bonus().send({ from: address });
      ctx.status = 201;
    } catch (e) {
      ctx.status = 400;
    }
  }

  async update() {
    const { ctx } = this;
    const { mark_address } = ctx.request.body;
    const { address } = ctx.state.user;
    try {
      await ctx.service.information.update(mark_address, address);
      // / use tax later
      // await app.contract.methods.tax().send({ from: address });
      ctx.status = 204;
    } catch (e) {
      ctx.status = 400;
    }
  }

}

module.exports = InformationController;
