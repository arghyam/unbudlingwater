const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: DataTypes.STRING,
  state: DataTypes.STRING,
  district: DataTypes.STRING,
  city: DataTypes.STRING,
  phoneNumber: {
    type: DataTypes.STRING,
    get() {
      const rawValue = this.getDataValue('phoneNumber');
      if (rawValue) {
        
        return rawValue.slice(0, 2) + '*'.repeat(rawValue.length - 2);
      }
      return null;
    },
  },
  emailId: {
    type: DataTypes.STRING,
    get() {
      const rawValue = this.getDataValue('emailId');
      if (rawValue) {
        
        const [localPart, domain] = rawValue.split('.');
        if (localPart && domain) {
          return `${localPart.slice(0, 2)}*****.${domain}`;
        }
      }
      return null;
    },
  },
  userRole: DataTypes.STRING,
});

module.exports = User;
