require("dotenv").config();
const sql = require("mssql");

const dbConfig = {
    server: "localhost",
    database: "SchoolThesisDB",
    authentication: {
        type: "default",
        options: {
            userName: "sa",
            password: "123",
        },
    },
    options: {
        encrypt: true,
        trustServerCertificate: true, //
    },
};

const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log("Подключено к базе данных SQL Server с аутентификацией SQL Server");
        return pool;
    })
    .catch(err => {
        console.error("Ошибка подключения к базе данных", err);
        process.exit(1);
    });

module.exports = { sql, poolPromise };
