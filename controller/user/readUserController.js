const pool = require("../../database/sqlConnection");

exports.read = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) console.log(err);
      console.log("Connection: ", connection.threadId);
      connection.query('SELECT * FROM USER WHERE id = ?',[req.params.id], (err, rows) => {
        connection.release();
        !err
          ? res.render("user/readUser", {
              rows: rows,
            })
          : console.log(err);
      });
    });
  };