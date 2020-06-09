'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.post('/login', controller.user.login);
  router.post('/register', controller.user.register);

  router.get('/profile/account', controller.profile.getAccountProfile);
  router.patch('/profile/account', controller.profile.updateAccountProfile);

  router.get('/profile/basic', controller.profile.getBasicProfile);
  router.post('/profile/basic', controller.profile.createBasicProfile);
  router.patch('/profile/basic', controller.profile.updateBasicProfile);

  router.get('/employees', controller.employee.getEmployeeList);
  router.post('/employees', controller.employee.addEmployee);
  router.delete('/employees', controller.employee.deleteEmployee);

  router.get('/students', controller.student.getStudentList);
  router.post('/students', controller.student.addStudent);
  router.delete('/students', controller.student.deleteStudent);

  router.post('/information', controller.information.create);
  router.put('/information', controller.information.update);
};
