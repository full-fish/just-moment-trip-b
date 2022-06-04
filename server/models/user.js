"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      email: DataTypes.STRING,
      nickname: DataTypes.STRING,
      password: DataTypes.STRING,
      picture: DataTypes.STRING,
      e: DataTypes.BIGINT,
      d: DataTypes.BIGINT,
      N: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "user",
      freezeTableName: true,
      timestamps: true, //기본이 true
    }
  );
  return user;
};
