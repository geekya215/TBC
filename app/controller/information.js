'use strict';

const { Controller } = require('egg');

class InformationController extends Controller {

  async create() {
    const { ctx } = this;
    const { data } = ctx.request.body;
    console.log(data);
    try {
      await ctx.service.information.create(data);
      ctx.status = 200;
    } catch (e) {
      ctx.status = 400;
    }
  }

  async update() {
    const { ctx } = this;
    const { data } = ctx.request.body;
    try {
      await ctx.service.information.update(data);
      ctx.status = 200;
    } catch (e) {
      ctx.status = 400;
    }
  }

}

module.exports = InformationController;
