module.exports = function(sequelize, DataTypes) {
    var Family = sequelize.define("Family", {
      // Giving the Author model a name of type STRING
      nick_name: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 40]
      }
    });
  
    Family.associate = function(models) {
      // Associating Family with User and Events
      // When a Family is deleted, also delete any associated Users and Events
      Family.hasMany(models.User, {
        onDelete: "cascade"
      });
      Family.hasMany(models.Event, {
          onDelete: "cascade"
      });
    };
  
    return Family;
  };