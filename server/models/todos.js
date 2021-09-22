'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.todos.belongsTo(models.User, { foreignKey: {allowNull: false, name: "userId" }});
    }
  };
  todos.init({
    todo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'todos',
  });
  return todos;
};