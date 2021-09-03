'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bairros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bairros.init({
    nome: DataTypes.STRING,
    id_cidade: DataTypes.STRING,
    valor_entrega: DataTypes.INTEGER
  },
   {
    timestamps: false,
    sequelize,
    modelName: 'bairros',
  });
 
  return bairros;
};