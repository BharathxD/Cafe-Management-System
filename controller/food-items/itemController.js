const pool = require("../../database/sqlConnection");

exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM ITEM', (err, rows) => {
      connection.release();
      !err
        ? res.render("food-items/item", {
            rows: rows,
            getSearchResults: 'itemSearchResults'
          })
        : console.log(err);
    });
  });
};


exports.find= (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    let searchValue = req.body.itemSearchResults;
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM ITEM WHERE item_name LIKE ? OR item_availability LIKE ? OR item_id LIKE ?',['%'+searchValue+'%','%'+searchValue+'%','%'+searchValue+'%'], (err, rows) => {
      connection.release();
      !err
        ? res.render("item/item", {
            rows: rows,
            getSearchResults: 'itemSearchResults'
          })
        : console.log(err);
    });
  });
};