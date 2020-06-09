'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Talent = app.model.define('talent', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    address: STRING(100),
    sex: STRING(10),
    birthday: DATE,
    mobile: STRING(11),
    description: STRING(100),
    created_at: DATE,
    updated_at: DATE,
  });

  return Talent;
};
