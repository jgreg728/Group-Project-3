// Save data from contact form
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define("Contact", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  return Contact;
}