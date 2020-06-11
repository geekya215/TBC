'use strict';

const { Service } = require('egg');

class StudentService extends Service {

  async getStudentList(university_address) {
    const { ctx } = this;
    const res = await ctx.model.UniversityMapping.findAll({
      attributes: [ 'student_address' ],
      where: { university_address },
      raw: true,
    });
    return res;
  }

  async addStudent(address) {
    const { ctx } = this;
    const res = await ctx.model.UniversityMapping.create({ ...address });
    return res;
  }

  async deleteStudent(address) {
    const { ctx } = this;
    const res = await ctx.model.UniversityMapping.destroy({ where: { ...address } });
    return res;
  }

}

module.exports = StudentService;
