const DB = require('../../config/getConnection');

exports.delete = (req, res) => {
  DB.query(
    `DELETE FROM order_table WHERE order_id = ${req.params.id}`,
    null,
    (rows, err) => {
      !err ? res.redirect('/') : console.log(err);
    }
  );
};
