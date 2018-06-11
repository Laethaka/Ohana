module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
          len: [5]
        }
      },
      user_password: {
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
              len: [5, 30]
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
  
    return User;
  };