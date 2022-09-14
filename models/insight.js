'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class insight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  insight.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    insight: DataTypes.STRING,
    coin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'insight',
  });
  return insight;
};