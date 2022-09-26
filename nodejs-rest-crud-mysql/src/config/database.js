import { Sequelize } from "sequelize";

const db = new Sequelize('books', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
