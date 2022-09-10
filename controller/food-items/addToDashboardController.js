const pool = require("../../config/sqlConnection");
let itemName, itemPrice;


exports.onSubmit = (req, res) => {
  const num = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query(
      "INSERT INTO order_table SET order_id = ?, order_name = ?, order_price = ?, order_chef = ?, order_prescription = ?",
      [num, itemName, itemPrice, req.body.selectedChefName, req.body.orderPrescription],
      (err, rows) => {
        if (!err) {
          res.redirect('/');
        } else {
          res.render("food-items/createItem", {
            status: false,
            error: true,
            getSearchResults: "itemSearchResults",
          });
          console.log(err);
        }
      }
    );
    connection.release();
  });
};

exports.add = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query(
      "SELECT item.item_name, chef.chef_name, item.item_price FROM item, chef WHERE item_id = ?",[req.params.id],(err, rows) => {
        itemName = rows[0].item_name;
        itemPrice = rows[0].item_price;
        if (!err) {
          res.render("food-items/addtodashboard", {
            status: false,
            error: false,
            getSearchResults: "itemSearchResults",
            rows: rows,
          });
        } else { console.log(err); }
      }
    );
    connection.release();
  });
};
