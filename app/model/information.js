'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, JSON } = app.Sequelize;

  const Information = app.model.define('information', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    address: STRING(100),
    data: JSON,
    created_at: DATE,
    updated_at: DATE,
  });

  return Information;
};
