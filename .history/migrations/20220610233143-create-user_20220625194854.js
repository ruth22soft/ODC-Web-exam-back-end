'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      middle_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      sex: {
        type: Sequelize.STRING
      },
     phone_no: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      sub_city: {
        type: Sequelize.STRING
      },
      wereda: {
        type: Sequelize.STRING
      },
      house_no: {
        type: Sequelize.STRING
      },
      emergency_contact_full_name: {
        type: Sequelize.STRING
      },
      emergency_contact_phone: {
        type: Sequelize.STRING
      },
      date_of_entrance: {
        type: Sequelize.DATE
      },
      job_position: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      department: {
        type: Sequelize.STRING
      },
      section: {
        type: Sequelize.STRING
      },
      block: {
        type: Sequelize.STRING
      },
      dorm: {
        type: Sequelize.STRING
      },
      role_type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};