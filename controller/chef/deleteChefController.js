const pool = require("../../config/sqlConnection");

exports.delete = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) console.log(err);
      console.log("Connection: ", connection.threadId);
      connection.query('DELETE FROM chef WHERE chef_id = ?',[req.params.id], (err, rows) => {
        connection.release();
        !err
          ? res.redirect("/chefs")
          : console.log(err);
      });
    });
  };