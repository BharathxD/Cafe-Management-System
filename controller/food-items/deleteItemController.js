const DB = require('../../config/getConnection');

exports.delete = (req, res) => {
    DB.query('DELETE FROM item WHERE item_id = ?',[req.params.id], (rows, err) => {
        if (!err) {
            req.flash('success', `Appetizer with ID ${req.params.id} has been Sucessfully Deleted ✅`)
            res.redirect('/item')
        } else {
            console.log(err);
        }
      });
  };