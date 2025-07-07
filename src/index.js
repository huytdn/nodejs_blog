const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

// Logger
app.use(morgan("combined"));

// Cấu hình handlebars
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

// 👇 Trỏ đúng đến folder chứa home.handlebars
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home"); // Tìm file home.handlebars trong folder views
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
