'use strict';

const { Controller } = require('egg');

class ProfileController extends Controller {

  async getAccountProfile() {
    const { app, ctx } = this;
    const { username, address, role } = ctx.state.user;
    try {
      const balance = await app.contract.methods.balance().call({ from: address, gasPrice: 0 });
      ctx.body = { username, address, role, balance };
    } catch (e) {
      ctx.status = 400;
    }
  }

  async updateAccountProfile() {
    const { ctx } = this;
    const { address } = ctx.state.user;
    const { password } = ctx.request.body;
    try {
      await ctx.service.profile.updateAccountProfile(address, password);
      ctx.status = 204;
    } catch (e) {
      ctx.status = 400;
    }
  }

  async createBasicProfile() {
    const { ctx } = this;
    const { address, role } = ctx.state.user;
    const data = ctx.request.body;
    console.log(data);
    try {
      await ctx.service.profile.createBasicProfile(data, address, role);
      ctx.status = 201;
    } catch (e) {
      ctx.status = 400;
    }
  }

  async getBasicProfile() {
    const { ctx } = this;
    const { address, role } = ctx.state.user;

    try {
      const basicProfile = await ctx.service.profile.getBasicProfile(address, role);
      ctx.body = { ...basicProfile };
    } catch (e) {
      ctx.status = 400;
    }
  }

  async updateBasicProfile() {
    const { ctx } = this;
    const { address, role } = ctx.state.user;
    const data = ctx.request.body;
    try {
      await ctx.service.profile.updateBasicProfile(data, address, role);
      ctx.status = 204;
    } catch (e) {
      ctx.status = 400;
    }
  }

}

module.exports = ProfileController;
