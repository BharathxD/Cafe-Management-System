const pool = require("../../config/sqlConnection");


exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM CHEF', (err, rows) => {
      connection.release();
      !err
        ? res.render("chef/chefs", {
            rows: rows,
          })
        : console.log(err);
    });
  });
};


exports.find= (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    let searchValue = req.body.chefSearchResults;
    console.log("Connection: ", connection.threadId);
    searchValue = req.body.getSearchResults;
    connection.query('SELECT * FROM CHEF WHERE chef_name LIKE ? OR chef_brigade LIKE ? OR chef_id LIKE ?',['%'+searchValue+'%','%'+searchValue+'%','%'+searchValue+'%'], (err, rows) => {
      console.log(rows)
      !err
        ? res.render("chef/chefs", {
            rows: rows,
          })
        : console.log(err);
        connection.release();
    });
  });
};