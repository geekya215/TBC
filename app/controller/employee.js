'use strict';

const { Controller } = require('egg');

class EmployeeController extends Controller {

  async getEmployeeList() {
    const { ctx } = this;
    const { address, role } = ctx.state.user;
    try {
      if (role === 'enterprise') {
        const employees = await ctx.service.employee.getEmployeeList(address);
        ctx.body = employees;
      } else {
        ctx.status = 403;
      }

    } catch (e) {
      ctx.status = 400;
    }
  }

  async addEmployee() {
    const { ctx } = this;
    const { address, role } = ctx.state.user;
    const { employee_address } = ctx.request.body;
    try {
      if (role === 'enterprise') {
        await ctx.service.employee.addEmployee({ enterprise_address: address, employee_address });
        ctx.status = 201;
      } else {
        ctx.status = 403;
      }
    } catch (e) {
      ctx.status = 400;
    }
  }

  async deleteEmployee() {
    const { ctx } = this;
    const { address, role } = ctx.state.user;
    const { employee_address } = ctx.request.body;
    try {
      if (role === 'enterprise') {
        await ctx.service.employee.deleteEmployee({ enterprise_address: address, employee_address });
        ctx.status = 204;
      } else {
        ctx.status = 403;
      }
    } catch (e) {
      ctx.status = 400;
    }
  }

}

module.exports = EmployeeController;
