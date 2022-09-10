const pool = require("../../database/sqlConnection");

exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM ORDER_TABLE', (err, rows) => {
      connection.release();
      let total = 0;
      rows.forEach(element => {
        total += element.order_price;
      });
      !err
        ? res.render("dashboard/dashboard", {
            rows: rows,
            getSearchResults: 'orderSearchResults',
            total: total
          })
        : console.log(err);
    });
  });
};


exports.find= (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    let searchValue = req.body.orderSearchResults;
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM ORDER_TABLE WHERE order_name LIKE ? OR chef_name LIKE ? OR order_price LIKE ?',['%'+searchValue+'%','%'+searchValue+'%','%'+searchValue+'%'], (err, rows) => {
      connection.release();
      !err
        ? res.render("user/dashboard", {
            rows: rows,
            getSearchResults: 'orderSearchResults'
          })
        : console.log(err);
    });
  });
};