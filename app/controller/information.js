'use strict';

const { Controller } = require('egg');

class InformationController extends Controller {

  async create() {
    const { app, ctx } = this;
    const { data } = ctx.request.body;
    const { address } = ctx.state.user;
    try {
      await ctx.service.information.create(data);
      await app.contract.methods.bonus().send({ from: address });
      ctx.status = 200;
    } catch (e) {
      ctx.status = 400;
    }
  }

  async update() {
    const { app, ctx } = this;
    const { data } = ctx.request.body;
    const { address } = ctx.state.user;
    try {
      await ctx.service.information.update(data);
      await app.contract.methods.tax().send({ from: address });
      ctx.status = 200;
    } catch (e) {
      ctx.status = 400;
    }
  }

}

module.exports = InformationController;
