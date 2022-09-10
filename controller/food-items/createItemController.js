const pool = require("../../config/sqlConnection");

exports.add = (req, res) => {
  var num = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  res.render("food-items/createitem", {
    status: false,
    error: false,
    getSearchResults: "itemSearchResults",
    randomID: num,
  });
};

exports.onSubmit = (req, res) => {
  var num = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    const { itemName, itemAvailability,itemPrice, itemLDescription } = req.body;
    console.log("Connection: ", connection.threadId);
    connection.query(
      "INSERT INTO item SET item_id = ?, item_name = ?, item_availability = ?, item_price = ?, item_long_description = ?",
      [num, itemName, itemAvailability, itemPrice, itemLDescription],
      (err, rows) => {
        if (!err) {
          res.render("food-items/createItem", {
            status: true,
            error: false,
            getSearchResults: "itemSearchResults",
            randomID: num,
          });
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
