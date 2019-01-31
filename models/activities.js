module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define("Activity", {
    activity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING
    },
    photos: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.FLOAT
    }
  });

  Activity.associate = (models) => {
    // An activity belongs to a location, can't be created without one
    Activity.belongsTo(models.Location, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Activity;
}