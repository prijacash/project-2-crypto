'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.fave.hasMany(models.coin)
      // models.fave.hasMany(models.user)
    }
  }
  fave.init({
    userId: DataTypes.INTEGER,
    coinId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'fave',
  });
  return fave;
};