const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
require("dotenv").config();

const dashboard = require('./routes/dashboard/dashboard.js');

const crewOfUsers = require('./routes/user/crewOfUsers.js');
const createUser = require('./routes/user/createUser.js');
const updateUser = require('./routes/user/updateUser.js');
const readUser = require('./routes/user/readUser.js');
const deleteUser = require('./routes/user/deleteUser.js');

const Chef = require('./routes/chef/Chef.js');
const createChef = require('./routes/chef/createChef.js');
const updateChef = require('./routes/chef/updateChef.js');
const readChef = require('./routes/chef/readChef.js');
const deleteChef = require('./routes/chef/deleteChef.js');

const item = require('./routes/food-items/item.js');
const createItem = require('./routes/food-items/createItem.js');
const updateItem = require('./routes/food-items/updateItem.js');
const readItem = require('./routes/food-items/readItem.js');
const deleteItem = require('./routes/food-items/deleteItem.js');

const addToDashboard = require('./routes/food-items/addToDashboard.js');
const deleteOrder = require('./routes/dashboard/deleteDashboard.js');
const exportTable = require('./routes/dashboard/exportTable.js');
const readDashboard = require('./routes/dashboard/readDashboard.js');


app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(dashboard);

app.use(crewOfUsers);
app.use(createUser);
app.use(updateUser);
app.use(readUser);
app.use(deleteUser);

app.use(Chef);
app.use(createChef);
app.use(updateChef);
app.use(readChef);
app.use(deleteChef);

app.use(item);
app.use(createItem);
app.use(updateItem);
app.use(readItem);
app.use(deleteItem);

app.use(addToDashboard);
app.use(deleteOrder);
app.use(exportTable);
app.use(readDashboard);

app.listen(port, () => {
    console.log('listening on port ' + port);
})