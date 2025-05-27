require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/users", require("./routes/users"));
app.use("/classes", require("./routes/classes"));
app.use("/rooms", require("./routes/rooms"));
app.use("/teachers", require("./routes/teachers"));
app.use("/schedule", require("./routes/schedule"));
app.use("/news", require("./routes/news"));
app.use("/contacts", require("./routes/contacts"));
app.use("/links", require("./routes/links"));

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер работает на порту ${port}`);
});
