// Creating sub category model
module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define("SubCategory", {
    subCatName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subCatSearch: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  SubCategory.associate = (models) => {
    // A subcategory belongs to a category, can't be created without one
    SubCategory.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return SubCategory;
};