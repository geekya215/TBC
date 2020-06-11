'use strict';

const { Controller } = require('egg');

class StudentController extends Controller {

  async getStudentList() {
    const { ctx } = this;
    const { address, role } = ctx.state.user;
    try {
      if (role === 'university') {
        const students = await ctx.service.student.getStudentList(address);
        ctx.body = students;
      } else {
        ctx.status = 403;
      }
    } catch (e) {
      ctx.status = 400;
    }
  }

  async addStudent() {
    const { ctx } = this;
    const { address, role } = ctx.state.user;
    const { student_address } = ctx.request.body;
    try {
      if (role === 'university') {
        await ctx.service.student.addStudent({ university_address: address, student_address });
        ctx.status = 201;
      } else {
        ctx.status = 403;
      }
    } catch (e) {
      ctx.status = 400;
    }
  }

  async deleteStudent() {
    const { ctx } = this;
    const { address, role } = ctx.state.user;
    const { student_address } = ctx.request.body;
    try {
      if (role === 'university') {
        await ctx.service.student.deleteStudent({ university_address: address, student_address });
        ctx.status = 204;
      } else {
        ctx.status = 403;
      }
    } catch (e) {
      ctx.status = 400;
    }
  }

}

module.exports = StudentController;
