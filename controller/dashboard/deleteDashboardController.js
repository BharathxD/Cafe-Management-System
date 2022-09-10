const pool = require("../../config/sqlConnection");

exports.delete = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) console.log(err);
      console.log("Connection: ", connection.threadId);
      connection.query('DELETE FROM order_table WHERE order_id = ?',[req.params.id], (err, rows) => {
        connection.release();
        res.redirect('/');
        if (err) console.log(err);
      });
    });
  };