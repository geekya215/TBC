'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.user.login);
  router.post('/register', controller.user.register);

  router.get('/profile/account', controller.profile.getAccountProfile);
  router.get('/profile/basic', controller.profile.getBasicProfile);
  router.post('/profile/basic', controller.profile.createBasicProfile);
  router.patch('/profile/account', controller.profile.updateAccountProfile);
  router.patch('/profile/basic', controller.profile.updateBasicProfile);

  router.post('/information', controller.information.create);
  router.put('/information', controller.information.update);
};
