const bcrypt = require("bcryptjs");
// create a model for our our tasks

// exporting this model to our index
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    // define columns of our table
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // create custom methods for our our user model

  // comparing password to hash password
  User.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // hooks happen on sepcific scenarios

  // enctypting users passwords
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return User;
};
