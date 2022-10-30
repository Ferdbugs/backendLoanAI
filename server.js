const express = require("express");
const app = express();
const port = 8080;
const categoryRouter = require("./routes/category");

app.use(logger);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/category", categoryRouter);

function logger(req, res, next) {
  console.log("Request for: ", req.originalUrl);
  next();
}

app.listen(port);
