// Requiring bcrypt-nodejs for password hasing.
const bcrypt = require("bcrypt-nodejs");

// Creating user model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {

    // email cannot be null and must be proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    // password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in the database
  User.prototype.validPassword = (password) => {
    return bcrypt.comapreSync(password, this.password);
  }

  // Hooks are automatic methos that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically has their password
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};
