const pool = require("../../database/sqlConnection");

exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM CHEF', (err, rows) => {
      connection.release();
      !err
        ? res.render("chef/chefs", {
            rows: rows,
            getSearchResults: 'chefSearchResults'
          })
        : console.log(err);
    });
  });
};


exports.find= (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    let searchValue = req.body.chefSearchRsults;
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM CHEF WHERE chef_name LIKE ? OR chef_brigade LIKE ? OR chef_id LIKE ?',['%'+searchValue+'%','%'+searchValue+'%','%'+searchValue+'%'], (err, rows) => {
      connection.release();
      !err
        ? res.render("chef/chefs", {
            rows: rows,
            getSearchResults: 'chefSearchResults'
          })
        : console.log(err);
    });
  });
};