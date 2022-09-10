const pool = require("../../config/sqlConnection");

exports.read = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) console.log(err);
      console.log("Connection: ", connection.threadId);
      console.log(req.params.id);
      connection.query('SELECT * FROM order_table WHERE order_id = ?',[req.params.id], (err, rows) => {
        connection.release();
        !err
          ? res.render("dashboard/readDashboard", {
              rows: rows,
              getSearchResults: 'orderSearchResults'
            })
          : console.log(err);
      });
    });
  };