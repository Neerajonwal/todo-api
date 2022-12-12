const express = require("express");
const app = express();
const hbs = require("hbs")
const path = require("path")
const port = process.env.PORT || 8000;
const todo = require("./models/schema")
require("./db/conn")
const todorouter = require("./routers/router")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(todorouter)

const static_path = path.join(__dirname, "../public");
const partials_path = path.join(__dirname, "../templates/partials")
const template_path = path.join(__dirname, "../templates/views")


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("", (req, res) => {
    res.render("index")
})



app.listen(port, () => {
    console.log(`server ${port}`)
})