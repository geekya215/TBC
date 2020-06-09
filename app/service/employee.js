'use strict';

const { Service } = require('egg');


class EmployeeService extends Service {

  async getEmployeeList(enterprise_address) {
    const { ctx } = this;
    const res = await ctx.model.EnterpriseMapping.findAll({
      attributes: [ 'employee_address' ],
      where: { enterprise_address },
      raw: true,
    });
    return res;
  }

  async addEmployee(address) {
    const { ctx } = this;
    const res = await ctx.model.EnterpriseMapping.create({ ...address });
    return res;
  }

  async deleteEmployee(address) {
    const { ctx } = this;
    const res = await ctx.model.EnterpriseMapping.destroy({ where: { ...address } });
    return res;
  }

}

module.exports = EmployeeService;
