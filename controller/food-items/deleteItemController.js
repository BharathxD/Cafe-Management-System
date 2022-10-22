const DB = require("../../config/getConnection");

exports.delete = (req, res) => {
    DB.query('DELETE FROM item WHERE item_id = ?',[req.params.id], (rows, err) => {
        !err
          ? res.redirect("/item")
          : console.log(err);
      });
  };