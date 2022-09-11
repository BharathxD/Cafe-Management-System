const pool = require("../../config/sqlConnection");

exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM ITEM', (err, rows) => {
      connection.release();
      !err
        ? res.render("food-items/item", {
            rows: rows,
            total: rows.length
          })
        : console.log(err);
    });
  });
};


exports.find= (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    let searchValue = req.body.getSearchResults;
    console.log(searchValue);
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM ITEM WHERE item_name LIKE ? OR item_availability LIKE ? OR item_id LIKE ?',['%'+searchValue+'%','%'+searchValue+'%','%'+searchValue+'%'], (err, rows) => {
      connection.release();
      console.log(rows)
      !err
        ? res.render("food-items/item", {
            rows: rows,
            total: rows.length
          })
        : console.log(err);
    });
  });
};