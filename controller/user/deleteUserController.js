const pool = require("../../database/sqlConnection");

exports.delete = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) console.log(err);
      console.log("Connection: ", connection.threadId);
      connection.query('DELETE FROM user WHERE id = ?',[req.params.id], (err, rows) => {
        connection.release();
        !err
          ? res.redirect("/ourteam")
          : console.log(err);
      });
    });
  };