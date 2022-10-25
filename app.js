const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
require('dotenv').config();

/* Importing All the Routes */ 

const dashboard = require('./routes/dashboard/dashboard.js');
const csv = require('./routes/csv/csv.js');
const customer = require('./routes/customer/customer.js');
const Chef = require('./routes/chef/Chef.js');
const item = require('./routes/food-items/item.js');
const invoice = require('./routes/invoice/invoice.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

/* Dashboard Route */

app.use(dashboard);

/* Csv Route */

app.use(csv);

/* Crew Route */

app.use(customer);

/* Chef Route */

app.use(Chef);

/* Item Route */

app.use(item);

/* Invoice Route */

app.use(invoice);

/* Listening on the port 3000 */

app.listen(port, () => {
  console.log(`The Magic 🪄 is Happening on ${port}`);
});
