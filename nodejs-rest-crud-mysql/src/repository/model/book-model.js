import { DataTypes } from 'sequelize';
import db from '../../config/database.js';

const Book = db.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    field: 'id',
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  author: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false
});

export default Book;
