const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
require("dotenv").config();

/* Importing All the Routes */ 

const dashboard = require("./routes/dashboard/dashboard.js");
const crewOfUsers = require("./routes/user/crewOfUsers.js");
const Chef = require("./routes/chef/Chef.js");
const item = require("./routes/food-items/item.js");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

/* Dashboard Route */

app.use(dashboard);

/* Crew Route */

app.use(crewOfUsers);

/* Chef Route */

app.use(Chef);

/* Item Route */

app.use(item);

/* Listening on the port 3000 */

app.listen(port, () => {
  console.log(`The Server is listening on ${port}`);
});
