'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  coin.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    marketCap: DataTypes.INTEGER,
    volumeDay: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'coin',
  });
  return coin;
};