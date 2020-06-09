'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Enterprise = app.model.define('enterprise', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    address: STRING(100),
    site: STRING(50),
    telephone: STRING(30),
    description: STRING(100),
    created_at: DATE,
    updated_at: DATE,
  });

  return Enterprise;
};
