'use strict';

const { Service } = require('egg');

class StudentService extends Service {

  async getStudentList(student_address) {
    const { ctx } = this;
    const res = await ctx.model.StudentMapping.findAll({
      attributes: [ 'student_address' ],
      where: { student_address },
      raw: true,
    });
    return res;
  }

  async addStudent(address) {
    const { ctx } = this;
    const res = await ctx.model.StudentMapping.create({ ...address });
    return res;
  }

  async deleteStudent(address) {
    const { ctx } = this;
    const res = await ctx.model.StudentMapping.destroy({ where: { ...address } });
    return res;
  }

}

module.exports = StudentService;
