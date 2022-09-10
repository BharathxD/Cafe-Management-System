const pool = require("../../database/sqlConnection");

exports.read = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) console.log(err);
      console.log("Connection: ", connection.threadId);
      console.log(req.params.id);
      connection.query('SELECT * FROM CHEF WHERE chef_id = ?',[req.params.chefid], (err, rows) => {
        connection.release();
        !err
          ? res.render("chef/readChef", {
              rows: rows,
              getSearchResults: 'chefSearchResults'
            })
          : console.log(err);
      });
    });
  };