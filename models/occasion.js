module.exports = function(sequelize, DataTypes) {
    var Occasion = sequelize.define("Occasion", {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
            len: [5, 15]
        }
      },
      date: {
          type: DataTypes.STRING,
          allowNull: false,
          isDate: true
      },
      start_time: {
          type: DataTypes.STRING,
          allowNull: false,
          notEmpty: true,
      },
      end_time: {
          type: DataTypes.STRING,
          allowNull: true,
          notEmpty: true
      },
      zipcode: {
          type: DataTypes.STRING,
          isInt: true,
          allowNull: true
      },
      location: {
          type: DataTypes.STRING,
          allowNull: false,
          notEmpty: true
      },
      description: {
          type: DataTypes.TEXT,
          allowNull: false,
          notEmpty: true
      },
      photo: {
        type: DataTypes.STRING,
        isUrl: true
      },
      num_families: {
          type: DataTypes.INTEGER,
          isInt: true,
          defaultValue: 1
      },
      proposed: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
      },
      vote: {
          type: DataTypes.INTEGER,
          isInt: true,
          defaultValue: 0
      }
    });
  
    Occasion.associate = function(models) {
      // We're saying that an Event should belong to a Family
      // An Event can't be created without a Family due to the foreign key constraint
      Occasion.belongsTo(models.Family, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Occasion;
  };