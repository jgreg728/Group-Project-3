// Creating location model
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define("Location", {
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Location.associate = (models) => {
    // A location belongs to a user, can't be created without one
    Location.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Location;
};
