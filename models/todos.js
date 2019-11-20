// create a model for our our tasks

// exporting this model to our index
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Tasks", {
    // define columns of our table
    todo: { type: DataTypes.STRING },
    userID: { type: DataTypes.INTEGER, allowNull: false }
  });
  return Task;
};
