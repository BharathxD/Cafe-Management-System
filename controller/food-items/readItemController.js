const pool = require("../../config/sqlConnection");

exports.read = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) console.log(err);
      console.log("Connection: ", connection.threadId);
      console.log(req.params.id);
      connection.query('SELECT * FROM ITEM WHERE item_id = ?',[req.params.itemid], (err, rows) => {
        connection.release();
        !err
          ? res.render("food-items/readItem", {
              rows: rows,
              getSearchResults: 'itemSearchResults'
            })
          : console.log(err);
      });
    });
  };