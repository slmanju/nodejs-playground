import { Sequelize } from 'sequelize';
import db from '../../config/database';

const { DataTypes } = Sequelize;

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
