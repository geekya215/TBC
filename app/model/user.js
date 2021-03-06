'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(20),
    password: STRING(100),
    address: STRING(100),
    role: STRING(10),
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
