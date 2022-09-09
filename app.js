const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
require("dotenv").config();

const home = require('./routes/home.js');
const appetizers = require('./routes/food-items/Appetizers');
const chefs = require('./routes/chef/Chef.js');
const newappetizer = require('./routes/food-items/createAppetizers');
const newchef = require('./routes/chef/createChef.js');
const crewOfUsers = require('./routes/user/crewOfUsers.js');
const createUser = require('./routes/user/createUser.js');
const updateUser = require('./routes/user/updateUser.js');
const readUser = require('./routes/user/readUser.js');
const deleteUser = require('./routes/user/deleteUser.js');

app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(home);
app.use(appetizers);
app.use(chefs);
app.use(crewOfUsers);
app.use(createUser);
app.use(newappetizer);
app.use(newchef);
app.use(updateUser);
app.use(readUser);
app.use(deleteUser);

app.listen(port, () => {
    console.log('listening on port ' + port);
})