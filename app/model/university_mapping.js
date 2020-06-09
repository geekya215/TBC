'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const UniversityMapping = app.model.define('university_mapping', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    university_address: STRING(100),
    student_address: STRING(100),
    created_at: DATE,
  });

  return UniversityMapping;
};
