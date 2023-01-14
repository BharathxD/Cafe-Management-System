const express = require("express");
const app = express();
const flash = require("connect-flash");
const session = require("express-session");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { errorHandler } = require("./middlewares/errorHandler");

dotenv.config();

const dashboardRouter = require("./routes/dashboard/dashboard.js");
const csvRouter = require("./routes/csv/csv.js");
const customerRouter = require("./routes/customer/customer.js");
const chefRouter = require("./routes/chef/Chef.js");
const itemRouter = require("./routes/food-items/item.js");
const invoiceRouter = require("./routes/invoice/invoice.js");

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(flash());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Secret",
    resave: false,
    saveUninitialized: false,
    maxAge: 1000 * 60 * 60 * 2, // 2 hours
  })
);

app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use("/", dashboardRouter);
app.use("/csv", csvRouter);
app.use("/customer", customerRouter);
app.use("/chef", chefRouter);
app.use("/item", itemRouter);
app.use("/invoice", invoiceRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
