const pool = require("../../database/sqlConnection");

exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) console.log(err);
    console.log("Connection: ", connection.threadId);
    connection.query('SELECT * FROM USER', (err, rows) => {
      connection.release();
      !err
        ? res.render("user/crewOfUsers.ejs", {
            rows: rows,
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
    connection.query('SELECT * FROM USER WHERE first_name LIKE ? OR last_name LIKE ? OR phone LIKE ?',['%'+searchValue+'%','%'+searchValue+'%','%'+searchValue+'%'], (err, rows) => {
      connection.release();
      !err
        ? res.render("user/crewOfUsers", {
            rows: rows,
          })
        : console.log(err);
    });
  });
};