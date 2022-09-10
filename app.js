const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
require("dotenv").config();

const dashboard = require('./routes/dashboard/dashboard.js');

const crewOfUsers = require('./routes/user/crewOfUsers.js');

const Chef = require('./routes/chef/Chef.js');

const item = require('./routes/food-items/item.js');

app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(dashboard);

app.use(crewOfUsers);

app.use(Chef);

app.use(item);


app.listen(port, () => {
    console.log('listening on port ' + port);
})