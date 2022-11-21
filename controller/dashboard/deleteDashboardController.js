const DB = require("../../config/getConnection");

exports.delete = (req, res) => {
  DB.query(
    `DELETE FROM order_table WHERE order_id = ?`,
    [req.params.id],
    (rows, err) => {
      req.flash(
        "success",
        `Appetizer with ID ${req.params.id} has been Sucessfully Deleted ✅`
      );
      if (!err) {
        res.redirect("/");
      } else {
        console.log(err);
      }
    }
  );
};
