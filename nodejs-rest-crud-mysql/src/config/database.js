import { Sequelize } from "sequelize";

const db = new Sequelize('books', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});

db.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

export default db;
