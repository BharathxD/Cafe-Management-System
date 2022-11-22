const DB = require('../../config/getConnection');

exports.delete = (req, res) => {
  DB.query(
    `DELETE FROM chef WHERE chef_id = ?`,
    [req.params.id],
    (rows, err) => {
      if (!err) {
        req.flash('success', `Chef with ID ${req.params.id} has been Sucessfully Deleted ✅`)
      } else {
        req.flash('error', `Chef with ID ${req.params.id} Couldn't be Deleted ❌`)
        console.log(err);
      }
    }
  );
};
