const DB = require('../../config/getConnection');


exports.onDelete = (req, res) => {
  DB.query('DELETE FROM customer WHERE customer_id = ?',[req.params.id], (rows, err) => {
    !err
      ? res.redirect('/customer')
      : console.log(err);
  });
};