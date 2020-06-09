'use strict';

module.exports = app => {
  const { STRING, INTEGER, BOOLEAN, DATE, JSON } = app.Sequelize;

  const Information = app.model.define('information', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    mard_address: STRING(100),
    confirm_address: STRING(100),
    data: JSON,
    created_at: DATE,
    confirm_at: DATE,
    confirm: BOOLEAN,
  });

  return Information;
};
