const pool = require("../../config/sqlConnection");

exports.edit = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM item WHERE item_id = ?',[req.params.id], (err, rows) => {
      connection.release();
      !err
        ? res.render("food-items/updateITem", {
            rows: rows,
            status: false,
            error: false,
            getSearchResults: 'itemSearchResults'
          })
        : console.log(err);
    });
  });
};

exports.onEdit = (req, res) => {
  const { itemID, itemName, itemAvailability, itemPrice, itemLDescription } =
      req.body;
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query("UPDATE item SET item_id = ?, item_name = ?, item_availability = ?, item_price = ?, item_long_description = ? WHERE item_id = ?",
    [itemID, itemName, itemAvailability, itemPrice, itemLDescription, req.params.id], (err, rows) => {
      connection.release();
      if (!err) {
        res.redirect("/item");
      } else {
        res.render("food-items/updateItem", {
          status: false,
          error: true,
          getSearchResults: 'itemSearchResults',
          rows: rows,
        });
        console.log(err);
      }
    });
  });
};
