const pool = require("../../config/sqlConnection");

exports.delete = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) console.log(err);
      console.log("Connection: ", connection.threadId);
      connection.query('DELETE FROM item WHERE item_id = ?',[req.params.id], (err, rows) => {
        connection.release();
        !err
          ? res.redirect("/item")
          : console.log(err);
      });
    });
  };