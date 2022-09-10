const pool = require("../../config/sqlConnection");
var total;

exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM ORDER_TABLE', (err, rows) => {
      connection.release();
      total = 0;
      rows.forEach(element => {
        total += element.order_price;
      });
      !err
        ? res.render("dashboard/dashboard", {
            rows: rows,
            total: total
          })
        : console.log(err);
    });
  });
};


exports.find= (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    let searchValue = req.body.getSearchResults;
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM ORDER_TABLE WHERE order_name LIKE ? OR order_id LIKE ? OR order_price LIKE ?',['%'+searchValue+'%','%'+searchValue+'%','%'+searchValue+'%'], (err, rows) => {
      connection.release();
      console.log(rows);
      !err
        ? res.render("dashboard/dashboard", {
            rows: rows,
            total: total,
          })
        : console.log(err);
    });
  });
};