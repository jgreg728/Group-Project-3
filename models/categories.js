// Creating category model
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categorySearch: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Category;
}