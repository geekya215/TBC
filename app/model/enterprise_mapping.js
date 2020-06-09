'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const EnterpriseMapping = app.model.define('enterprise_mapping', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    enterprise_address: STRING(100),
    employee_address: STRING(100),
    created_at: DATE,
  });

  return EnterpriseMapping;
};
