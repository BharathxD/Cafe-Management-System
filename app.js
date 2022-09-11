const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
// const passport = require('./config/passport');
require("dotenv").config();

const dashboard = require("./routes/dashboard/dashboard.js");
const pool = require("./config/sqlConnection");

const crewOfUsers = require("./routes/user/crewOfUsers.js");

const Chef = require("./routes/chef/Chef.js");

const item = require("./routes/food-items/item.js");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
pool.getConnection((err, connection) => {
  connection.query("SELECT * FROM ORDER_TABLE", (err, rows) => {
    var getTotal = 0;
    rows.forEach((element)=> {
      getTotal += element.order_price;
    });
    res.locals.bill = getTotal == 0 ? false : true;
    res.locals.actualTotal = getTotal || 0;
    res.locals.afterGST = getTotal * 0.025 || 0;
    res.locals.withGST = (getTotal) + getTotal * 0.025 || 0;
    res.locals.withRoundedTotal = (getTotal) + getTotal * 0.025 || 0;
  });
});
next();
});

app.use(dashboard);

app.use(crewOfUsers);

app.use(Chef);

app.use(item);

app.listen(port, () => {
  console.log("listening on port " + port);
});
