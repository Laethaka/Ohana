var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // user_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   notEmpty: true,
    //   validate: {
    //     len: [5]
    //   }
    // },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      validate: {
        len: [5,15]
      }
    },
    primary_user: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {          
            len: [3, 30]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        isInt: true
    },
    zipcode: {
        type: DataTypes.STRING,
        isInt: true
    }
  });
  
  User.associate = function(models) {
    // We're saying that a User should belong to an Family
    // A User can't be created without an Family due to the foreign key constraint
    User.belongsTo(models.Family, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  
  return User;
};